---
title: "Guía de Estudio: Cómo resolver los ejercicios de Álgebra de Matrices y verificarlos en GeoGebra"
---

\newpage

# Guía de Estudio — Álgebra de Matrices

Esta guía explica paso a paso **cómo se resolvió cada ejercicio**, el razonamiento detrás de cada operación y cómo verificar los resultados en GeoGebra.

\newpage

# Conceptos clave antes de empezar

## ¿Qué es multiplicar matrices?

Para multiplicar dos matrices, se necesita que el **número de columnas** de la primera sea igual al **número de filas** de la segunda.

Si $A$ es de tamaño $m \times n$ y $B$ es de tamaño $n \times p$, el resultado $C = A \cdot B$ será de tamaño $m \times p$.

**¿Cómo se calcula cada elemento?**

El elemento en la fila $i$, columna $j$ del resultado se obtiene multiplicando cada elemento de la **fila $i$ de $A$** por el correspondiente elemento de la **columna $j$ de $B$**, y sumando todo:

$$c_{ij} = a_{i1} \cdot b_{1j} + a_{i2} \cdot b_{2j} + \cdots + a_{in} \cdot b_{nj}$$

**Ejemplo visual:** Para obtener el elemento de la fila 1, columna 1:

$$\begin{bmatrix} \mathbf{2} & \mathbf{0} & \mathbf{3} \\ \cdot & \cdot & \cdot \\ \cdot & \cdot & \cdot \end{bmatrix} \cdot \begin{bmatrix} \mathbf{500} \\ \mathbf{400} \\ \mathbf{100} \end{bmatrix} \rightarrow 2(500) + 0(400) + 3(100) = 1300$$

## ¿Qué es sumar/restar matrices?

Solo se pueden sumar matrices que tengan **las mismas dimensiones**. Se suma elemento a elemento:

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} + \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} a+e & b+f \\ c+g & d+h \end{bmatrix}$$

## ¿Qué es multiplicar por un escalar?

Se multiplica **cada elemento** de la matriz por el número:

$$k \cdot \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} ka & kb \\ kc & kd \end{bmatrix}$$

## ¿Qué es elevar una matriz al cuadrado?

$A^2$ significa $A \cdot A$. Es la matriz multiplicada por sí misma.

\newpage

# Ejercicio 2a — Ebanistas

## Contexto del problema

Tres ebanistas fabrican muebles de 3 tipos de madera. Nos dan:

- **Matriz A** (3×3): cuántos muebles hizo cada ebanista en enero
- **Matriz B** (3×3): cuántos muebles hizo cada ebanista en febrero
- **Matriz X** (3×1): cuánto pagan por cada tipo de mueble

$$A = \begin{bmatrix} 2 & 0 & 3 \\ 1 & 1 & 4 \\ 1 & 2 & 3 \end{bmatrix} \quad B = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 0 & 3 \\ 2 & 1 & 4 \end{bmatrix} \quad X = \begin{bmatrix} 500 \\ 400 \\ 100 \end{bmatrix}$$

## a) Calcular $A \cdot X$ — ¿Cuánto ganó cada uno en enero?

**¿Por qué se multiplica A por X?** Porque cada fila de A tiene la producción de un ebanista, y X tiene el precio por tipo de madera. Al multiplicar, obtenemos el ingreso total de cada uno.

**Dimensiones:** A es 3×3, X es 3×1 → el resultado será 3×1 (un valor por ebanista). ✓

**Cálculo fila por fila:**

- **José** (fila 1): $2(500) + 0(400) + 3(100) = 1000 + 0 + 300 = \mathbf{1300}$
- **Pedro** (fila 2): $1(500) + 1(400) + 4(100) = 500 + 400 + 400 = \mathbf{1300}$
- **Arturo** (fila 3): $1(500) + 2(400) + 3(100) = 500 + 800 + 300 = \mathbf{1600}$

$$A \cdot X = \begin{bmatrix} 1300 \\ 1300 \\ 1600 \end{bmatrix}$$

**Interpretación:** José ganó \$1,300, Pedro ganó \$1,300 y Arturo ganó \$1,600 en enero.

## b) Calcular $B \cdot X$ — ¿Cuánto ganó cada uno en febrero?

**Misma lógica:** ahora usamos la producción de febrero.

- **José** (fila 1): $1(500) + 2(400) + 3(100) = 500 + 800 + 300 = \mathbf{1600}$
- **Pedro** (fila 2): $2(500) + 0(400) + 3(100) = 1000 + 0 + 300 = \mathbf{1300}$
- **Arturo** (fila 3): $2(500) + 1(400) + 4(100) = 1000 + 400 + 400 = \mathbf{1800}$

$$B \cdot X = \begin{bmatrix} 1600 \\ 1300 \\ 1800 \end{bmatrix}$$

**Interpretación:** José ganó \$1,600, Pedro ganó \$1,300 y Arturo ganó \$1,800 en febrero.

## c) Calcular $A + X$ — ¿Se puede?

**NO es posible.** ¿Por qué?

- A es de dimensión **3×3**
- X es de dimensión **3×1**

Para sumar matrices, ambas deben tener **exactamente las mismas dimensiones**. Como 3×3 ≠ 3×1, la operación **no está definida**.

**Esto es importante:** No todas las operaciones que nos piden son válidas. Parte del ejercicio es saber identificar cuándo una operación no se puede realizar.

## d) Calcular $(A + B) \cdot X$ — ¿Cuánto ganaron en total (enero + febrero)?

**¿Por qué funciona?** Si sumamos A + B, obtenemos la producción total de ambos meses. Luego, al multiplicar por X, obtenemos el ingreso total combinado.

**Paso 1:** Sumar A + B (ambas son 3×3, así que sí se puede):

$$A + B = \begin{bmatrix} 2+1 & 0+2 & 3+3 \\ 1+2 & 1+0 & 4+3 \\ 1+2 & 2+1 & 3+4 \end{bmatrix} = \begin{bmatrix} 3 & 2 & 6 \\ 3 & 1 & 7 \\ 3 & 3 & 7 \end{bmatrix}$$

**Paso 2:** Multiplicar el resultado por X:

- **José**: $3(500) + 2(400) + 6(100) = 1500 + 800 + 600 = \mathbf{2900}$
- **Pedro**: $3(500) + 1(400) + 7(100) = 1500 + 400 + 700 = \mathbf{2600}$
- **Arturo**: $3(500) + 3(400) + 7(100) = 1500 + 1200 + 700 = \mathbf{3400}$

$$\text{Verificación rápida: } A \cdot X + B \cdot X = \begin{bmatrix} 1300 \\ 1300 \\ 1600 \end{bmatrix} + \begin{bmatrix} 1600 \\ 1300 \\ 1800 \end{bmatrix} = \begin{bmatrix} 2900 \\ 2600 \\ 3400 \end{bmatrix} \quad \checkmark$$

\newpage

# Ejercicio 2b — Operaciones con matrices A y B

## Las matrices

$$A = \begin{bmatrix} 3 & -3 & 7 \\ 2 & 6 & -2 \\ 4 & 2 & 5 \end{bmatrix} \qquad B = \begin{bmatrix} -9 & 5 & -8 \\ 3 & -7 & 1 \\ -1 & 2 & 6 \end{bmatrix}$$

## a) Calcular $A^2 + B^2$

**Estrategia:** Primero calcular $A^2 = A \cdot A$, luego $B^2 = B \cdot B$, y finalmente sumar.

**Cálculo de $A^2$ — elemento por elemento:**

Para cada posición $(i,j)$, tomas la fila $i$ de A y la columna $j$ de A, multiplicas término a término y sumas.

Ejemplo: posición (1,1) → fila 1 por columna 1:

$$a_{11} = 3 \times 3 + (-3) \times 2 + 7 \times 4 = 9 - 6 + 28 = 31$$

Ejemplo: posición (1,2) → fila 1 por columna 2:

$$a_{12} = 3 \times (-3) + (-3) \times 6 + 7 \times 2 = -9 - 18 + 14 = -13$$

Así con los 9 elementos:

$$A^2 = \begin{bmatrix} 31 & -13 & 62 \\ 10 & 26 & -8 \\ 36 & 10 & 49 \end{bmatrix}$$

**Cálculo de $B^2$** — mismo procedimiento:

$$B^2 = \begin{bmatrix} 104 & -96 & 29 \\ -49 & 66 & -25 \\ 9 & -7 & 46 \end{bmatrix}$$

**Resultado final** — se suman elemento a elemento:

$$A^2 + B^2 = \begin{bmatrix} 31+104 & -13+(-96) & 62+29 \\ 10+(-49) & 26+66 & -8+(-25) \\ 36+9 & 10+(-7) & 49+46 \end{bmatrix} = \begin{bmatrix} 135 & -109 & 91 \\ -39 & 92 & -33 \\ 45 & 3 & 95 \end{bmatrix}$$

## b) Calcular $3A + BA$

**Estrategia:** Calcular el escalar $3A$ (fácil) y el producto $BA$ (requiere multiplicación), luego sumar.

**$3A$:** Multiplicar cada elemento de A por 3:

$$3A = \begin{bmatrix} 9 & -9 & 21 \\ 6 & 18 & -6 \\ 12 & 6 & 15 \end{bmatrix}$$

**$BA = B \cdot A$:** Cuidado — es $B$ por $A$, no $A$ por $B$ (el orden importa en matrices).

$$BA = \begin{bmatrix} -49 & 41 & -113 \\ -1 & -49 & 40 \\ 25 & 27 & 19 \end{bmatrix}$$

**Resultado:**

$$3A + BA = \begin{bmatrix} -40 & 32 & -92 \\ 5 & -31 & 34 \\ 37 & 33 & 34 \end{bmatrix}$$

## c) Calcular $A^2 - 5B$

**Estrategia:** Ya tenemos $A^2$ calculado. Solo hay que calcular $5B$ y restar.

$$5B = \begin{bmatrix} -45 & 25 & -40 \\ 15 & -35 & 5 \\ -5 & 10 & 30 \end{bmatrix}$$

**Resultado** — restar elemento a elemento (cuidado con los signos negativos):

$$A^2 - 5B = \begin{bmatrix} 31-(-45) & -13-25 & 62-(-40) \\ 10-15 & 26-(-35) & -8-5 \\ 36-(-5) & 10-10 & 49-30 \end{bmatrix} = \begin{bmatrix} 76 & -38 & 102 \\ -5 & 61 & -13 \\ 41 & 0 & 19 \end{bmatrix}$$

**Tip:** Restar un negativo es sumar: $31 - (-45) = 31 + 45 = 76$.

## d) Calcular $A + A^2 + B + B^2$

**Estrategia:** Ya tenemos $A^2$ y $B^2$. Agrupamos para facilitar:

$$A + A^2 = \begin{bmatrix} 34 & -16 & 69 \\ 12 & 32 & -10 \\ 40 & 12 & 54 \end{bmatrix}$$

$$B + B^2 = \begin{bmatrix} 95 & -91 & 21 \\ -46 & 59 & -24 \\ 8 & -5 & 52 \end{bmatrix}$$

**Resultado final:**

$$A + A^2 + B + B^2 = \begin{bmatrix} 129 & -107 & 90 \\ -34 & 91 & -34 \\ 48 & 7 & 106 \end{bmatrix}$$

\newpage

# Ejercicio 2c — Compañía de juguetes

## Entendiendo el problema

Tenemos ventas de juguetes en 3 ciudades, en dos tipos (acción y educativos):

$$A = \begin{bmatrix} 400 & 350 & 150 \\ 450 & 280 & 850 \end{bmatrix} \text{ (ventas 2003)} \qquad B = \begin{bmatrix} 380 & 330 & 220 \\ 460 & 320 & 750 \end{bmatrix} \text{ (ventas 2005)}$$

**Nos dicen:** En 2006, la compañía dobla (×2) las ventas de 2005.

**Nos piden:** El cambio entre 2003 y 2006.

## Razonamiento

1. **Ventas 2006** = $2B$ (el doble de 2005)
2. **Cambio** = Ventas 2006 − Ventas 2003 = $2B - A$

## Solución

**Paso 1:** Calcular $2B$:

$$2B = \begin{bmatrix} 2 \times 380 & 2 \times 330 & 2 \times 220 \\ 2 \times 460 & 2 \times 320 & 2 \times 750 \end{bmatrix} = \begin{bmatrix} 760 & 660 & 440 \\ 920 & 640 & 1500 \end{bmatrix}$$

**Paso 2:** Restar $A$:

$$2B - A = \begin{bmatrix} 760-400 & 660-350 & 440-150 \\ 920-450 & 640-280 & 1500-850 \end{bmatrix} = \begin{bmatrix} 360 & 310 & 290 \\ 470 & 360 & 650 \end{bmatrix}$$

**Interpretación:** Todas las ventas crecieron. El mayor crecimiento fue en la Ciudad 3 para juguetes educativos (+\$650,000).

\newpage

# Ejercicio 2d — Costos de producción por estación

## Entendiendo el problema

Una empresa fabrica 3 productos (A, B, C) con 3 tipos de costos y quiere saber el costo total por estación.

**Tabla I** — Costo de producir **un solo artículo** (3×3):

$$\text{Tabla I} = \begin{bmatrix} 0.20 & 0.40 & 0.25 \\ 0.40 & 0.50 & 0.35 \\ 0.20 & 0.30 & 0.25 \end{bmatrix} \quad \begin{matrix} \text{Materiales} \\ \text{Mano de obra} \\ \text{Otros gastos} \end{matrix}$$

**Tabla II** — Cantidad de artículos producidos por estación (3×4):

$$\text{Tabla II} = \begin{bmatrix} 5000 & 5500 & 5500 & 5000 \\ 3000 & 3600 & 3400 & 3200 \\ 6800 & 7200 & 7000 & 7000 \end{bmatrix} \quad \begin{matrix} \text{Producto A} \\ \text{Producto B} \\ \text{Producto C} \end{matrix}$$

## ¿Por qué se multiplican?

Porque al multiplicar **costo unitario × cantidad producida**, obtenemos el **costo total**. Cada fila del resultado representa un tipo de costo, y cada columna una estación.

**Dimensiones:** Tabla I es 3×3, Tabla II es 3×4 → Resultado será 3×4. ✓

## Cálculo detallado

**Materiales en Verano** (fila 1 × columna 1):

$$0.20 \times 5000 + 0.40 \times 3000 + 0.25 \times 6800 = 1000 + 1200 + 1700 = \mathbf{3900}$$

**Materiales en Otoño** (fila 1 × columna 2):

$$0.20 \times 5500 + 0.40 \times 3600 + 0.25 \times 7200 = 1100 + 1440 + 1800 = \mathbf{4340}$$

**Materiales en Invierno** (fila 1 × columna 3):

$$0.20 \times 5500 + 0.40 \times 3400 + 0.25 \times 7000 = 1100 + 1360 + 1750 = \mathbf{4210}$$

**Materiales en Primavera** (fila 1 × columna 4):

$$0.20 \times 5000 + 0.40 \times 3200 + 0.25 \times 7000 = 1000 + 1280 + 1750 = \mathbf{4030}$$

**Mano de obra en Verano** (fila 2 × columna 1):

$$0.40 \times 5000 + 0.50 \times 3000 + 0.35 \times 6800 = 2000 + 1500 + 2380 = \mathbf{5880}$$

**Mano de obra en Otoño** (fila 2 × columna 2):

$$0.40 \times 5500 + 0.50 \times 3600 + 0.35 \times 7200 = 2200 + 1800 + 2520 = \mathbf{6520}$$

**Mano de obra en Invierno** (fila 2 × columna 3):

$$0.40 \times 5500 + 0.50 \times 3400 + 0.35 \times 7000 = 2200 + 1700 + 2450 = \mathbf{6350}$$

**Mano de obra en Primavera** (fila 2 × columna 4):

$$0.40 \times 5000 + 0.50 \times 3200 + 0.35 \times 7000 = 2000 + 1600 + 2450 = \mathbf{6050}$$

**Otros gastos en Verano** (fila 3 × columna 1):

$$0.20 \times 5000 + 0.30 \times 3000 + 0.25 \times 6800 = 1000 + 900 + 1700 = \mathbf{3600}$$

**Otros gastos en Otoño** (fila 3 × columna 2):

$$0.20 \times 5500 + 0.30 \times 3600 + 0.25 \times 7200 = 1100 + 1080 + 1800 = \mathbf{3980}$$

**Otros gastos en Invierno** (fila 3 × columna 3):

$$0.20 \times 5500 + 0.30 \times 3400 + 0.25 \times 7000 = 1100 + 1020 + 1750 = \mathbf{3870}$$

**Otros gastos en Primavera** (fila 3 × columna 4):

$$0.20 \times 5000 + 0.30 \times 3200 + 0.25 \times 7000 = 1000 + 960 + 1750 = \mathbf{3710}$$

## Matriz final de costos totales

$$\text{Costos Totales} = \begin{bmatrix} 3900 & 4340 & 4210 & 4030 \\ 5880 & 6520 & 6350 & 6050 \\ 3600 & 3980 & 3870 & 3710 \end{bmatrix}$$

| Categoría | Verano | Otoño | Invierno | Primavera |
|-----------|--------|-------|----------|-----------|
| Materiales | 3900 | 4340 | 4210 | 4030 |
| Mano de obra | 5880 | 6520 | 6350 | 6050 |
| Otros gastos | 3600 | 3980 | 3870 | 3710 |
| **TOTAL** | **13380** | **14840** | **14430** | **13790** |

\newpage

# Cómo verificar en GeoGebra — Guía paso a paso

## Paso 1: Abrir GeoGebra

Entra a **GeoGebra Clásico** desde el navegador (no necesitas instalar nada). Busca "GeoGebra Classic" en Google o ve a la página de GeoGebra.

Una vez abierto, haz clic en **Vista → CAS** (Cálculo Algebraico Simbólico). Esta vista permite trabajar con matrices.

## Paso 2: Cómo escribir matrices en GeoGebra

En la vista CAS, las matrices se escriben así:

```
A := {{fila1_elem1, fila1_elem2, fila1_elem3}, {fila2_elem1, fila2_elem2, fila2_elem3}, {fila3_elem1, fila3_elem2, fila3_elem3}}
```

Cada fila va entre llaves `{ }` y separada por comas.

## Verificación del Ejercicio 2a — Ebanistas

Escribe en la vista CAS, línea por línea (presiona Enter después de cada una):

```
A1 := {{2, 0, 3}, {1, 1, 4}, {1, 2, 3}}
```

```
B1 := {{1, 2, 3}, {2, 0, 3}, {2, 1, 4}}
```

```
X := {{500}, {400}, {100}}
```

```
A1 * X
```

Debe dar: $\begin{pmatrix} 1300 \\ 1300 \\ 1600 \end{pmatrix}$

```
B1 * X
```

Debe dar: $\begin{pmatrix} 1600 \\ 1300 \\ 1800 \end{pmatrix}$

```
(A1 + B1) * X
```

Debe dar: $\begin{pmatrix} 2900 \\ 2600 \\ 3400 \end{pmatrix}$

**Toma captura de pantalla mostrando los resultados.**

## Verificación del Ejercicio 2b — Operaciones con A y B

Escribe en la vista CAS:

```
A2 := {{3, -3, 7}, {2, 6, -2}, {4, 2, 5}}
```

```
B2 := {{-9, 5, -8}, {3, -7, 1}, {-1, 2, 6}}
```

**Para $A^2 + B^2$:**

```
A2 * A2 + B2 * B2
```

Debe dar: $\begin{pmatrix} 135 & -109 & 91 \\ -39 & 92 & -33 \\ 45 & 3 & 95 \end{pmatrix}$

**Para $3A + BA$:**

```
3 * A2 + B2 * A2
```

Debe dar: $\begin{pmatrix} -40 & 32 & -92 \\ 5 & -31 & 34 \\ 37 & 33 & 34 \end{pmatrix}$

**Para $A^2 - 5B$:**

```
A2 * A2 - 5 * B2
```

Debe dar: $\begin{pmatrix} 76 & -38 & 102 \\ -5 & 61 & -13 \\ 41 & 0 & 19 \end{pmatrix}$

**Para $A + A^2 + B + B^2$:**

```
A2 + A2 * A2 + B2 + B2 * B2
```

Debe dar: $\begin{pmatrix} 129 & -107 & 90 \\ -34 & 91 & -34 \\ 48 & 7 & 106 \end{pmatrix}$

**Toma captura de pantalla mostrando los 4 resultados.**

## Verificación del Ejercicio 2c — Juguetes

Escribe en la vista CAS:

```
A3 := {{400, 350, 150}, {450, 280, 850}}
```

```
B3 := {{380, 330, 220}, {460, 320, 750}}
```

```
2 * B3 - A3
```

Debe dar: $\begin{pmatrix} 360 & 310 & 290 \\ 470 & 360 & 650 \end{pmatrix}$

**Toma captura de pantalla.**

## Verificación del Ejercicio 2d — Costos de producción

Escribe en la vista CAS:

```
T1 := {{0.20, 0.40, 0.25}, {0.40, 0.50, 0.35}, {0.20, 0.30, 0.25}}
```

```
T2 := {{5000, 5500, 5500, 5000}, {3000, 3600, 3400, 3200}, {6800, 7200, 7000, 7000}}
```

```
T1 * T2
```

Debe dar: $\begin{pmatrix} 3900 & 4340 & 4210 & 4030 \\ 5880 & 6520 & 6350 & 6050 \\ 3600 & 3980 & 3870 & 3710 \end{pmatrix}$

**Toma captura de pantalla.**

\newpage

# Resumen de comandos en GeoGebra

| Operación | Comando en GeoGebra |
|-----------|---------------------|
| Definir matriz | `A := {{1, 2}, {3, 4}}` |
| Multiplicar matrices | `A * B` |
| Sumar matrices | `A + B` |
| Restar matrices | `A - B` |
| Escalar por número | `3 * A` |
| Matriz al cuadrado | `A * A` |

## Tips importantes

1. **Usa nombres diferentes** para las matrices de cada ejercicio (A1, A2, A3, etc.) para no confundirlas.
2. **Presiona Enter** después de cada línea para que GeoGebra la procese.
3. **Compara visualmente** cada resultado con los calculados a mano.
4. **Toma capturas de pantalla** de cada verificación para incluirlas en el documento final.
5. Si GeoGebra muestra fracciones en vez de decimales en el ejercicio 2d, no te preocupes — los valores son equivalentes (por ejemplo, $\frac{3900}{1} = 3900$).
