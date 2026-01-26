let scene, camera, renderer, currentExercise = 'c';
const objects = [];
let mouseDown = false, mouseX = 0, mouseY = 0;
let targetRotationX = 0.5, targetRotationY = 0.4;
let rotationX = 0.5, rotationY = 0.4;

/* ========== Inicializacion ========== */

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    const container = document.getElementById('canvas-container');
    camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(15, 12, 15);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    addAxes();

    const canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', onMouseUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onWindowResize);

    showExercise('c');
    animate();
}

/* ========== Utilidades de escena ========== */

function clearObjects() {
    objects.forEach(obj => scene.remove(obj));
    objects.length = 0;
}

function addAxes() {
    scene.add(new THREE.AxesHelper(12));
    scene.add(new THREE.GridHelper(24, 24, 0xcccccc, 0xeeeeee));

    addAxisLabel('X', 13, 0, 0, 0xff0000);
    addAxisLabel('Y', 0, 13, 0, 0x00ff00);
    addAxisLabel('Z', 0, 0, 13, 0x0000ff);
}

function addAxisLabel(text, x, y, z, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 128;
    canvas.height = 128;

    ctx.fillStyle = '#' + color.toString(16).padStart(6, '0');
    ctx.font = 'Bold 64px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, 64, 80);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
    sprite.scale.set(1.5, 1.5, 1);
    sprite.position.set(x, y, z);
    scene.add(sprite);
}

function createVector(x, y, z, color, originX = 0, originY = 0, originZ = 0, label = '', scale = 1) {
    const origin = new THREE.Vector3(originX, originY, originZ);
    const direction = new THREE.Vector3(x, y, z);
    const length = direction.length() * scale;

    if (length === 0) return null;

    const arrow = new THREE.ArrowHelper(
        direction.normalize(), origin, length, color,
        length * 0.25, length * 0.18
    );
    objects.push(arrow);
    scene.add(arrow);

    if (label) {
        const sprite = createTextSprite(label, color);
        sprite.position.set(
            originX + x * scale * 0.6,
            originY + y * scale * 0.6 + 1,
            originZ + z * scale * 0.6
        );
        objects.push(sprite);
        scene.add(sprite);
    }

    return arrow;
}

function createTextSprite(text, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 128;

    const hex = '#' + color.toString(16).padStart(6, '0');

    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = hex;
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'Bold 56px Arial';
    ctx.fillStyle = hex;
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 85);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
    sprite.scale.set(2.5, 1.25, 1);
    return sprite;
}

function createPlane(v1, v2, color) {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
        0, 0, 0,
        v1.x, v1.y, v1.z,
        v1.x + v2.x, v1.y + v2.y, v1.z + v2.z,
        v2.x, v2.y, v2.z
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1));
    geometry.computeVertexNormals();

    const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        color, side: THREE.DoubleSide, transparent: true, opacity: 0.5
    }));
    objects.push(mesh);
    scene.add(mesh);
    return mesh;
}

/* ========== Ejercicios ========== */

function showExercise(ex) {
    currentExercise = ex;
    clearObjects();

    document.querySelectorAll('.exercise-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + ex).classList.add('active');

    const info = document.getElementById('info');

    if (ex === 'a') exerciseA(info);
    else if (ex === 'b') exerciseB(info);
    else if (ex === 'c') exerciseC(info);
    else if (ex === 'd') exerciseD(info);
}

function exerciseA(info) {
    createVector(-4, 1, 0, 0xff0000, -6, 0, 0, 'v\u2081', 1);
    createVector(-3, 2, 1, 0x0000ff, 6, 0, 0, 'v\u2082', 1);

    info.innerHTML = `
        <h3 class="info-title">Ejercicio A \u2014 Componentes y M\u00f3dulos</h3>

        <p class="info-section">Vector v\u2081 (plano R\u00b2)</p>
        <p class="info-row"><span class="dot" style="background:#ef4444"></span>Origen: (1, 2) \u2192 Extremo: (\u22123, 3)</p>
        <p class="info-row">Componentes: <span class="val">(\u22124, 1)</span></p>
        <p class="info-row">M\u00f3dulo: <span class="val">\u221a17 \u2248 4.1231</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                v\u2081 = Extremo \u2212 Origen<br>
                v\u2081 = (\u22123, 3) \u2212 (1, 2)<br>
                v\u2081 = (\u22123\u22121, 3\u22122)<br>
                v\u2081 = (\u22124, 1)<br><br>
                ||v\u2081|| = \u221a((\u22124)\u00b2 + 1\u00b2)<br>
                ||v\u2081|| = \u221a(16 + 1)<br>
                ||v\u2081|| = \u221a17 \u2248 4.1231
            </div>
        </details>

        <p class="info-section">Vector v\u2082 (espacio R\u00b3)</p>
        <p class="info-row"><span class="dot" style="background:#3b82f6"></span>Origen: (0, \u22121, 2) \u2192 Extremo: (\u22123, 1, 3)</p>
        <p class="info-row">Componentes: <span class="val">(\u22123, 2, 1)</span></p>
        <p class="info-row">M\u00f3dulo: <span class="val">\u221a14 \u2248 3.7417</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                v\u2082 = Extremo \u2212 Origen<br>
                v\u2082 = (\u22123, 1, 3) \u2212 (0, \u22121, 2)<br>
                v\u2082 = (\u22123\u22120, 1\u2212(\u22121), 3\u22122)<br>
                v\u2082 = (\u22123, 2, 1)<br><br>
                ||v\u2082|| = \u221a((\u22123)\u00b2 + 2\u00b2 + 1\u00b2)<br>
                ||v\u2082|| = \u221a(9 + 4 + 1)<br>
                ||v\u2082|| = \u221a14 \u2248 3.7417
            </div>
        </details>

        <p class="info-note">
            Las longitudes de las flechas representan los m\u00f3dulos calculados.
        </p>
    `;
}

function exerciseB(info) {
    createVector(2, 3, 0, 0xff0000, -5, 0, -5, 'A', 1.2);
    createVector(-1, 2 / 3, 0, 0xff6666, -5, 0, -5, 'B', 1.2);
    createVector(5, 3, 1, 0x0000ff, 5, 0, 5, 'C', 0.8);
    createVector(2, -14 / 3, 4, 0x6666ff, 5, 0, 5, 'D', 0.8);

    info.innerHTML = `
        <h3 class="info-title">Ejercicio B \u2014 Vectores Perpendiculares</h3>

        <p class="info-section">Par 1</p>
        <p class="info-row"><span class="dot" style="background:#ef4444"></span>A = (2, 3)</p>
        <p class="info-row"><span class="dot" style="background:#f87171"></span>B = (\u22121, x) donde x = <span class="val">2/3</span></p>
        <p class="info-row">A \u00b7 B = 0 \u2192 \u00e1ngulo 90\u00b0<span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                Condici\u00f3n: A \u22a5 B \u21d4 A \u00b7 B = 0<br><br>
                A \u00b7 B = (2)(\u22121) + (3)(x)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22122 + 3x<br><br>
                Igualamos a cero:<br>
                \u22122 + 3x = 0<br>
                3x = 2<br>
                x = 2/3<br><br>
                Verificaci\u00f3n:<br>
                A \u00b7 B = (2)(\u22121) + (3)(2/3)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22122 + 2 = 0 \u2713
            </div>
        </details>

        <p class="info-section">Par 2</p>
        <p class="info-row"><span class="dot" style="background:#3b82f6"></span>C = (5, 3, 1)</p>
        <p class="info-row"><span class="dot" style="background:#93c5fd"></span>D = (2, x, 4) donde x = <span class="val">\u221214/3</span></p>
        <p class="info-row">C \u00b7 D = 0 \u2192 \u00e1ngulo 90\u00b0<span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                Condici\u00f3n: C \u22a5 D \u21d4 C \u00b7 D = 0<br><br>
                C \u00b7 D = (5)(2) + (3)(x) + (1)(4)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 10 + 3x + 4<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 14 + 3x<br><br>
                Igualamos a cero:<br>
                14 + 3x = 0<br>
                3x = \u221214<br>
                x = \u221214/3<br><br>
                Verificaci\u00f3n:<br>
                C \u00b7 D = (5)(2) + (3)(\u221214/3) + (1)(4)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 10 \u2212 14 + 4 = 0 \u2713
            </div>
        </details>

        <p class="info-note">
            Cada par de vectores forma un \u00e1ngulo recto perfecto (90\u00b0).
        </p>
    `;
}

function exerciseC(info) {
    const u = new THREE.Vector3(-1, 2, 3);
    const v = new THREE.Vector3(3, 1, -2);

    createVector(-1, 2, 3, 0xff0000, 0, 0, 0, 'u', 1);
    createVector(3, 1, -2, 0x0000ff, 0, 0, 0, 'v', 1);

    const crossUV = new THREE.Vector3().crossVectors(u, v);
    createVector(crossUV.x, crossUV.y, crossUV.z, 0x00ff00, 0, 0, 0, 'u\u00d7v', 0.5);

    const crossVU = new THREE.Vector3().crossVectors(v, u);
    createVector(crossVU.x, crossVU.y, crossVU.z, 0xff9800, 0, 0, 0, 'v\u00d7u', 0.5);

    const dotUV = u.dot(v);
    const dotVU = v.dot(u);
    const angle = u.angleTo(v) * (180 / Math.PI);
    const distance = new THREE.Vector3().subVectors(u, v).length();

    info.innerHTML = `
        <h3 class="info-title">Ejercicio C \u2014 Operaciones entre Vectores</h3>

        <p class="info-section">Normas</p>
        <p class="info-row"><span class="dot" style="background:#ef4444"></span><strong>u</strong> = (\u22121, 2, 3) \u2192 ||u|| = <span class="val">\u221a14 \u2248 ${u.length().toFixed(4)}</span></p>
        <p class="info-row"><span class="dot" style="background:#3b82f6"></span><strong>v</strong> = (3, 1, \u22122) \u2192 ||v|| = <span class="val">\u221a14 \u2248 ${v.length().toFixed(4)}</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                ||u|| = \u221a((\u22121)\u00b2 + 2\u00b2 + 3\u00b2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a(1 + 4 + 9)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a14 \u2248 3.7417<br><br>
                ||v|| = \u221a(3\u00b2 + 1\u00b2 + (\u22122)\u00b2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a(9 + 1 + 4)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a14 \u2248 3.7417
            </div>
        </details>

        <p class="info-section">Producto punto</p>
        <p class="info-row">u \u00b7 v = <span class="val">${dotUV}</span><span class="ok">\u2713</span></p>
        <p class="info-row">v \u00b7 u = <span class="val">${dotVU}</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                u \u00b7 v = (\u22121)(3) + (2)(1) + (3)(\u22122)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22123 + 2 + (\u22126)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22127<br><br>
                v \u00b7 u = (3)(\u22121) + (1)(2) + (\u22122)(3)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22123 + 2 + (\u22126)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22127<br><br>
                Nota: u \u00b7 v = v \u00b7 u (propiedad conmutativa)
            </div>
        </details>

        <p class="info-section">Producto vectorial</p>
        <p class="info-row"><span class="dot" style="background:#22c55e"></span>u \u00d7 v = <span class="val">(${crossUV.x}, ${crossUV.y}, ${crossUV.z})</span><span class="ok">\u2713</span></p>
        <p class="info-row"><span class="dot" style="background:#f59e0b"></span>v \u00d7 u = <span class="val">(${crossVU.x}, ${crossVU.y}, ${crossVU.z})</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| i &nbsp;&nbsp;j &nbsp;&nbsp;k &nbsp;|<br>
                u \u00d7 v = | \u22121 &nbsp;2 &nbsp;&nbsp;3 &nbsp;|<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;3 &nbsp;1 &nbsp;\u22122 |<br><br>
                i: (2)(\u22122) \u2212 (3)(1) = \u22124 \u2212 3 = \u22127<br>
                j: \u2212[(\u22121)(\u22122) \u2212 (3)(3)] = \u2212[2 \u2212 9] = 7<br>
                k: (\u22121)(1) \u2212 (2)(3) = \u22121 \u2212 6 = \u22127<br><br>
                u \u00d7 v = (\u22127, 7, \u22127)<br><br>
                v \u00d7 u = \u2212(u \u00d7 v) = (7, \u22127, 7)<br>
                (propiedad anticonmutativa)
            </div>
        </details>

        <p class="info-section">Distancia</p>
        <p class="info-row">||u \u2212 v|| = <span class="val">\u221a42 \u2248 ${distance.toFixed(4)}</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                u \u2212 v = (\u22121\u22123, 2\u22121, 3\u2212(\u22122))<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= (\u22124, 1, 5)<br><br>
                ||u \u2212 v|| = \u221a((\u22124)\u00b2 + 1\u00b2 + 5\u00b2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a(16 + 1 + 25)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a42 \u2248 6.4807
            </div>
        </details>

        <p class="info-section">\u00c1ngulo</p>
        <p class="info-row">\u03b8 = <span class="val">${angle.toFixed(2)}\u00b0</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                cos \u03b8 = (u \u00b7 v) / (||u|| \u00b7 ||v||)<br><br>
                cos \u03b8 = \u22127 / (\u221a14 \u00b7 \u221a14)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22127 / 14<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u22121/2<br><br>
                \u03b8 = arccos(\u22121/2)<br>
                \u03b8 = 120\u00b0
            </div>
        </details>

        <p class="info-note">
            u \u00d7 v (verde) y v \u00d7 u (naranja) son vectores opuestos, ambos perpendiculares al plano formado por u y v.
        </p>
    `;
}

function exerciseD(info) {
    const a = new THREE.Vector3(3, 2, 1);
    const b = new THREE.Vector3(-1, 5, 7);

    createVector(3, 2, 1, 0xff0000, 0, 0, 0, 'a', 1);
    createVector(-1, 5, 7, 0x0000ff, 0, 0, 0, 'b', 1);
    createPlane(a, b, 0xffaa00);

    const cross = new THREE.Vector3().crossVectors(a, b);
    const area = cross.length();
    createVector(cross.x, cross.y, cross.z, 0x00ff00, 0, 0, 0, 'a\u00d7b', 0.4);

    info.innerHTML = `
        <h3 class="info-title">Ejercicio D \u2014 \u00c1rea del Paralelogramo</h3>

        <p class="info-section">Vectores</p>
        <p class="info-row"><span class="dot" style="background:#ef4444"></span><strong>a</strong> = (3, 2, 1)</p>
        <p class="info-row"><span class="dot" style="background:#3b82f6"></span><strong>b</strong> = (\u22121, 5, 7)</p>

        <p class="info-section">Producto vectorial</p>
        <p class="info-row"><span class="dot" style="background:#22c55e"></span>a \u00d7 b = <span class="val">(${cross.x}, ${cross.y}, ${cross.z})</span><span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| i &nbsp;&nbsp;j &nbsp;&nbsp;k |<br>
                a \u00d7 b = | &nbsp;3 &nbsp;2 &nbsp;&nbsp;1 |<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| \u22121 &nbsp;5 &nbsp;&nbsp;7 |<br><br>
                i: (2)(7) \u2212 (1)(5) = 14 \u2212 5 = 9<br>
                j: \u2212[(3)(7) \u2212 (1)(\u22121)] = \u2212[21 + 1] = \u221222<br>
                k: (3)(5) \u2212 (2)(\u22121) = 15 + 2 = 17<br><br>
                a \u00d7 b = (9, \u221222, 17)
            </div>
        </details>

        <p class="info-section">\u00c1rea</p>
        <p class="info-row">\u00c1rea = <span class="val">\u221a854 \u2248 ${area.toFixed(4)}</span> u\u00b2<span class="ok">\u2713</span></p>
        <details class="proof">
            <summary>Ver procedimiento</summary>
            <div class="steps">
                \u00c1rea = ||a \u00d7 b||<br><br>
                ||a \u00d7 b|| = \u221a(9\u00b2 + (\u221222)\u00b2 + 17\u00b2)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a(81 + 484 + 289)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= \u221a854<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u2248 29.2233 u\u00b2
            </div>
        </details>

        <p class="info-note">
            El \u00e1rea del paralelogramo es la magnitud del producto vectorial.
            La superficie naranja representa el paralelogramo y el vector verde (a \u00d7 b) es perpendicular a \u00e9l.
        </p>
    `;
}

/* ========== Animacion y controles ========== */

function animate() {
    requestAnimationFrame(animate);

    rotationX += (targetRotationX - rotationX) * 0.05;
    rotationY += (targetRotationY - rotationY) * 0.05;

    const radius = camera.position.length();
    camera.position.x = radius * Math.sin(rotationX) * Math.cos(rotationY);
    camera.position.y = radius * Math.sin(rotationY);
    camera.position.z = radius * Math.cos(rotationX) * Math.cos(rotationY);
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
}

function onMouseDown(e) {
    mouseDown = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function onMouseMove(e) {
    if (!mouseDown) return;

    targetRotationX += (e.clientX - mouseX) * 0.01;
    targetRotationY += (e.clientY - mouseY) * 0.01;
    targetRotationY = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, targetRotationY));

    mouseX = e.clientX;
    mouseY = e.clientY;
}

function onMouseUp() {
    mouseDown = false;
}

function onWheel(e) {
    e.preventDefault();
    const radius = camera.position.length();
    const newRadius = Math.max(8, Math.min(35, radius + e.deltaY * 0.01));
    camera.position.multiplyScalar(newRadius / radius);
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

/* ========== Inicio ========== */

init();
