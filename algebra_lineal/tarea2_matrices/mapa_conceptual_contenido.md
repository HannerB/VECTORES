# Contenido para el Mapa Conceptual de Matrices

## 1. ¿Qué es una matriz?

**Definición:**
Una matriz es un arreglo rectangular de números, símbolos o expresiones algebraicas dispuestos en filas y columnas.

**Notación:**
- Se denota con letras mayúsculas: A, B, C, etc.
- Una matriz de m filas y n columnas tiene orden m×n
- Los elementos se denotan como $a_{ij}$ donde i es la fila y j es la columna

**Ejemplo:**
```
A = [a₁₁  a₁₂  a₁₃]
    [a₂₁  a₂₂  a₂₃]
```
Esta es una matriz 2×3 (2 filas, 3 columnas)

---

## 2. ¿Qué tipos de matrices conoces?

### Según dimensiones:
- **Matriz fila:** 1×n (una sola fila)
- **Matriz columna:** m×1 (una sola columna)
- **Matriz cuadrada:** n×n (igual número de filas y columnas)

### Matrices especiales:
- **Matriz nula:** Todos sus elementos son cero
- **Matriz identidad (I):** Matriz cuadrada con 1 en la diagonal principal y 0 en el resto
  ```
  I₃ = [1 0 0]
       [0 1 0]
       [0 0 1]
  ```
- **Matriz diagonal:** Matriz cuadrada con elementos no nulos solo en la diagonal principal
- **Matriz triangular superior:** Todos los elementos debajo de la diagonal principal son cero
- **Matriz triangular inferior:** Todos los elementos arriba de la diagonal principal son cero
- **Matriz simétrica:** A = Aᵀ (igual a su transpuesta)
- **Matriz antisimétrica:** A = -Aᵀ

---

## 3. ¿Cómo se define el producto de matrices?

### Condición de compatibilidad:
Para multiplicar A×B:
- A debe ser de orden m×**n**
- B debe ser de orden **n**×p
- El número de **columnas de A** debe ser igual al número de **filas de B**
- El resultado C = A·B es de orden m×p

### Definición del producto:
El elemento $c_{ij}$ de la matriz producto se calcula:

$$c_{ij} = a_{i1}·b_{1j} + a_{i2}·b_{2j} + ... + a_{in}·b_{nj}$$

Es decir: **suma de productos de elementos correspondientes de la fila i de A con la columna j de B**

### Ejemplo:
```
[2  3] · [1  0]  =  [2·1+3·2  2·0+3·1]  =  [8   3]
[1  4]   [2  1]     [1·1+4·2  1·0+4·1]     [9   4]
```

### Propiedades importantes:
- ❌ **NO conmutativo:** A·B ≠ B·A (en general)
- ✅ **Asociativo:** (A·B)·C = A·(B·C)
- ✅ **Distributivo:** A·(B+C) = A·B + A·C
- ✅ **Elemento neutro:** A·I = I·A = A

---

## 4. ¿Por qué un sistema de ecuaciones lineales se puede resolver usando matrices?

### Representación matricial:
Un sistema de ecuaciones lineales se puede escribir como: **Ax = b**

Donde:
- **A** = matriz de coeficientes (m×n)
- **x** = vector columna de incógnitas (n×1)
- **b** = vector columna de términos independientes (m×1)

### Ejemplo de conversión:

**Sistema de ecuaciones:**
```
2x + 3y = 5
4x - y = 3
```

**Forma matricial:**
```
[2   3] [x]   [5]
[4  -1] [y] = [3]
   A    x  =  b
```

### Ventajas de usar matrices:

1. **Representación compacta:** Un sistema grande se representa en una sola ecuación matricial

2. **Métodos de solución eficientes:**
   - **Inversión de matriz:** Si A⁻¹ existe, entonces x = A⁻¹·b
   - **Eliminación gaussiana:** Transformar [A|b] a forma escalonada
   - **Factorización LU:** Descomponer A en matrices triangulares
   - **Regla de Cramer:** Usando determinantes

3. **Análisis del sistema:**
   - Determinar si tiene solución única, infinitas soluciones o ninguna solución
   - Estudiar dependencia lineal de ecuaciones
   - Calcular rango de la matriz

4. **Aplicaciones computacionales:**
   - Algoritmos eficientes para sistemas grandes
   - Uso en programación y software matemático
   - Resolución de problemas de ingeniería y física

### Ejemplo práctico:
En el ejercicio de los ebanistas, usamos matrices para calcular ingresos totales:
- La matriz A representa la producción
- El vector X representa los precios
- El producto A·X da los ingresos totales

Esto evita hacer 3 cálculos separados y permite procesar toda la información de una vez.

---

## Organización visual sugerida para el mapa:

```
                          MATRICES
                             |
        _____________________|_____________________
        |           |            |                |
    DEFINICIÓN   TIPOS    PRODUCTO      SISTEMAS DE ECUACIONES
        |           |        MATRICES              |
    [Arreglo]   [Fila,   [Condiciones]    [Forma Ax=b]
    [m×n]       Columna,  [Cálculo c_ij]  [Métodos solución]
    [a_ij]      Cuadrada, [Propiedades]   [Ventajas]
                Identidad,
                Nula, etc.]
```

---

## Nota:
Este contenido está listo para ser transformado en un mapa conceptual visual usando herramientas como:
- Canva
- Lucidchart
- MindMeister
- CmapTools
- O dibujarlo a mano y escanearlo
