/**
 * Script reutilizable para generar el documento final de cualquier tarea.
 *
 * Uso:
 *   node _plantillas/generar_tarea.js <carpeta_tarea> <titulo_tarea> <fecha>
 *
 * Ejemplo:
 *   node _plantillas/generar_tarea.js tarea3_espacios_vectoriales "Espacios Vectoriales" "22 de febrero de 2026"
 *
 * Prerequisito:
 *   Debe existir temp_pandoc.docx en la carpeta de la tarea (generado con Pandoc).
 *   pandoc <tema>.md -o temp_pandoc.docx --from markdown --to docx
 */

const fs = require('fs');
const JSZip = require('jszip');
const path = require('path');

async function generarTarea(carpetaTarea, tituloTarea, fecha) {
    const rootDir = path.join(__dirname, '..');
    const tareaDir = path.join(rootDir, carpetaTarea);

    // 1. Cargar base (tarea2 como plantilla maestra)
    const basePath = path.join(rootDir, 'tarea2_matrices', 'bornacelli_laura_algebramatrices.docx');
    if (!fs.existsSync(basePath)) {
        console.error('ERROR: No se encontró la plantilla base:', basePath);
        process.exit(1);
    }
    const baseZip = await JSZip.loadAsync(fs.readFileSync(basePath));

    // 2. Cargar contenido Pandoc
    const pandocPath = path.join(tareaDir, 'temp_pandoc.docx');
    if (!fs.existsSync(pandocPath)) {
        console.error('ERROR: No se encontró temp_pandoc.docx en', tareaDir);
        console.error('Primero ejecuta: pandoc <tema>.md -o temp_pandoc.docx --from markdown --to docx');
        process.exit(1);
    }
    const pandocZip = await JSZip.loadAsync(fs.readFileSync(pandocPath));

    // 3. Extraer document.xml de la base
    const baseDoc = await baseZip.file('word/document.xml').async('string');

    // 4. Extraer portada (desde <w:body> hasta el primer pageBreakBefore)
    const bodyStart = baseDoc.indexOf('<w:body>') + '<w:body>'.length;
    const pageBreakMarker = '<w:p><w:pPr><w:pageBreakBefore /></w:pPr></w:p>';
    const firstPageBreak = baseDoc.indexOf(pageBreakMarker);

    if (firstPageBreak === -1) {
        console.error('ERROR: No se encontró el marcador de salto de página en la plantilla base');
        process.exit(1);
    }

    let portada = baseDoc.substring(bodyStart, firstPageBreak);

    // 5. Actualizar portada
    portada = portada.replace(
        'Reporte Solución de Problemas Matemáticos: Álgebra de Matrices',
        'Reporte Solución de Problemas Matemáticos: ' + tituloTarea
    );
    portada = portada.replace(
        '24 de enero de 2026',
        fecha
    );

    // 6. Extraer sectPr de la base
    const sectPrStart = baseDoc.lastIndexOf('<w:sectPr');
    const sectPr = baseDoc.substring(sectPrStart, baseDoc.indexOf('</w:body>'));

    // 7. Extraer contenido Pandoc
    const pandocDoc = await pandocZip.file('word/document.xml').async('string');
    const pandocBodyStart = pandocDoc.indexOf('<w:body>') + '<w:body>'.length;
    const pandocSectPrStart = pandocDoc.lastIndexOf('<w:sectPr');
    const pandocBodyEnd = pandocSectPrStart > -1 ? pandocSectPrStart : pandocDoc.indexOf('</w:body>');
    let pandocContent = pandocDoc.substring(pandocBodyStart, pandocBodyEnd);

    // 8. Inyectar pageBreakBefore en cada Heading2
    pandocContent = pandocContent.replace(
        /<w:pStyle w:val="Heading2"\s*\/>/g,
        '<w:pStyle w:val="Heading2" /><w:pageBreakBefore />'
    );

    // 9. Construir document.xml final
    const docTagEnd = baseDoc.indexOf('<w:body>');
    const docTag = baseDoc.substring(0, docTagEnd);
    const newDoc = docTag +
        '<w:body>' +
        portada +
        pageBreakMarker + '\n' +
        pandocContent +
        sectPr +
        '</w:body></w:document>';

    // 10. Crear ZIP copiando todo de la base
    const outputZip = new JSZip();
    for (const filePath of Object.keys(baseZip.files)) {
        const file = baseZip.files[filePath];
        if (file.dir) {
            outputZip.folder(filePath);
        } else {
            outputZip.file(filePath, await file.async('nodebuffer'));
        }
    }
    outputZip.file('word/document.xml', newDoc);

    // 11. Generar archivo
    const outputBuf = await outputZip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE',
        compressionOptions: { level: 6 }
    });

    // 12. Determinar nombre de salida
    const tema = carpetaTarea.replace(/^tarea\d+_/, '');
    const outputName = 'bornacelli_laura_' + tema + '.docx';
    const outputPath = path.join(tareaDir, outputName);

    try {
        fs.writeFileSync(outputPath, outputBuf);
    } catch (e) {
        if (e.code === 'EBUSY') {
            const altPath = outputPath.replace('.docx', '_NEW.docx');
            fs.writeFileSync(altPath, outputBuf);
            console.log('AVISO: Archivo abierto en Word. Guardado como:', altPath);
            console.log('Cierra Word, borra el viejo y renombra este.');
        } else {
            throw e;
        }
    }

    // 13. Verificar
    const verifyZip = await JSZip.loadAsync(outputBuf);
    const verifyDoc = await verifyZip.file('word/document.xml').async('string');

    console.log('');
    console.log('=== Documento generado ===');
    console.log('Archivo:', outputPath);
    console.log('Tamaño:', (outputBuf.length / 1024).toFixed(1) + ' KB');
    console.log('');
    console.log('=== Verificación ===');
    console.log('Portada con título:', verifyDoc.includes(tituloTarea) ? 'OK' : 'FALTA');
    console.log('Fecha actualizada:', verifyDoc.includes(fecha) ? 'OK' : 'FALTA');
    console.log('Ecuaciones OMML:', verifyDoc.includes('m:oMath') ? 'OK' : 'FALTA');
    console.log('Estilos:', verifyZip.file('word/styles.xml') ? 'OK' : 'FALTA');
    console.log('Header:', verifyZip.file('word/header1.xml') ? 'OK' : 'FALTA');
    console.log('Section props:', verifyDoc.includes('w:sectPr') ? 'OK' : 'FALTA');

    const h2Count = (verifyDoc.match(/<w:pStyle w:val="Heading2"/g) || []).length;
    const pbCount = (verifyDoc.match(/pageBreakBefore/g) || []).length;
    console.log('Heading2 (ejercicios):', h2Count);
    console.log('Saltos de página:', pbCount);

    // 14. Limpiar temp
    fs.unlinkSync(pandocPath);
    console.log('\nLimpieza: temp_pandoc.docx eliminado');
}

// --- CLI ---
const args = process.argv.slice(2);
if (args.length < 3) {
    console.log('Uso: node generar_tarea.js <carpeta_tarea> "<titulo>" "<fecha>"');
    console.log('');
    console.log('Ejemplo:');
    console.log('  1. pandoc espaciosvectoriales.md -o temp_pandoc.docx --from markdown --to docx');
    console.log('  2. node _plantillas/generar_tarea.js tarea3_espacios_vectoriales "Espacios Vectoriales" "22 de febrero de 2026"');
    process.exit(1);
}

generarTarea(args[0], args[1], args[2]).catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
