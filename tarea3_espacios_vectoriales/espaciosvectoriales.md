---
title: "Reporte solución de problemas matemáticos: Espacios vectoriales"
---

**Introducción**

Los espacios vectoriales constituyen uno de los conceptos fundamentales del álgebra lineal, proporcionando un marco abstracto que unifica y generaliza diversas estructuras matemáticas. Un espacio vectorial es un conjunto dotado de dos operaciones —suma de vectores y multiplicación por escalar— que satisfacen diez axiomas específicos, los cuales garantizan propiedades esenciales como la cerradura, la asociatividad y la existencia de elementos neutros e inversos.

El estudio de los espacios vectoriales permite comprender conceptos clave como subespacios, independencia lineal, bases y dimensión, los cuales son herramientas indispensables para la resolución de sistemas de ecuaciones lineales, transformaciones lineales y aplicaciones en ingeniería, física y ciencias de la computación.

En el presente reporte se desarrolla la resolución de problemas relacionados con espacios vectoriales, incluyendo la verificación de conjuntos como espacios y subespacios vectoriales, la determinación de independencia lineal en conjuntos de matrices, y la identificación de bases. Cada ejercicio se acompaña de su respectiva verificación en el software GeoGebra.

**Desarrollo de la actividad**

**Mapa conceptual**

[Insertar mapa conceptual aquí respondiendo: - ¿Qué es un espacio vectorial? - ¿Qué tipos de espacios vectoriales conoce? - ¿Cómo se determina que un conjunto dado es o no un espacio vectorial? - ¿Qué es y cómo se determina una base para un espacio vectorial?]

**Ejercicios resueltos**

## Ejercicio 2a — Verdadero o Falso

**Afirmación 1**

"El conjunto de vectores $\begin{pmatrix} x \\ y \end{pmatrix}$ en $\mathbb{R}^2$ con $y = -3x + 1$ es un espacio vectorial."

**Respuesta: FALSO**

**Justificación:**

Para que un subconjunto $S$ de $\mathbb{R}^2$ sea un espacio vectorial (subespacio), debe contener al vector cero $(0, 0)$.

Verificamos si $(0, 0) \in S$: si $x = 0$, entonces $y = -3(0) + 1 = 1 \neq 0$.

Por lo tanto, $(0, 0) \notin S$. El conjunto **no contiene al vector cero**.

**Ejemplo — No es cerrado bajo la suma:**

Tomemos dos vectores en $S$:

- $\vec{u} = (0, 1)$: cumple $y = -3(0) + 1 = 1$ ✓
- $\vec{v} = (1, -2)$: cumple $y = -3(1) + 1 = -2$ ✓

Su suma:

$$\vec{u} + \vec{v} = (0 + 1,\ 1 + (-2)) = (1, -1)$$

Verificamos: $-3(1) + 1 = -2 \neq -1$. No cumple, entonces $\vec{u} + \vec{v} \notin S$.

**Ejemplo — No es cerrado bajo multiplicación escalar:**

Con $\vec{u} = (0, 1) \in S$ y $c = 0$:

$$c \cdot \vec{u} = 0 \cdot (0, 1) = (0, 0) \notin S$$

pues $0 \neq -3(0) + 1 = 1$.

**Nota geométrica:** El conjunto $y = -3x + 1$ es una recta que **no pasa por el origen** (tiene intercepto en $y = 1$). Solo las rectas que pasan por el origen son subespacios de $\mathbb{R}^2$.

**Afirmación 2**

"El conjunto de matrices invertibles de $5 \times 5$ forma un espacio vectorial con '+' definido como en la suma de matrices ordinaria."

**Respuesta: FALSO**

**Justificación:**

**Razón 1 — No contiene al elemento neutro de la suma:**

La matriz cero $0_{5\times 5}$ NO es invertible ($\det(0_{5\times 5}) = 0$), por lo tanto $0_{5\times 5}$ no pertenece al conjunto.

**Razón 2 — No es cerrado bajo la suma:**

Sea $A = I_5$ (identidad $5\times 5$) y $B = -I_5$:

- $A$ es invertible: $\det(I_5) = 1 \neq 0$ ✓
- $B$ es invertible: $\det(-I_5) = (-1)^5 = -1 \neq 0$ ✓

Pero su suma:

$$A + B = I_5 + (-I_5) = 0_{5\times 5}$$

La matriz cero **NO es invertible**, así que $A + B$ no pertenece al conjunto.

**Razón 3 — No es cerrado bajo multiplicación escalar:**

Si $A$ es invertible y $c = 0$: $c \cdot A = 0 \cdot A = 0_{5\times 5}$, que no es invertible.

## Ejercicio 2b — Subespacios vectoriales de $\mathbb{R}^3$

Para cada caso, verificamos las **3 condiciones de subespacio**: (1) contiene al vector cero, (2) cerrado bajo la suma, (3) cerrado bajo multiplicación escalar.

**Inciso i:** $S = \{\vec{x} \in \mathbb{R}^3\ |\ x + y + z = 0\}$

**Resultado: SÍ es subespacio vectorial de $\mathbb{R}^3$**

**Condición 1 — Vector cero:**

$(0, 0, 0)$: $0 + 0 + 0 = 0$ ✓

**Condición 2 — Cerradura bajo la suma:**

Sean $\vec{u} = (x_1, y_1, z_1)$ y $\vec{v} = (x_2, y_2, z_2)$ en $S$. Entonces $x_1 + y_1 + z_1 = 0$ y $x_2 + y_2 + z_2 = 0$.

$$\vec{u} + \vec{v} = (x_1 + x_2,\ y_1 + y_2,\ z_1 + z_2)$$

$$(x_1 + x_2) + (y_1 + y_2) + (z_1 + z_2) = (x_1 + y_1 + z_1) + (x_2 + y_2 + z_2) = 0 + 0 = 0 \quad \checkmark$$

**Condición 3 — Cerradura escalar:**

Sea $c \in \mathbb{R}$ y $\vec{v} = (x_1, y_1, z_1) \in S$:

$$c\vec{v} = (cx_1, cy_1, cz_1)$$

$$cx_1 + cy_1 + cz_1 = c(x_1 + y_1 + z_1) = c(0) = 0 \quad \checkmark$$

**Interpretación geométrica:** $S$ es un plano que pasa por el origen con vector normal $\vec{n} = (1, 1, 1)$.

**Base de $S$:** Despejando $z = -x - y$:

$$(x, y, -x - y) = x(1, 0, -1) + y(0, 1, -1)$$

$$\text{Base} = \{(1, 0, -1),\ (0, 1, -1)\}, \quad \dim(S) = 2$$

**Inciso ii:** $S = \{\vec{x} \in \mathbb{R}^3\ |\ x = y = z\}$

**Resultado: SÍ es subespacio vectorial de $\mathbb{R}^3$**

**Condición 1 — Vector cero:**

$(0, 0, 0)$: $0 = 0 = 0$ ✓

**Condición 2 — Cerradura bajo la suma:**

Sean $\vec{u} = (a, a, a)$ y $\vec{v} = (b, b, b)$ en $S$:

$$\vec{u} + \vec{v} = (a + b,\ a + b,\ a + b)$$

Las tres componentes son iguales ✓, entonces $\vec{u} + \vec{v} \in S$.

**Condición 3 — Cerradura escalar:**

$$c \cdot (a, a, a) = (ca, ca, ca)$$

Las tres componentes son iguales ✓, entonces $c\vec{v} \in S$.

**Interpretación geométrica:** $S$ es la recta que pasa por el origen en la dirección $(1, 1, 1)$.

**Base de $S$:** $(t, t, t) = t(1, 1, 1)$

$$\text{Base} = \{(1, 1, 1)\}, \quad \dim(S) = 1$$

**Inciso iii:** $S = \{\vec{x} \in \mathbb{R}^3\ |\ y = 2x;\ z = 3x\}$

**Resultado: SÍ es subespacio vectorial de $\mathbb{R}^3$**

**Condición 1 — Vector cero:**

$(0, 0, 0)$: $0 = 2(0) = 0$ ✓ y $0 = 3(0) = 0$ ✓

**Condición 2 — Cerradura bajo la suma:**

Sean $\vec{u} = (x_1, 2x_1, 3x_1)$ y $\vec{v} = (x_2, 2x_2, 3x_2)$ en $S$:

$$\vec{u} + \vec{v} = (x_1 + x_2,\ 2x_1 + 2x_2,\ 3x_1 + 3x_2) = (x_3,\ 2x_3,\ 3x_3)$$

donde $x_3 = x_1 + x_2$. Cumple $y = 2x$ y $z = 3x$ ✓

**Condición 3 — Cerradura escalar:**

$$c \cdot (x_1, 2x_1, 3x_1) = (cx_1, 2(cx_1), 3(cx_1)) \in S \quad \checkmark$$

**Interpretación geométrica:** $S$ es la recta que pasa por el origen en la dirección $(1, 2, 3)$.

**Base de $S$:** $(x, 2x, 3x) = x(1, 2, 3)$

$$\text{Base} = \{(1, 2, 3)\}, \quad \dim(S) = 1$$

## Ejercicio 2c — Independencia lineal de matrices en $M_{2\times 2}$

Para determinar si un conjunto de matrices es linealmente independiente, planteamos $c_1 A_1 + c_2 A_2 + \cdots + c_n A_n = 0_{2\times 2}$ y resolvemos el sistema resultante.

**Conjunto i**

$$A_1 = \begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix}, \quad A_2 = \begin{bmatrix} 3 & 0 \\ 1 & 1 \end{bmatrix}, \quad A_3 = \begin{bmatrix} 0 & 2 \\ -3 & 1 \end{bmatrix}, \quad A_4 = \begin{bmatrix} -1 & 0 \\ -1 & 7 \end{bmatrix}$$

**Planteamiento:** $c_1 A_1 + c_2 A_2 + c_3 A_3 + c_4 A_4 = 0_{2\times 2}$

Igualando entrada por entrada obtenemos el sistema:

- Posición $(1,1)$: $-c_1 + 3c_2 - c_4 = 0$
- Posición $(1,2)$: $c_1 + 2c_3 = 0$
- Posición $(2,1)$: $-2c_1 + c_2 - 3c_3 - c_4 = 0$
- Posición $(2,2)$: $2c_1 + c_2 + c_3 + 7c_4 = 0$

**Matriz aumentada:**

$$\begin{bmatrix} -1 & 3 & 0 & -1 \\ 1 & 0 & 2 & 0 \\ -2 & 1 & -3 & -1 \\ 2 & 1 & 1 & 7 \end{bmatrix}$$

**Reducción por filas:**

$F_1 \leftarrow -F_1$:

$$\begin{bmatrix} 1 & -3 & 0 & 1 \\ 1 & 0 & 2 & 0 \\ -2 & 1 & -3 & -1 \\ 2 & 1 & 1 & 7 \end{bmatrix}$$

$F_2 \leftarrow F_2 - F_1$, $F_3 \leftarrow F_3 + 2F_1$, $F_4 \leftarrow F_4 - 2F_1$:

$$\begin{bmatrix} 1 & -3 & 0 & 1 \\ 0 & 3 & 2 & -1 \\ 0 & -5 & -3 & 1 \\ 0 & 7 & 1 & 5 \end{bmatrix}$$

$F_3 \leftarrow F_3 + \frac{5}{3}F_2$, $F_4 \leftarrow F_4 - \frac{7}{3}F_2$:

$$\begin{bmatrix} 1 & -3 & 0 & 1 \\ 0 & 3 & 2 & -1 \\ 0 & 0 & \frac{1}{3} & -\frac{2}{3} \\ 0 & 0 & -\frac{11}{3} & \frac{22}{3} \end{bmatrix}$$

$F_3 \leftarrow 3F_3$, luego $F_4 \leftarrow F_4 + \frac{11}{3}F_3$:

$$\begin{bmatrix} 1 & -3 & 0 & 1 \\ 0 & 3 & 2 & -1 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

**Rango = 3 < 4 incógnitas**, por lo que existen soluciones no triviales.

Sea $c_4 = t$ (parámetro libre):

- De $F_3$: $c_3 - 2t = 0 \Rightarrow c_3 = 2t$
- De $F_2$: $3c_2 + 2(2t) - t = 0 \Rightarrow c_2 = -t$
- De $F_1$: $c_1 - 3(-t) + t = 0 \Rightarrow c_1 = -4t$

**Solución:** $(c_1, c_2, c_3, c_4) = t(-4, -1, 2, 1)$ para cualquier $t \in \mathbb{R}$.

**Resultado: Las matrices son LINEALMENTE DEPENDIENTES**

**Expresar una matriz como combinación lineal:**

Con $t = 1$: $-4A_1 - A_2 + 2A_3 + A_4 = 0$. Despejando $A_4$:

$$A_4 = 4A_1 + A_2 - 2A_3$$

**Verificación:**

$$4\begin{bmatrix} -1 & 1 \\ -2 & 2 \end{bmatrix} + \begin{bmatrix} 3 & 0 \\ 1 & 1 \end{bmatrix} - 2\begin{bmatrix} 0 & 2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -4+3+0 & 4+0-4 \\ -8+1+6 & 8+1-2 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ -1 & 7 \end{bmatrix} = A_4 \quad \checkmark$$

**Conjunto ii**

$$A_1 = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}, \quad A_2 = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}, \quad A_3 = \begin{bmatrix} 0 & 1 \\ 1 & 1 \end{bmatrix}, \quad A_4 = \begin{bmatrix} 1 & 1 \\ 1 & 0 \end{bmatrix}$$

**Planteamiento:** $c_1 A_1 + c_2 A_2 + c_3 A_3 + c_4 A_4 = 0_{2\times 2}$

Igualando entrada por entrada:

- Posición $(1,1)$: $c_1 + c_2 + c_4 = 0$
- Posición $(1,2)$: $c_1 + c_3 + c_4 = 0$
- Posición $(2,1)$: $c_2 + c_3 + c_4 = 0$
- Posición $(2,2)$: $c_1 + c_2 + c_3 = 0$

**Matriz aumentada y reducción:**

$$\begin{bmatrix} 1 & 1 & 0 & 1 \\ 1 & 0 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \end{bmatrix}$$

$F_2 \leftarrow F_2 - F_1$, $F_4 \leftarrow F_4 - F_1$:

$$\begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & -1 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & -1 \end{bmatrix}$$

$F_3 \leftarrow F_3 + F_2$:

$$\begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 1 & -1 \end{bmatrix}$$

$F_4 \leftarrow F_4 - \frac{1}{2}F_3$:

$$\begin{bmatrix} 1 & 1 & 0 & 1 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & -\frac{3}{2} \end{bmatrix}$$

**Rango = 4 = número de incógnitas**, por lo que la única solución es la trivial.

De $F_4$: $-\frac{3}{2}c_4 = 0 \Rightarrow c_4 = 0$. De $F_3$: $2c_3 = 0 \Rightarrow c_3 = 0$. De $F_2$: $-c_2 = 0 \Rightarrow c_2 = 0$. De $F_1$: $c_1 = 0$.

**Resultado: Las matrices son LINEALMENTE INDEPENDIENTES**

Como $\dim(M_{2\times 2}) = 4$ y tenemos exactamente 4 matrices linealmente independientes, este conjunto forma una **base de $M_{2\times 2}$**.

## Verificación en GeoGebra

**Verificación del Ejercicio 2a**

*Afirmación 1:* En la vista Gráfica de GeoGebra, al escribir `y = -3x + 1` se observa que la recta **no pasa por el origen**, confirmando que no es subespacio.

*Afirmación 2:* En la vista CAS:

- `A := {{1,0,0,0,0},{0,1,0,0,0},{0,0,1,0,0},{0,0,0,1,0},{0,0,0,0,1}}`
- `B := {{-1,0,0,0,0},{0,-1,0,0,0},{0,0,-1,0,0},{0,0,0,-1,0},{0,0,0,0,-1}}`
- `Determinant(A)` da 1 (invertible ✓)
- `Determinant(B)` da −1 (invertible ✓)
- `Determinant(A + B)` da 0 (NO invertible ✓)

**Verificación del Ejercicio 2b**

*Inciso i:* En la vista 3D, `x + y + z = 0` genera un plano que pasa por el origen. Vectores de prueba: $\vec{u} = (1, 0, -1)$, $\vec{v} = (0, 1, -1)$. Su suma $\vec{u} + \vec{v} = (1, 1, -2)$ cumple: $1 + 1 + (-2) = 0$ ✓

*Inciso ii:* `Curve(t, t, t, t, -5, 5)` genera la recta $x = y = z$ por el origen. Vectores de prueba: $\vec{u} = (2, 2, 2)$, $\vec{v} = (3, 3, 3)$. Su suma $(5, 5, 5)$ cumple $x = y = z$ ✓

*Inciso iii:* `Curve(t, 2t, 3t, t, -5, 5)` genera la recta $y = 2x$, $z = 3x$ por el origen. Vectores de prueba: $\vec{u} = (1, 2, 3)$, $\vec{v} = (2, 4, 6)$. Su suma $(3, 6, 9)$ cumple: $6 = 2(3)$ y $9 = 3(3)$ ✓

**Verificación del Ejercicio 2c**

*Conjunto i (dependencia lineal):* En la vista CAS:

- `A1 := {{-1, 1}, {-2, 2}}`
- `A2 := {{3, 0}, {1, 1}}`
- `A3 := {{0, 2}, {-3, 1}}`
- `A4 := {{-1, 0}, {-1, 7}}`
- `4 * A1 + A2 - 2 * A3` da $\begin{pmatrix} -1 & 0 \\ -1 & 7 \end{pmatrix} = A_4$ ✓
- `-4 * A1 - A2 + 2 * A3 + A4` da $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ ✓

*Conjunto ii (independencia lineal):*

- `M := {{1, 1, 0, 1}, {1, 0, 1, 1}, {0, 1, 1, 1}, {1, 1, 1, 0}}`
- `Determinant(M)` da $-3 \neq 0$, confirmando independencia lineal ✓

**Enlace del video explicativo**

[Insertar enlace del video aquí]

El video explica el desarrollo paso a paso de uno de los ejercicios del punto 2 y su respectiva verificación en GeoGebra (duración máxima: 5 minutos).

**Conclusiones**

1. Un espacio vectorial es una estructura algebraica que debe cumplir estrictamente 10 axiomas. La ausencia de cualquiera de ellos —especialmente la cerradura bajo la suma, la cerradura bajo multiplicación escalar y la existencia del vector cero— invalida la estructura como espacio vectorial. Esto quedó demostrado al verificar que ni el conjunto $y = -3x + 1$ ni el conjunto de matrices invertibles cumplen estas condiciones.

2. Para verificar si un subconjunto $S$ de un espacio vectorial conocido es un subespacio, basta comprobar tres condiciones: que contenga al vector cero, que sea cerrado bajo la suma y que sea cerrado bajo la multiplicación por escalar. Los tres subespacios analizados en $\mathbb{R}^3$ (un plano y dos rectas por el origen) cumplieron satisfactoriamente estas condiciones.

3. La independencia lineal de un conjunto de matrices se determina mediante la resolución de un sistema de ecuaciones homogéneo. Si el sistema solo admite la solución trivial, las matrices son linealmente independientes; de lo contrario, son dependientes y es posible expresar alguna como combinación lineal de las demás.

4. GeoGebra resultó ser una herramienta eficaz para la verificación de los resultados obtenidos analíticamente, tanto en la visualización gráfica de subespacios como en el cálculo matricial mediante la vista CAS.

**Referencias**

Grossman, S. (2019). Vectores y matrices. En *Álgebra lineal* (pp. 63-91). McGraw-Hill.

Grossman, S. (2019). Espacios vectoriales. En *Álgebra lineal* (pp. 285-304). McGraw-Hill.

Castañeda Hernández, S., Barrios Sarmiento, A. y Gutiérrez García, I. (2020). *Manual de Álgebra lineal* (2a. ed.). Universidad del Norte.

Hernández Pérez, M. (2018). *Álgebra lineal: ejercicios de práctica*. Grupo Editorial Patria.

Nuñez, L. A., Vargas, E. y Boada, E. (2019). *Álgebra lineal*. Universidad Abierta para Adultos (UAPA).

GeoGebra.org. (s. f.). *GeoGebra Clásico*. GeoGebra. https://www.geogebra.org/classic
