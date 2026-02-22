# Ejercicios de Álgebra de Matrices - Resueltos

## Ejercicio 2a - Ebanistas (José, Pedro, Arturo)

### Datos del problema:
- **Matriz A** (producción enero):
  - José: 2 caoba, 0 cedro, 3 pino
  - Pedro: 1 caoba, 1 cedro, 4 pino
  - Arturo: 1 caoba, 2 cedro, 3 pino

- **Matriz B** (producción febrero):
  - José: 1 caoba, 2 cedro, 3 pino
  - Pedro: 2 caoba, 0 cedro, 3 pino
  - Arturo: 2 caoba, 1 cedro, 4 pino

- **Matriz X** (pago/unidad):
  - Caoba: $500
  - Cedro: $400
  - Pino: $100

### Matrices en notación matemática:

```
A = [2  0  3]    B = [1  2  3]    X = [500]
    [1  1  4]        [2  0  3]        [400]
    [1  2  3]        [2  1  4]        [100]
```

### a) Calcular A·X (Pago total enero por ebanista)

```
A·X = [2  0  3]   [500]   [2(500) + 0(400) + 3(100)]   [1300]
      [1  1  4] · [400] = [1(500) + 1(400) + 4(100)] = [1300]
      [1  2  3]   [100]   [1(500) + 2(400) + 3(100)]   [1600]
```

**Resultado:**
- José ganó $1,300 en enero
- Pedro ganó $1,300 en enero
- Arturo ganó $1,600 en enero

**Interpretación:** Representa el ingreso total de cada ebanista durante enero.

---

### b) Calcular B·X (Pago total febrero por ebanista)

```
B·X = [1  2  3]   [500]   [1(500) + 2(400) + 3(100)]   [1600]
      [2  0  3] · [400] = [2(500) + 0(400) + 3(100)] = [1300]
      [2  1  4]   [100]   [2(500) + 1(400) + 4(100)]   [1800]
```

**Resultado:**
- José ganó $1,600 en febrero
- Pedro ganó $1,300 en febrero
- Arturo ganó $1,800 en febrero

**Interpretación:** Representa el ingreso total de cada ebanista durante febrero.

---

### c) Calcular A + X

**OPERACIÓN INVÁLIDA**

No se pueden sumar matrices de dimensiones diferentes:
- A es 3×3
- X es 3×1

Para sumar matrices deben tener las mismas dimensiones.

---

### d) Calcular (A + B)·X (Pago total por producción combinada)

Primero: A + B

```
A + B = [2  0  3]   [1  2  3]   [3  2  6]
        [1  1  4] + [2  0  3] = [3  1  7]
        [1  2  3]   [2  1  4]   [3  3  7]
```

Luego: (A+B)·X

```
(A+B)·X = [3  2  6]   [500]   [3(500) + 2(400) + 6(100)]   [2900]
          [3  1  7] · [400] = [3(500) + 1(400) + 7(100)] = [2600]
          [3  3  7]   [100]   [3(500) + 3(400) + 7(100)]   [3400]
```

**Resultado:**
- José ganó $2,900 en total (enero + febrero)
- Pedro ganó $2,600 en total (enero + febrero)
- Arturo ganó $3,400 en total (enero + febrero)

**Interpretación:** Representa el ingreso total de cada ebanista durante los dos meses combinados.

---
---

## Ejercicio 2b - Operaciones con matrices A y B

### Matrices dadas:

```
A = [3  -3   7]      B = [-9   5  -8]
    [2   6  -2]          [ 3  -7   1]
    [4   2   5]          [-1   2   6]
```

---

### a) Calcular A² + B²

**Paso 1: Calcular A² = A·A**

```
A² = [3  -3   7]   [3  -3   7]
     [2   6  -2] · [2   6  -2]
     [4   2   5]   [4   2   5]
```

Fila 1:
- (1,1): 3(3) + (-3)(2) + 7(4) = 9 - 6 + 28 = 31
- (1,2): 3(-3) + (-3)(6) + 7(2) = -9 - 18 + 14 = -13
- (1,3): 3(7) + (-3)(-2) + 7(5) = 21 + 6 + 35 = 62

Fila 2:
- (2,1): 2(3) + 6(2) + (-2)(4) = 6 + 12 - 8 = 10
- (2,2): 2(-3) + 6(6) + (-2)(2) = -6 + 36 - 4 = 26
- (2,3): 2(7) + 6(-2) + (-2)(5) = 14 - 12 - 10 = -8

Fila 3:
- (3,1): 4(3) + 2(2) + 5(4) = 12 + 4 + 20 = 36
- (3,2): 4(-3) + 2(6) + 5(2) = -12 + 12 + 10 = 10
- (3,3): 4(7) + 2(-2) + 5(5) = 28 - 4 + 25 = 49

```
A² = [31  -13   62]
     [10   26   -8]
     [36   10   49]
```

**Paso 2: Calcular B² = B·B**

```
B² = [-9   5  -8]   [-9   5  -8]
     [ 3  -7   1] · [ 3  -7   1]
     [-1   2   6]   [-1   2   6]
```

Fila 1:
- (1,1): (-9)(-9) + 5(3) + (-8)(-1) = 81 + 15 + 8 = 104
- (1,2): (-9)(5) + 5(-7) + (-8)(2) = -45 - 35 - 16 = -96
- (1,3): (-9)(-8) + 5(1) + (-8)(6) = 72 + 5 - 48 = 29

Fila 2:
- (2,1): 3(-9) + (-7)(3) + 1(-1) = -27 - 21 - 1 = -49
- (2,2): 3(5) + (-7)(-7) + 1(2) = 15 + 49 + 2 = 66
- (2,3): 3(-8) + (-7)(1) + 1(6) = -24 - 7 + 6 = -25

Fila 3:
- (3,1): (-1)(-9) + 2(3) + 6(-1) = 9 + 6 - 6 = 9
- (3,2): (-1)(5) + 2(-7) + 6(2) = -5 - 14 + 12 = -7
- (3,3): (-1)(-8) + 2(1) + 6(6) = 8 + 2 + 36 = 46

```
B² = [104  -96   29]
     [-49   66  -25]
     [  9   -7   46]
```

**Paso 3: A² + B²**

```
A² + B² = [31  -13   62]   [104  -96   29]   [135  -109   91]
          [10   26   -8] + [-49   66  -25] = [-39    92  -33]
          [36   10   49]   [  9   -7   46]   [ 45     3   95]
```

**Resultado final:**
```
A² + B² = [135  -109   91]
          [-39    92  -33]
          [ 45     3   95]
```

---

### b) Calcular 3A + BA

**Paso 1: Calcular 3A**

```
3A = 3 · [3  -3   7]   [9  -9  21]
         [2   6  -2] = [6  18  -6]
         [4   2   5]   [12  6  15]
```

**Paso 2: Calcular BA = B·A**

```
BA = [-9   5  -8]   [3  -3   7]
     [ 3  -7   1] · [2   6  -2]
     [-1   2   6]   [4   2   5]
```

Fila 1:
- (1,1): (-9)(3) + 5(2) + (-8)(4) = -27 + 10 - 32 = -49
- (1,2): (-9)(-3) + 5(6) + (-8)(2) = 27 + 30 - 16 = 41
- (1,3): (-9)(7) + 5(-2) + (-8)(5) = -63 - 10 - 40 = -113

Fila 2:
- (2,1): 3(3) + (-7)(2) + 1(4) = 9 - 14 + 4 = -1
- (2,2): 3(-3) + (-7)(6) + 1(2) = -9 - 42 + 2 = -49
- (2,3): 3(7) + (-7)(-2) + 1(5) = 21 + 14 + 5 = 40

Fila 3:
- (3,1): (-1)(3) + 2(2) + 6(4) = -3 + 4 + 24 = 25
- (3,2): (-1)(-3) + 2(6) + 6(2) = 3 + 12 + 12 = 27
- (3,3): (-1)(7) + 2(-2) + 6(5) = -7 - 4 + 30 = 19

```
BA = [-49   41  -113]
     [ -1  -49    40]
     [ 25   27    19]
```

**Paso 3: 3A + BA**

```
3A + BA = [9  -9  21]   [-49   41  -113]   [-40   32  -92]
          [6  18  -6] + [ -1  -49    40] = [  5  -31   34]
          [12  6  15]   [ 25   27    19]   [ 37   33   34]
```

**Resultado final:**
```
3A + BA = [-40   32  -92]
          [  5  -31   34]
          [ 37   33   34]
```

---

### c) Calcular A² - 5B

**Paso 1: Calcular 5B**

```
5B = 5 · [-9   5  -8]   [-45   25  -40]
         [ 3  -7   1] = [ 15  -35    5]
         [-1   2   6]   [ -5   10   30]
```

**Paso 2: A² - 5B** (usando A² calculado antes)

```
A² - 5B = [31  -13   62]   [-45   25  -40]   [76  -38  102]
          [10   26   -8] - [ 15  -35    5] = [-5   61  -13]
          [36   10   49]   [ -5   10   30]   [41    0   19]
```

**Resultado final:**
```
A² - 5B = [76  -38  102]
          [-5   61  -13]
          [41    0   19]
```

---

### d) Calcular A + A² + B + B²

**Paso 1: A + A²**

```
A + A² = [3  -3   7]   [31  -13   62]   [34  -16   69]
         [2   6  -2] + [10   26   -8] = [12   32  -10]
         [4   2   5]   [36   10   49]   [40   12   54]
```

**Paso 2: B + B²**

```
B + B² = [-9   5  -8]   [104  -96   29]   [95  -91   21]
         [ 3  -7   1] + [-49   66  -25] = [-46  59  -24]
         [-1   2   6]   [  9   -7   46]   [ 8   -5   52]
```

**Paso 3: (A + A²) + (B + B²)**

```
Total = [34  -16   69]   [95  -91   21]   [129  -107   90]
        [12   32  -10] + [-46  59  -24] = [-34    91  -34]
        [40   12   54]   [ 8   -5   52]   [ 48     7  106]
```

**Resultado final:**
```
A + A² + B + B² = [129  -107   90]
                  [-34    91  -34]
                  [ 48     7  106]
```

---
---

## Ejercicio 2c - Compañía de juguetes

### Datos del problema:

**Matriz A** (ventas 2003 en miles de dólares):
```
                 Ciudad1  Ciudad2  Ciudad3
Acción             400      350      150
Educativos         450      280      850
```

**Matriz B** (ventas 2005 en miles de dólares):
```
                 Ciudad1  Ciudad2  Ciudad3
Acción             380      330      220
Educativos         460      320      750
```

**Enunciado:** En 2006 la compañía dobla las ventas de 2005. ¿Cuál es el cambio en ventas entre 2003 y 2006?

---

### Solución:

**Paso 1: Calcular ventas 2006**

Ventas 2006 = 2B

```
2B = 2 · [380  330  220]   [760  660  440]
         [460  320  750] = [920  640  1500]
```

**Paso 2: Calcular cambio = Ventas 2006 - Ventas 2003**

```
Cambio = 2B - A = [760  660  440]   [400  350  150]   [360  310  290]
                  [920  640  1500] - [450  280  850] = [470  360  650]
```

---

### Resultado e interpretación:

**Cambio en ventas (en miles de dólares):**

```
                 Ciudad1  Ciudad2  Ciudad3
Acción            +360     +310     +290
Educativos        +470     +360     +650
```

**Interpretación:**
- **Ciudad 1:** Las ventas de juguetes de acción aumentaron $360,000 y los educativos $470,000
- **Ciudad 2:** Las ventas de juguetes de acción aumentaron $310,000 y los educativos $360,000
- **Ciudad 3:** Las ventas de juguetes de acción aumentaron $290,000 y los educativos $650,000

Entre 2003 y 2006 hubo crecimiento en todas las categorías y ciudades.

---
---

## Ejercicio 2d - Costos de producción por estación

### Datos del problema:

**TABLA I - Costos de producción por artículo (en dólares):**

```
                   A     B     C
Materiales       0.20  0.40  0.25
Mano de obra     0.40  0.50  0.35
Otros gastos     0.20  0.30  0.25
```

**TABLA II - Cantidad de artículos producidos por estación:**

```
         Verano  Otoño  Invierno  Primavera
A         5000   5500    5500      5000
B         3000   3600    3400      3200
C         6800   7200    7000      7000
```

**Objetivo:** Construir matriz de **costos totales por estación** para cada categoría de costo.

---

### Solución:

La matriz de costos totales se obtiene multiplicando:

**Costos Totales = Tabla I × Tabla II**

```
              [5000  5500  5500  5000]
[0.20 0.40 0.25]   [3000  3600  3400  3200]
[0.40 0.50 0.35] · [6800  7200  7000  7000]
[0.20 0.30 0.25]
```

---

### Cálculos detallados:

**Fila 1: Costos de Materiales**

- Verano: 0.20(5000) + 0.40(3000) + 0.25(6800) = 1000 + 1200 + 1700 = **3900**
- Otoño: 0.20(5500) + 0.40(3600) + 0.25(7200) = 1100 + 1440 + 1800 = **4340**
- Invierno: 0.20(5500) + 0.40(3400) + 0.25(7000) = 1100 + 1360 + 1750 = **4210**
- Primavera: 0.20(5000) + 0.40(3200) + 0.25(7000) = 1000 + 1280 + 1750 = **4030**

**Fila 2: Costos de Mano de Obra**

- Verano: 0.40(5000) + 0.50(3000) + 0.35(6800) = 2000 + 1500 + 2380 = **5880**
- Otoño: 0.40(5500) + 0.50(3600) + 0.35(7200) = 2200 + 1800 + 2520 = **6520**
- Invierno: 0.40(5500) + 0.50(3400) + 0.35(7000) = 2200 + 1700 + 2450 = **6350**
- Primavera: 0.40(5000) + 0.50(3200) + 0.35(7000) = 2000 + 1600 + 2450 = **6050**

**Fila 3: Otros Gastos**

- Verano: 0.20(5000) + 0.30(3000) + 0.25(6800) = 1000 + 900 + 1700 = **3600**
- Otoño: 0.20(5500) + 0.30(3600) + 0.25(7200) = 1100 + 1080 + 1800 = **3980**
- Invierno: 0.20(5500) + 0.30(3400) + 0.25(7000) = 1100 + 1020 + 1750 = **3870**
- Primavera: 0.20(5000) + 0.30(3200) + 0.25(7000) = 1000 + 960 + 1750 = **3710**

---

### MATRIZ FINAL - Costos totales por estación (en dólares):

```
                  Verano   Otoño   Invierno  Primavera
Materiales         3900    4340     4210      4030
Mano de obra       5880    6520     6350      6050
Otros gastos       3600    3980     3870      3710
───────────────────────────────────────────────────────
TOTALES           13380   14840    14430     13790
```

**Interpretación:** Esta matriz muestra el gasto total de la compañía en cada categoría de costo para cada estación del año. Por ejemplo, en otoño se gastaron $6,520 en mano de obra total.

---

## Fin del documento

**Nota:** Estos ejercicios están listos para ser verificados. Por favor revisa especialmente:
- Las multiplicaciones de matrices en el ejercicio 2b
- Los cálculos del ejercicio 2d

Si encuentras algún error, indícalo para corregirlo antes de generar el documento final.
