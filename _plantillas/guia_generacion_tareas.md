# Guía para generar tareas de Álgebra Lineal — UNIMINUTO

## Datos del estudiante

- **Nombre:** Laura Vanessa Bornacelli Parra
- **Programa:** Ingeniería de Software
- **Materia:** Álgebra Lineal
- **Profesor:** Ricardo Antonio Botero Rios

---

## Cómo generar una nueva tarea (paso a paso)

### Paso 1 — Crear la carpeta

Crear la carpeta con el formato: `tarea<N>_<tema>/`
Ejemplo: `tarea4_transformaciones/`

### Paso 2 — Escribir el contenido en Markdown

Crear el archivo `<tema>.md` dentro de la carpeta.

**REGLA MÁS IMPORTANTE:** Solo usar `##` para los títulos de ejercicios. Todo lo demás va en **negrita**.

Ejemplo correcto:

```markdown
**Introducción**

Texto de la introducción aquí...

**Desarrollo de la actividad**

**Mapa conceptual**

Texto del mapa...

**Ejercicios resueltos**

Texto introductorio...

## Ejercicio 2a — Nombre del ejercicio

Contenido del ejercicio con ecuaciones $x + y = 0$ en línea.

Ecuaciones en bloque:

$$\frac{a}{b} = c$$

**Resultado:** La respuesta es...

## Ejercicio 2b — Otro ejercicio

...

## Verificación en GeoGebra

...

**Enlace del video explicativo**

...

**Conclusiones**

...

**Referencias**

...
```

**Lo que NUNCA se debe hacer:**

- NUNCA usar `#` (un solo numeral) para nada
- NUNCA usar `###` para subsecciones, usar `**negrita**` en su lugar
- NUNCA poner `\newpage` (no funciona en Pandoc para DOCX)

### Paso 3 — Generar el documento final

Solo 2 comandos:

```bash
cd "C:/xampp/htdocs/VECTORES/tarea<N>_<tema>"

pandoc <tema>.md -o temp_pandoc.docx --from markdown --to docx

node "../_plantillas/generar_tarea.js" "tarea<N>_<tema>" "<Título de la Tarea>" "<fecha>"
```

Ejemplo real:

```bash
cd "C:/xampp/htdocs/VECTORES/tarea3_espacios_vectoriales"

pandoc espaciosvectoriales.md -o temp_pandoc.docx --from markdown --to docx

node "../_plantillas/generar_tarea.js" "tarea3_espacios_vectoriales" "Espacios Vectoriales" "22 de febrero de 2026"
```

El script automáticamente:
- Toma la portada del template base y actualiza título + fecha
- Inyecta saltos de página antes de cada ejercicio (`##`)
- Mantiene los estilos APA, header y márgenes
- Convierte ecuaciones LaTeX a formato nativo de Word
- Borra el archivo temporal `temp_pandoc.docx`

### Paso 4 — Generar los archivos de referencia (.docx)

```bash
pandoc ejercicios_resueltos.md -o ejercicios_resueltos.docx --from markdown --to docx
pandoc mapa_conceptual_contenido.md -o mapa_conceptual_contenido.docx --from markdown --to docx
pandoc guia_estudio_y_geogebra.md -o guia_estudio_y_geogebra.docx --from markdown --to docx
```

---

## Estructura de archivos

### Carpeta raíz (`VECTORES/`)

```
VECTORES/
├── _plantillas/
│   ├── Diagrama de Flujo.docx          ← Template original de Word
│   ├── generar_tarea.js                ← Script reutilizable para generar tareas
│   ├── guia_generacion_tareas.md       ← Esta guía
│   └── guia_generacion_tareas.docx     ← Esta guía en Word
├── tarea1_vectores/
├── tarea2_matrices/
├── tarea3_espacios_vectoriales/
├── index.html, script.js, styles.css   ← Visualizador 3D (GitHub Pages)
└── package.json, node_modules/         ← Dependencias (JSZip)
```

### Cada carpeta de tarea

```
tarea<N>_<tema>/
├── Actividad_S<N>_*.pdf              ← PDF con las instrucciones del profesor
├── bornacelli_laura_<tema>.docx      ← DOCUMENTO FINAL (lo que se entrega)
├── <tema>.md                         ← Fuente markdown del documento final
├── ejercicios_resueltos.md           ← Soluciones detalladas paso a paso
├── ejercicios_resueltos.docx         ← Lo mismo en Word (para leer fácil)
├── mapa_conceptual_contenido.md      ← Contenido textual del mapa conceptual
├── mapa_conceptual_contenido.docx    ← Lo mismo en Word
├── guia_estudio_y_geogebra.md        ← Guía de estudio + comandos GeoGebra
└── guia_estudio_y_geogebra.docx      ← Lo mismo en Word
```

---

## Estructura del documento final

El documento final tiene esta estructura:

1. **Portada** — Página 1 (se hereda del template, solo se cambia título y fecha)
2. **Introducción** — Texto en negrita, NO es heading
3. **Desarrollo de la actividad** — Negrita
4. **Mapa conceptual** — Negrita
5. **Ejercicios resueltos** — Negrita
6. **Ejercicio 2a** — Heading2 con salto de página
7. **Ejercicio 2b** — Heading2 con salto de página
8. **Ejercicio 2c** — Heading2 con salto de página
9. **(más ejercicios si los hay)**
10. **Verificación en GeoGebra** — Heading2 con salto de página
11. **Enlace del video explicativo** — Negrita
12. **Conclusiones** — Negrita
13. **Referencias** — Negrita, formato APA 7ma edición

---

## Errores comunes y cómo evitarlos

**El DOCX sale sin formato / se ve feo:**
- Causa: Se generó el DOCX directamente sin usar el template base
- Solución: Siempre usar el script `generar_tarea.js` que fusiona con la base

**No hay separación entre ejercicios (todo pegado):**
- Causa: Se usó `#` (H1) en vez de `##` (H2) para los ejercicios
- Solución: Solo `##` para ejercicios, todo lo demás en **negrita**

**Las ecuaciones salen como texto plano:**
- Causa: No se usó Pandoc para convertir
- Solución: Siempre convertir con `pandoc ... --to docx`, esto genera ecuaciones OMML nativas

**Error "EBUSY" al generar:**
- Causa: El archivo .docx está abierto en Word
- Solución: Cerrar Word antes de ejecutar el script

**La portada no se actualiza:**
- Causa: El texto que busca el script no coincide exactamente con el XML
- Solución: El script busca "Álgebra de Matrices" y lo reemplaza. Si la base cambia, hay que actualizar el script

---

## Checklist antes de entregar

- [ ] El documento final abre sin errores en Word
- [ ] La portada tiene título, nombre y fecha correctos
- [ ] Cada ejercicio empieza en página nueva
- [ ] Las ecuaciones se ven como fórmulas (no como texto)
- [ ] Hay header en todas las páginas (excepto portada)
- [ ] Introducción, Conclusiones y Referencias están presentes
- [ ] El mapa conceptual visual está creado (Canva, CmapTools, etc.)
- [ ] El video explicativo está grabado (máx 5 min)
- [ ] El enlace del video está en el documento
- [ ] Archivos temporales borrados
- [ ] Cada .md tiene su .docx correspondiente
- [ ] Nombre del archivo: `bornacelli_laura_<tema>.docx`
