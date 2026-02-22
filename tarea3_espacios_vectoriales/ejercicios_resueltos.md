# Ejercicios de Espacios Vectoriales - Resueltos

## Ejercicio 2a — Verdadero o Falso (con justificación)

---

### Afirmación 1:

> "El conjunto de vectores (x, y) en ℝ² con y = −3x + 1 es un espacio vectorial."

**Respuesta: FALSO**

**Justificación:**

Para que un subconjunto S de ℝ² sea un espacio vectorial (subespacio), debe contener al vector cero (0, 0).

Verifiquemos si (0, 0) pertenece a S:

Si x = 0, entonces y = −3(0) + 1 = 1 ≠ 0

Por lo tanto, (0, 0) ∉ S, lo que significa que S **no contiene al vector cero**.

**Ejemplo concreto:**

El vector (0, 1) está en S (pues y = −3(0) + 1 = 1 ✓).

Si multiplicamos por el escalar c = 0:

c · (0, 1) = (0, 0)

Pero (0, 0) no está en S (pues 0 ≠ −3(0) + 1 = 1).

Esto significa que S **no es cerrado bajo multiplicación por escalar**.

**Además, no es cerrado bajo la suma:**

Tomemos dos vectores en S:
- u = (0, 1) → y = −3(0) + 1 = 1 ✓
- v = (1, −2) → y = −3(1) + 1 = −2 ✓

Su suma: u + v = (0 + 1, 1 + (−2)) = (1, −1)

¿Está (1, −1) en S? Verificamos: y = −3(1) + 1 = −2 ≠ −1

No cumple la condición, entonces u + v ∉ S.

**Conclusión:** S no es un espacio vectorial porque:
1. No contiene al vector cero
2. No es cerrado bajo la suma
3. No es cerrado bajo multiplicación por escalar

**Nota geométrica:** El conjunto y = −3x + 1 es una recta en ℝ² que **no pasa por el origen** (tiene intercepto en y = 1). Solo las rectas que pasan por el origen son subespacios de ℝ².

---

### Afirmación 2:

> "El conjunto de matrices invertibles de 5×5 forma un espacio vectorial con '+' definido como en la suma de matrices ordinaria."

**Respuesta: FALSO**

**Justificación:**

Sea GL(5, ℝ) el conjunto de todas las matrices invertibles de 5×5.

**Razón 1: No contiene al elemento neutro de la suma.**

El elemento neutro de la suma de matrices es la **matriz cero** (0₅ₓ₅, la matriz 5×5 con todos los elementos iguales a cero).

La matriz cero **NO es invertible** (su determinante es 0), por lo tanto 0₅ₓ₅ ∉ GL(5, ℝ).

**Razón 2: No es cerrado bajo la suma.**

**Ejemplo concreto con matrices 2×2** (el argumento se extiende a 5×5):

Sea:
```
A = [1  0]     B = [-1   0]
    [0  1]         [ 0  -1]
```

A es invertible (det(A) = 1 ≠ 0) ✓
B es invertible (det(B) = 1 ≠ 0) ✓

Pero:
```
A + B = [1+(-1)   0+0  ]   [0  0]
        [0+0      1+(-1)] = [0  0]
```

A + B es la matriz cero, que **NO es invertible** (det = 0).

Para el caso 5×5, tomamos A = I₅ (identidad 5×5) y B = −I₅:

A + B = I₅ + (−I₅) = 0₅ₓ₅ (matriz cero)

La matriz cero no es invertible, así que A + B ∉ GL(5, ℝ).

**Razón 3: No es cerrado bajo multiplicación escalar.**

Si A es invertible y c = 0, entonces c·A = 0·A = 0₅ₓ₅ (matriz cero), que no es invertible.

**Conclusión:** El conjunto de matrices invertibles de 5×5 **no forma un espacio vectorial** con la suma de matrices ordinaria porque:
1. No contiene a la matriz cero (elemento neutro de la suma)
2. No es cerrado bajo la suma
3. No es cerrado bajo multiplicación escalar

---
---

## Ejercicio 2b — Determinar si S es subespacio vectorial de ℝ³

Para cada caso, debemos verificar las **3 condiciones de subespacio**:
1. El vector cero (0, 0, 0) ∈ S
2. Cerradura bajo la suma: si u, v ∈ S → u + v ∈ S
3. Cerradura bajo multiplicación escalar: si c ∈ ℝ y v ∈ S → c·v ∈ S

---

### Inciso i: S = {x̄ ∈ ℝ³ | x + y + z = 0}

**Resultado: SÍ es subespacio vectorial de ℝ³**

**Condición 1: ¿(0, 0, 0) ∈ S?**

Verificamos: 0 + 0 + 0 = 0 ✓

Sí, el vector cero pertenece a S.

**Condición 2: Cerradura bajo la suma**

Sean u = (x₁, y₁, z₁) y v = (x₂, y₂, z₂) dos vectores en S.

Entonces: x₁ + y₁ + z₁ = 0 y x₂ + y₂ + z₂ = 0

Su suma: u + v = (x₁ + x₂, y₁ + y₂, z₁ + z₂)

Verificamos si u + v ∈ S:

(x₁ + x₂) + (y₁ + y₂) + (z₁ + z₂) = (x₁ + y₁ + z₁) + (x₂ + y₂ + z₂) = 0 + 0 = 0 ✓

**Condición 3: Cerradura bajo multiplicación escalar**

Sea c ∈ ℝ y v = (x₁, y₁, z₁) ∈ S, entonces x₁ + y₁ + z₁ = 0.

c·v = (cx₁, cy₁, cz₁)

Verificamos: cx₁ + cy₁ + cz₁ = c(x₁ + y₁ + z₁) = c(0) = 0 ✓

**Las 3 condiciones se cumplen → S es subespacio vectorial de ℝ³**

**Interpretación geométrica:** S es un plano que pasa por el origen en ℝ³ con ecuación x + y + z = 0. Su vector normal es n = (1, 1, 1).

**Base de S:**

De x + y + z = 0 despejamos z = −x − y. Un vector genérico de S es:

(x, y, −x − y) = x(1, 0, −1) + y(0, 1, −1)

Base de S: {(1, 0, −1), (0, 1, −1)}

Dimensión de S: 2

---

### Inciso ii: S = {x̄ ∈ ℝ³ | x = y = z}

**Resultado: SÍ es subespacio vectorial de ℝ³**

**Condición 1: ¿(0, 0, 0) ∈ S?**

Verificamos: 0 = 0 = 0 ✓

Sí, el vector cero pertenece a S.

**Condición 2: Cerradura bajo la suma**

Sean u = (a, a, a) y v = (b, b, b) dos vectores en S (donde x = y = z).

u + v = (a + b, a + b, a + b)

Las tres componentes son iguales: a + b = a + b = a + b ✓

Entonces u + v ∈ S.

**Condición 3: Cerradura bajo multiplicación escalar**

Sea c ∈ ℝ y v = (a, a, a) ∈ S.

c·v = (ca, ca, ca)

Las tres componentes son iguales: ca = ca = ca ✓

Entonces c·v ∈ S.

**Las 3 condiciones se cumplen → S es subespacio vectorial de ℝ³**

**Interpretación geométrica:** S es la recta que pasa por el origen en la dirección (1, 1, 1). Todos los puntos de S son de la forma t(1, 1, 1) donde t ∈ ℝ.

**Base de S:**

Todo vector en S tiene la forma (t, t, t) = t(1, 1, 1).

Base de S: {(1, 1, 1)}

Dimensión de S: 1

---

### Inciso iii: S = {x̄ ∈ ℝ³ | y = 2x; z = 3x}

**Resultado: SÍ es subespacio vectorial de ℝ³**

**Condición 1: ¿(0, 0, 0) ∈ S?**

Verificamos: y = 2(0) = 0 ✓ y z = 3(0) = 0 ✓

Sí, el vector cero pertenece a S.

**Condición 2: Cerradura bajo la suma**

Sean u = (x₁, 2x₁, 3x₁) y v = (x₂, 2x₂, 3x₂) dos vectores en S.

u + v = (x₁ + x₂, 2x₁ + 2x₂, 3x₁ + 3x₂) = (x₁ + x₂, 2(x₁ + x₂), 3(x₁ + x₂))

Sea x₃ = x₁ + x₂. Entonces u + v = (x₃, 2x₃, 3x₃), que cumple y = 2x y z = 3x ✓

Entonces u + v ∈ S.

**Condición 3: Cerradura bajo multiplicación escalar**

Sea c ∈ ℝ y v = (x₁, 2x₁, 3x₁) ∈ S.

c·v = (cx₁, 2cx₁, 3cx₁) = (cx₁, 2(cx₁), 3(cx₁))

Sea x₃ = cx₁. Entonces c·v = (x₃, 2x₃, 3x₃), que cumple y = 2x y z = 3x ✓

Entonces c·v ∈ S.

**Las 3 condiciones se cumplen → S es subespacio vectorial de ℝ³**

**Interpretación geométrica:** S es una recta que pasa por el origen en la dirección (1, 2, 3). Todos los puntos de S son de la forma t(1, 2, 3) donde t ∈ ℝ.

**Base de S:**

Todo vector en S tiene la forma (x, 2x, 3x) = x(1, 2, 3).

Base de S: {(1, 2, 3)}

Dimensión de S: 1

---
---

## Ejercicio 2c — Independencia lineal de matrices en M₂₂

Para determinar si un conjunto de matrices en M₂₂ es linealmente independiente, planteamos:

c₁A₁ + c₂A₂ + ... + cₙAₙ = 0₂ₓ₂

y resolvemos el sistema. Si la **única solución** es c₁ = c₂ = ... = cₙ = 0, son **linealmente independientes**. Si hay soluciones no triviales, son **linealmente dependientes**.

---

### Conjunto i:

```
A₁ = [-1   1]    A₂ = [3  0]    A₃ = [0   2]    A₄ = [-1  0]
     [-2   2]         [1  1]         [-3  1]          [-1  7]
```

**Planteamiento:**

c₁A₁ + c₂A₂ + c₃A₃ + c₄A₄ = 0₂ₓ₂

```
c₁[-1   1] + c₂[3  0] + c₃[0   2] + c₄[-1  0] = [0  0]
  [-2   2]    [1  1]    [-3  1]      [-1  7]   [0  0]
```

Igualando entrada por entrada:

- Posición (1,1): −c₁ + 3c₂ + 0c₃ − c₄ = 0
- Posición (1,2): c₁ + 0c₂ + 2c₃ + 0c₄ = 0
- Posición (2,1): −2c₁ + c₂ − 3c₃ − c₄ = 0
- Posición (2,2): 2c₁ + c₂ + c₃ + 7c₄ = 0

**Sistema de ecuaciones:**

```
  −c₁ + 3c₂       − c₄ = 0    ... (1)
   c₁      + 2c₃       = 0    ... (2)
 −2c₁ +  c₂ − 3c₃ − c₄ = 0    ... (3)
  2c₁ +  c₂ +  c₃ + 7c₄ = 0    ... (4)
```

**Matriz aumentada:**

```
[-1   3   0  -1 | 0]
[ 1   0   2   0 | 0]
[-2   1  -3  -1 | 0]
[ 2   1   1   7 | 0]
```

**Paso 1:** Multiplicar fila 1 por −1 para que el pivote sea 1:

```
[ 1  -3   0   1 | 0]   (F₁ ← −F₁)
[ 1   0   2   0 | 0]
[-2   1  -3  -1 | 0]
[ 2   1   1   7 | 0]
```

**Paso 2:** Eliminar c₁ de las filas 2, 3 y 4:

F₂ ← F₂ − F₁:
```
[ 1  -3   0   1 | 0]
[ 0   3   2  -1 | 0]
[-2   1  -3  -1 | 0]
[ 2   1   1   7 | 0]
```

F₃ ← F₃ + 2F₁:
```
[ 1  -3   0   1 | 0]
[ 0   3   2  -1 | 0]
[ 0  -5  -3   1 | 0]
[ 2   1   1   7 | 0]
```

F₄ ← F₄ − 2F₁:
```
[ 1  -3   0   1 | 0]
[ 0   3   2  -1 | 0]
[ 0  -5  -3   1 | 0]
[ 0   7   1   5 | 0]
```

**Paso 3:** Usar F₂ para eliminar c₂ de F₃ y F₄:

F₃ ← F₃ + (5/3)F₂:
- F₃: (0, −5 + 5, −3 + 10/3, 1 − 5/3) = (0, 0, −9/3 + 10/3, 3/3 − 5/3) = (0, 0, 1/3, −2/3)

```
[ 1  -3    0     1   | 0]
[ 0   3    2    -1   | 0]
[ 0   0   1/3  -2/3  | 0]
[ 0   7    1     5   | 0]
```

F₄ ← F₄ − (7/3)F₂:
- F₄: (0, 7 − 7, 1 − 14/3, 5 + 7/3) = (0, 0, 3/3 − 14/3, 15/3 + 7/3) = (0, 0, −11/3, 22/3)

```
[ 1  -3    0     1   | 0]
[ 0   3    2    -1   | 0]
[ 0   0   1/3  -2/3  | 0]
[ 0   0  -11/3  22/3 | 0]
```

**Paso 4:** Multiplicar F₃ por 3:

```
[ 1  -3    0     1   | 0]
[ 0   3    2    -1   | 0]
[ 0   0    1    -2   | 0]
[ 0   0  -11/3  22/3 | 0]
```

**Paso 5:** F₄ ← F₄ + (11/3)F₃:
- F₄: (0, 0, −11/3 + 11/3, 22/3 + (11/3)(−2)) = (0, 0, 0, 22/3 − 22/3) = (0, 0, 0, 0)

```
[ 1  -3   0    1  | 0]
[ 0   3   2   -1  | 0]
[ 0   0   1   -2  | 0]
[ 0   0   0    0  | 0]
```

**Análisis:**

Tenemos 4 incógnitas y solo 3 ecuaciones independientes (rango = 3). El sistema tiene **infinitas soluciones** con un parámetro libre.

Sea c₄ = t (parámetro libre).

De F₃: c₃ − 2t = 0 → c₃ = 2t
De F₂: 3c₂ + 2(2t) − t = 0 → 3c₂ + 3t = 0 → c₂ = −t
De F₁: c₁ − 3(−t) + t = 0 → c₁ + 4t = 0 → c₁ = −4t

**Solución:** (c₁, c₂, c₃, c₄) = t(−4, −1, 2, 1) para cualquier t ∈ ℝ

**Conclusión: Las matrices son LINEALMENTE DEPENDIENTES**

**Expresar una matriz como combinación lineal de las otras:**

Con t = 1: c₁ = −4, c₂ = −1, c₃ = 2, c₄ = 1

−4A₁ − A₂ + 2A₃ + A₄ = 0

Despejando A₄:

A₄ = 4A₁ + A₂ − 2A₃

**Verificación:**

```
4[-1   1] + [3  0] − 2[0   2] = [-4  4] + [3  0] + [ 0  -4] = [-1  0]  ✓
 [-2   2]   [1  1]    [-3  1]   [-8  8]   [1  1]   [ 6  -2]   [-1  7]  ✓
```

**Por lo tanto: A₄ = 4A₁ + A₂ − 2A₃**

---

### Conjunto ii:

```
A₁ = [1  1]    A₂ = [1  0]    A₃ = [0  1]    A₄ = [1  1]
     [0  1]         [1  1]         [1  1]         [1  0]
```

**Planteamiento:**

c₁A₁ + c₂A₂ + c₃A₃ + c₄A₄ = 0₂ₓ₂

Igualando entrada por entrada:

- Posición (1,1): c₁ + c₂ + 0c₃ + c₄ = 0
- Posición (1,2): c₁ + 0c₂ + c₃ + c₄ = 0
- Posición (2,1): 0c₁ + c₂ + c₃ + c₄ = 0
- Posición (2,2): c₁ + c₂ + c₃ + 0c₄ = 0

**Sistema de ecuaciones:**

```
c₁ + c₂      + c₄ = 0    ... (1)
c₁      + c₃ + c₄ = 0    ... (2)
     c₂ + c₃ + c₄ = 0    ... (3)
c₁ + c₂ + c₃      = 0    ... (4)
```

**Matriz aumentada:**

```
[1  1  0  1 | 0]
[1  0  1  1 | 0]
[0  1  1  1 | 0]
[1  1  1  0 | 0]
```

**Paso 1:** Eliminar c₁ de F₂ y F₄:

F₂ ← F₂ − F₁:
```
[1  1  0  1 | 0]
[0 -1  1  0 | 0]
[0  1  1  1 | 0]
[1  1  1  0 | 0]
```

F₄ ← F₄ − F₁:
```
[1  1   0   1 | 0]
[0 -1   1   0 | 0]
[0  1   1   1 | 0]
[0  0   1  -1 | 0]
```

**Paso 2:** F₃ ← F₃ + F₂:

```
[1  1   0   1 | 0]
[0 -1   1   0 | 0]
[0  0   2   1 | 0]
[0  0   1  -1 | 0]
```

**Paso 3:** F₄ ← F₄ − (1/2)F₃:

```
[1  1   0    1   | 0]
[0 -1   1    0   | 0]
[0  0   2    1   | 0]
[0  0   0   -3/2 | 0]
```

**Análisis:**

Tenemos 4 pivotes y 4 incógnitas → rango = 4.

De F₄: −(3/2)c₄ = 0 → **c₄ = 0**
De F₃: 2c₃ + 1(0) = 0 → **c₃ = 0**
De F₂: −c₂ + 0 = 0 → **c₂ = 0**
De F₁: c₁ + 0 + 0 = 0 → **c₁ = 0**

**La única solución es la trivial: c₁ = c₂ = c₃ = c₄ = 0**

**Conclusión: Las matrices son LINEALMENTE INDEPENDIENTES**

**Nota:** Como dim(M₂₂) = 4 y tenemos exactamente 4 matrices linealmente independientes, este conjunto forma una **base** de M₂₂.

---

## Fin del documento

**Nota:** Estos ejercicios están listos para ser verificados en GeoGebra. Por favor revisa especialmente:
- Los cálculos de reducción por filas en el ejercicio 2c
- Las verificaciones de cerradura en el ejercicio 2b
