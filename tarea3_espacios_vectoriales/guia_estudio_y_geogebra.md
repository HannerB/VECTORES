---
title: "Guía de Estudio: Cómo resolver los ejercicios de Espacios Vectoriales y verificarlos en GeoGebra"
---

\newpage

# Guía de Estudio — Espacios Vectoriales

Esta guía explica paso a paso **cómo se resolvió cada ejercicio**, el razonamiento detrás de cada demostración y cómo verificar los resultados en GeoGebra.

\newpage

# Conceptos clave antes de empezar

## ¿Qué es un espacio vectorial?

Un espacio vectorial es un conjunto V con dos operaciones (suma y multiplicación por escalar) que cumplen 10 axiomas. Los más importantes para los ejercicios son:

- Contiene al **vector cero**
- Es **cerrado bajo la suma**: si u, v ∈ V → u + v ∈ V
- Es **cerrado bajo multiplicación escalar**: si c ∈ ℝ, v ∈ V → c·v ∈ V

## ¿Cómo probar que algo es un subespacio?

Si S es un subconjunto de un espacio vectorial V conocido (como ℝ³), para demostrar que S es subespacio basta verificar **3 condiciones**:

1. $\vec{0} \in S$ (contiene al vector cero)
2. Si $\vec{u}, \vec{v} \in S$, entonces $\vec{u} + \vec{v} \in S$ (cerrado bajo suma)
3. Si $c \in \mathbb{R}$ y $\vec{v} \in S$, entonces $c\vec{v} \in S$ (cerrado bajo escalar)

Si **alguna** de las tres falla, S **no** es subespacio.

## ¿Qué es independencia lineal?

Un conjunto de vectores $\{v_1, v_2, \ldots, v_n\}$ es **linealmente independiente** si la única solución de:

$$c_1 v_1 + c_2 v_2 + \cdots + c_n v_n = \vec{0}$$

es la solución trivial $c_1 = c_2 = \cdots = c_n = 0$.

Si existen escalares no todos cero que satisfagan la ecuación, los vectores son **linealmente dependientes**.

## ¿Cómo verificar independencia lineal con matrices?

Para matrices en $M_{2 \times 2}$:

1. Plantear $c_1 A_1 + c_2 A_2 + \cdots + c_n A_n = 0_{2 \times 2}$
2. Igualar entrada por entrada → sistema de 4 ecuaciones con n incógnitas
3. Resolver el sistema por reducción de Gauss
4. Si la única solución es la trivial → **linealmente independientes**
5. Si hay soluciones no triviales → **linealmente dependientes**

\newpage

# Ejercicio 2a — Verdadero o Falso

## Afirmación 1: El conjunto S = {(x, y) ∈ ℝ² | y = −3x + 1} es un espacio vectorial

### ¿Qué nos están preguntando?

Nos preguntan si el conjunto de todos los puntos $(x, y)$ que cumplen la ecuación $y = -3x + 1$ forma un espacio vectorial.

### ¿Cómo lo abordamos?

Lo más rápido es verificar si contiene al vector cero. Si no lo contiene, no puede ser espacio vectorial.

### Razonamiento paso a paso

**Paso 1:** ¿Está $(0, 0)$ en S?

Si $x = 0$: $y = -3(0) + 1 = 1 \neq 0$

Entonces $(0, 0) \notin S$. **Falla la condición del vector cero.**

**Paso 2:** Confirmamos con un contraejemplo de cerradura:

Tomemos $\vec{u} = (0, 1)$ (cumple $1 = -3(0) + 1$ ✓) y $\vec{v} = (1, -2)$ (cumple $-2 = -3(1) + 1$ ✓).

$\vec{u} + \vec{v} = (1, -1)$

¿Cumple? $-3(1) + 1 = -2 \neq -1$ ✗

No es cerrado bajo la suma.

### Respuesta: **FALSO**

La recta $y = -3x + 1$ no pasa por el origen (intercepto $b = 1$), por lo que no puede ser subespacio de $\mathbb{R}^2$.

---

## Afirmación 2: El conjunto de matrices invertibles de 5×5 forma un espacio vectorial

### ¿Cómo lo abordamos?

Verificamos si cumple las condiciones de espacio vectorial con la suma ordinaria de matrices.

### Razonamiento paso a paso

**Paso 1:** ¿Contiene a la matriz cero?

La matriz cero $0_{5\times 5}$ tiene $\det(0) = 0$, por lo que **no es invertible**. El conjunto no contiene al elemento neutro de la suma.

**Paso 2:** Contraejemplo de cerradura:

Sea $A = I_5$ (identidad, invertible) y $B = -I_5$ (también invertible, $\det(-I_5) = (-1)^5 = -1 \neq 0$).

$A + B = I_5 + (-I_5) = 0_{5\times 5}$

La matriz cero no es invertible → $A + B$ no pertenece al conjunto.

### Respuesta: **FALSO**

No contiene la matriz cero y no es cerrado bajo la suma.

\newpage

# Ejercicio 2b — Subespacios vectoriales de ℝ³

## Inciso i: S = {(x, y, z) ∈ ℝ³ | x + y + z = 0}

### ¿Qué tipo de conjunto es?

Geométricamente, es un **plano** que pasa por el origen (ecuación $x + y + z = 0$, sin término independiente).

### Demostración paso a paso

**Condición 1** — Vector cero:

$(0, 0, 0)$: $0 + 0 + 0 = 0$ ✓

**Condición 2** — Cerradura suma:

Sean $\vec{u} = (x_1, y_1, z_1)$, $\vec{v} = (x_2, y_2, z_2) \in S$.

Es decir: $x_1 + y_1 + z_1 = 0$ y $x_2 + y_2 + z_2 = 0$.

$\vec{u} + \vec{v} = (x_1 + x_2, \; y_1 + y_2, \; z_1 + z_2)$

$(x_1 + x_2) + (y_1 + y_2) + (z_1 + z_2) = \underbrace{(x_1 + y_1 + z_1)}_{=0} + \underbrace{(x_2 + y_2 + z_2)}_{=0} = 0$ ✓

**Condición 3** — Cerradura escalar:

Sea $c \in \mathbb{R}$, $\vec{v} = (x_1, y_1, z_1) \in S$.

$c\vec{v} = (cx_1, cy_1, cz_1)$

$cx_1 + cy_1 + cz_1 = c\underbrace{(x_1 + y_1 + z_1)}_{=0} = 0$ ✓

### Resultado: **S SÍ es subespacio de ℝ³**

**Base:** Despejando $z = -x - y$:

$(x, y, -x-y) = x(1, 0, -1) + y(0, 1, -1)$

Base = $\{(1, 0, -1), \; (0, 1, -1)\}$, dimensión = 2.

---

## Inciso ii: S = {(x, y, z) ∈ ℝ³ | x = y = z}

### ¿Qué tipo de conjunto es?

Es una **recta** que pasa por el origen en la dirección $(1, 1, 1)$.

### Demostración paso a paso

**Condición 1** — Vector cero:

$(0, 0, 0)$: $0 = 0 = 0$ ✓

**Condición 2** — Cerradura suma:

Sean $\vec{u} = (a, a, a)$, $\vec{v} = (b, b, b) \in S$.

$\vec{u} + \vec{v} = (a+b, a+b, a+b)$

Las tres componentes son iguales ✓ → $\vec{u} + \vec{v} \in S$.

**Condición 3** — Cerradura escalar:

$c \cdot (a, a, a) = (ca, ca, ca)$

Las tres componentes son iguales ✓ → $c\vec{v} \in S$.

### Resultado: **S SÍ es subespacio de ℝ³**

**Base:** $(t, t, t) = t(1, 1, 1)$

Base = $\{(1, 1, 1)\}$, dimensión = 1.

---

## Inciso iii: S = {(x, y, z) ∈ ℝ³ | y = 2x, z = 3x}

### ¿Qué tipo de conjunto es?

Es una **recta** que pasa por el origen en la dirección $(1, 2, 3)$.

### Demostración paso a paso

**Condición 1** — Vector cero:

$(0, 0, 0)$: $0 = 2(0) = 0$ ✓ y $0 = 3(0) = 0$ ✓

**Condición 2** — Cerradura suma:

Sean $\vec{u} = (x_1, 2x_1, 3x_1)$, $\vec{v} = (x_2, 2x_2, 3x_2) \in S$.

$\vec{u} + \vec{v} = (x_1 + x_2, \; 2x_1 + 2x_2, \; 3x_1 + 3x_2) = (x_1 + x_2, \; 2(x_1 + x_2), \; 3(x_1 + x_2))$

Si llamamos $x_3 = x_1 + x_2$, entonces $\vec{u} + \vec{v} = (x_3, 2x_3, 3x_3) \in S$ ✓

**Condición 3** — Cerradura escalar:

$c \cdot (x_1, 2x_1, 3x_1) = (cx_1, 2(cx_1), 3(cx_1)) \in S$ ✓

### Resultado: **S SÍ es subespacio de ℝ³**

**Base:** $(x, 2x, 3x) = x(1, 2, 3)$

Base = $\{(1, 2, 3)\}$, dimensión = 1.

\newpage

# Ejercicio 2c — Independencia lineal de matrices en M₂₂

## Conjunto i: {A₁, A₂, A₃, A₄}

$$A_1 = \begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix}, \quad A_2 = \begin{bmatrix} 3 & 0 \\ 1 & 1 \end{bmatrix}, \quad A_3 = \begin{bmatrix} 0 & 2 \\ -3 & 1 \end{bmatrix}, \quad A_4 = \begin{bmatrix} -1 & 0 \\ -1 & 7 \end{bmatrix}$$

### ¿Cómo lo resolvemos?

Planteamos $c_1 A_1 + c_2 A_2 + c_3 A_3 + c_4 A_4 = 0_{2\times 2}$ e igualamos entrada por entrada.

### Sistema de ecuaciones

Cada posición (i,j) de la matriz da una ecuación:

| Posición | Ecuación |
|----------|----------|
| (1,1) | $-c_1 + 3c_2 - c_4 = 0$ |
| (1,2) | $c_1 + 2c_3 = 0$ |
| (2,1) | $-2c_1 + c_2 - 3c_3 - c_4 = 0$ |
| (2,2) | $2c_1 + c_2 + c_3 + 7c_4 = 0$ |

### Resolución por Gauss

Matriz aumentada:

$$\begin{bmatrix} -1 & 3 & 0 & -1 \\ 1 & 0 & 2 & 0 \\ -2 & 1 & -3 & -1 \\ 2 & 1 & 1 & 7 \end{bmatrix}$$

Después de la reducción por filas (ver ejercicios resueltos para el detalle):

$$\begin{bmatrix} 1 & -3 & 0 & 1 \\ 0 & 3 & 2 & -1 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

**Rango = 3 < 4 incógnitas** → hay variable libre → soluciones no triviales.

### Resultado: **LINEALMENTE DEPENDIENTES**

Con $c_4 = t$: $(c_1, c_2, c_3, c_4) = t(-4, -1, 2, 1)$

**Relación de dependencia:** $A_4 = 4A_1 + A_2 - 2A_3$

**Verificación:**

$$4\begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix} + \begin{bmatrix} 3 & 0 \\ 1 & 1 \end{bmatrix} - 2\begin{bmatrix} 0 & 2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -4+3+0 & 4+0-4 \\ -8+1+6 & 8+1-2 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ -1 & 7 \end{bmatrix} = A_4 \quad \checkmark$$

---

## Conjunto ii: {A₁, A₂, A₃, A₄}

$$A_1 = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}, \quad A_2 = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}, \quad A_3 = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}, \quad A_4 = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$$

### Sistema de ecuaciones

| Posición | Ecuación |
|----------|----------|
| (1,1) | $c_1 + c_2 + c_4 = 0$ |
| (1,2) | $c_1 + c_3 + c_4 = 0$ |
| (2,1) | $c_2 + c_3 + c_4 = 0$ |
| (2,2) | $c_1 + c_2 + c_3 = 0$ |

### Resolución por Gauss

Después de la reducción:

$$\begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & -3/2 \end{bmatrix}$$

**Rango = 4 = número de incógnitas** → única solución: la trivial.

$c_4 = 0, \; c_3 = 0, \; c_2 = 0, \; c_1 = 0$

### Resultado: **LINEALMENTE INDEPENDIENTES**

Como $\dim(M_{2\times 2}) = 4$ y tenemos exactamente 4 matrices LI, este conjunto forma una **base de $M_{2\times 2}$**.

\newpage

# Cómo verificar en GeoGebra — Guía paso a paso

## Paso 1: Abrir GeoGebra

Entra a **GeoGebra Clásico** desde el navegador. Busca "GeoGebra Classic" en Google o ve a la página de GeoGebra.

Una vez abierto, haz clic en **Vista → CAS** (Cálculo Algebraico Simbólico) o en **Vista → Hoja de Cálculo** según lo que necesites.

---

## Verificación del Ejercicio 2a — Verdadero/Falso

### Afirmación 1: y = −3x + 1

En la **vista Gráfica**, escribe en la barra de entrada:

```
y = -3x + 1
```

Observarás que la recta **no pasa por el origen** (cruza el eje y en (0, 1)).

Para verificar que no es cerrado bajo la suma, grafica los puntos:

```
u = (0, 1)
v = (1, -2)
w = u + v
```

El punto w = (1, −1) no está sobre la recta y = −3x + 1.

**Toma captura de pantalla mostrando la recta y los puntos.**

### Afirmación 2: Matrices invertibles 5×5

En la **vista CAS**, escribe:

```
A := {{1,0,0,0,0},{0,1,0,0,0},{0,0,1,0,0},{0,0,0,1,0},{0,0,0,0,1}}
```

```
B := {{-1,0,0,0,0},{0,-1,0,0,0},{0,0,-1,0,0},{0,0,0,-1,0},{0,0,0,0,-1}}
```

```
Determinant(A)
```

Debe dar: 1 (es invertible) ✓

```
Determinant(B)
```

Debe dar: −1 (es invertible) ✓

```
C := A + B
```

```
Determinant(C)
```

Debe dar: 0 (NO es invertible) → la suma de dos invertibles puede no ser invertible ✓

**Toma captura de pantalla mostrando los determinantes.**

---

## Verificación del Ejercicio 2b — Subespacios de ℝ³

### Inciso i: S = {(x, y, z) | x + y + z = 0}

En la **vista 3D**, escribe en la barra de entrada:

```
x + y + z = 0
```

Esto graficará el plano. Verás que **pasa por el origen**.

Para verificar vectores concretos:

```
u1 = (1, 0, -1)
v1 = (0, 1, -1)
w1 = u1 + v1
```

Verifica que w1 = (1, 1, −2) cumple: 1 + 1 + (−2) = 0 ✓

```
s1 = 3 * u1
```

Verifica que s1 = (3, 0, −3) cumple: 3 + 0 + (−3) = 0 ✓

**Toma captura de pantalla mostrando el plano y los vectores.**

### Inciso ii: S = {(x, y, z) | x = y = z}

En la **vista 3D**, puedes graficar la recta paramétrica:

```
Curve(t, t, t, t, -5, 5)
```

O definir dos planos cuya intersección es la recta:

```
x = y
y = z
```

También grafica los vectores:

```
u2 = (1, 1, 1)
v2 = (2, 2, 2)
w2 = u2 + v2
```

w2 = (3, 3, 3) → cumple x = y = z ✓

**Toma captura de pantalla.**

### Inciso iii: S = {(x, y, z) | y = 2x, z = 3x}

En la **vista 3D**, grafica la recta:

```
Curve(t, 2t, 3t, t, -5, 5)
```

Grafica vectores de ejemplo:

```
u3 = (1, 2, 3)
v3 = (2, 4, 6)
w3 = u3 + v3
```

w3 = (3, 6, 9) → cumple y = 2(3) = 6 ✓ y z = 3(3) = 9 ✓

**Toma captura de pantalla mostrando la recta y los vectores.**

---

## Verificación del Ejercicio 2c — Independencia lineal

### Conjunto i (linealmente dependiente):

En la **vista CAS**, define las matrices y verifica la relación de dependencia:

```
A1 := {{-1, 1}, {-2, 2}}
```

```
A2 := {{3, 0}, {1, 1}}
```

```
A3 := {{0, 2}, {-3, 1}}
```

```
A4 := {{-1, 0}, {-1, 7}}
```

Verifica que A₄ = 4A₁ + A₂ − 2A₃:

```
4 * A1 + A2 - 2 * A3
```

Debe dar: $\begin{pmatrix} -1 & 0 \\ -1 & 7 \end{pmatrix}$ que es igual a A₄ ✓

Para verificar también que la combinación lineal da cero:

```
-4 * A1 - A2 + 2 * A3 + A4
```

Debe dar: $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ ✓

**Toma captura de pantalla.**

### Conjunto ii (linealmente independiente):

En la **vista CAS**:

```
B1 := {{1, 1}, {0, 1}}
```

```
B2 := {{1, 0}, {1, 1}}
```

```
B3 := {{0, 1}, {1, 1}}
```

```
B4 := {{1, 1}, {1, 0}}
```

Para verificar la independencia lineal, podemos usar el determinante de la matriz de coeficientes del sistema:

```
M := {{1, 1, 0, 1}, {1, 0, 1, 1}, {0, 1, 1, 1}, {1, 1, 1, 0}}
```

```
Determinant(M)
```

Si el determinante es **distinto de cero**, las matrices son **linealmente independientes**.

Debe dar: un valor ≠ 0. Calculemos:

El determinante de esta matriz es **−3** (se puede verificar en GeoGebra). Como $-3 \neq 0$, las matrices son LI ✓

**Toma captura de pantalla.**

---

## Verificación alternativa: Independencia lineal con vectorización

Una forma alternativa es "vectorizar" cada matriz 2×2 como un vector en ℝ⁴ (leyendo las entradas fila por fila) y verificar el determinante:

### Conjunto i:

```
V := {{-1, 1, -2, 2}, {3, 0, 1, 1}, {0, 2, -3, 1}, {-1, 0, -1, 7}}
```

```
Determinant(V)
```

Si da 0 → linealmente dependientes ✓

### Conjunto ii:

```
W := {{1, 1, 0, 1}, {1, 0, 1, 1}, {0, 1, 1, 1}, {1, 1, 1, 0}}
```

```
Determinant(W)
```

Si da ≠ 0 → linealmente independientes ✓

\newpage

# Resumen de comandos en GeoGebra

| Operación | Comando en GeoGebra |
|-----------|---------------------|
| Definir matriz | `A := {{1, 2}, {3, 4}}` |
| Sumar matrices | `A + B` |
| Restar matrices | `A - B` |
| Escalar por número | `3 * A` |
| Determinante | `Determinant(A)` |
| Graficar plano en 3D | `x + y + z = 0` |
| Curva paramétrica 3D | `Curve(t, 2t, 3t, t, -5, 5)` |
| Definir punto | `u = (1, 2, 3)` |
| Sumar vectores | `u + v` |

## Tips importantes

1. **Usa nombres diferentes** para las matrices de cada ejercicio (A1, A2, B1, B2, etc.) para no confundirlas.
2. **Presiona Enter** después de cada línea para que GeoGebra la procese.
3. **Compara visualmente** cada resultado con los calculados a mano.
4. **Toma capturas de pantalla** de cada verificación para incluirlas en el documento final.
5. Para el ejercicio 2a, la **vista Gráfica** sirve para graficar rectas 2D; la **vista 3D** para el ejercicio 2b.
6. Para el ejercicio 2c, usa la **vista CAS** para operaciones con matrices.
7. El comando `Determinant()` es clave para verificar independencia lineal: si el determinante de la matriz formada por los vectores/matrices vectorizados es ≠ 0, son LI.
