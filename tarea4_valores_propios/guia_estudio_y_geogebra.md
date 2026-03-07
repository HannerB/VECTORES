# Guía de Estudio y Verificación en GeoGebra — Valores Propios

## Conceptos clave para estudiar

### Definición central

Para una matriz cuadrada $A$ de orden $n$, el escalar $\lambda$ es **valor propio** y el vector no nulo $\mathbf{v}$ es el **vector propio** asociado si:

$$A\mathbf{v} = \lambda\mathbf{v} \iff (A - \lambda I)\mathbf{v} = \mathbf{0}$$

El sistema $(A - \lambda I)\mathbf{v} = \mathbf{0}$ tiene solución no trivial si y solo si la matriz $A - \lambda I$ es singular:

$$\det(A - \lambda I) = 0 \quad \text{(ecuación característica)}$$

### Polinomio característico

| Tamaño | Polinomio | Grado | Máx. valores propios |
|--------|-----------|-------|---------------------|
| 2×2 | $\lambda^2 - \text{tr}(A)\lambda + \det(A)$ | 2 | 2 |
| 3×3 | $-\lambda^3 + \text{tr}(A)\lambda^2 - \cdots + \det(A)$ | 3 | 3 |
| n×n | grado n | n | n |

### Propiedades importantes

- **Traza = suma de valores propios:** $\text{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n$
- **Determinante = producto de valores propios:** $\det(A) = \lambda_1 \cdot \lambda_2 \cdots \lambda_n$
- **Matrices semejantes** tienen los mismos valores propios
- **$A$ y $A^T$** tienen los mismos valores propios
- **Matrices simétricas** tienen solo valores propios reales

---

## Verificación en GeoGebra — Comandos

Abrir GeoGebra Clásico en https://www.geogebra.org/classic y activar la **vista CAS** (Ver → CAS).

### Ejercicio 2a — Verificar valores y vectores propios

**Afirmación i:** λ = 2 es valor propio de [[3,2],[3,8]]
```
A := {{3,2},{3,8}}
Det(A - 2 * {{1,0},{0,1}})
```
Resultado esperado: `0`

**Afirmación ii:** λ = −3 es valor propio de [[-1,4],[6,9]]
```
B := {{-1,4},{6,9}}
Det(B + 3 * {{1,0},{0,1}})
```
Resultado esperado: `0`

**Afirmación iii:** Verificar que [1,3]ᵀ es vector propio con λ = −2
```
C := {{1,-1},{6,-4}}
v := {1,3}
C * v
```
Resultado esperado: `{-2, -6}` que es igual a $-2 \cdot \{1, 3\}$

**Afirmación iv:** Verificar que [−1,1]ᵀ es vector propio con λ = 3
```
D := {{5,2},{3,6}}
w := {-1,1}
D * w
```
Resultado esperado: `{-3, 3}` que es igual a $3 \cdot \{-1, 1\}$

---

### Ejercicio 2b — Valores propios de matrices 2×2

```
M1 := {{4,1},{2,3}}
Eigenvalues(M1)
```
Resultado esperado: `{5, 2}` (dos valores propios distintos)

```
M2 := {{3,1},{0,3}}
Eigenvalues(M2)
```
Resultado esperado: `{3, 3}` (un valor propio repetido)

---

### Ejercicio 2c — Comparar valores propios de A y Aᵀ

```
A := {{3,1},{2,4}}
AT := Transpose(A)
Eigenvalues(A)
Eigenvalues(AT)
```
Ambos deben devolver `{5, 2}`.

Verificar polinomios idénticos:
```
CharacteristicPolynomial(A, x)
CharacteristicPolynomial(AT, x)
```
Ambos deben devolver `x^2 - 7x + 10`.

---

### Ejercicio 2d — Polinomio característico y valores propios

**Matriz i: [[2,7],[7,2]]**
```
A1 := {{2,7},{7,2}}
CharacteristicPolynomial(A1, x)
Eigenvalues(A1)
```
Resultado esperado: polinomio `x^2 - 4x - 45`, eigenvalues `{9, -5}`.

**Matriz ii: [[-4,-1],[6,1]]**
```
A2 := {{-4,-1},{6,1}}
CharacteristicPolynomial(A2, x)
Eigenvalues(A2)
```
Resultado esperado: polinomio `x^2 + 3x + 2`, eigenvalues `{-1, -2}`.

---

## Referencia de comandos GeoGebra

| Comando | Descripción |
|---------|-------------|
| `Eigenvalues(A)` | Calcula los valores propios de A |
| `Eigenvectors(A)` | Calcula los vectores propios de A |
| `CharacteristicPolynomial(A, x)` | Polinomio característico en variable x |
| `Det(A)` | Determinante de A |
| `Transpose(A)` | Transpuesta de A |
| `IdentityMatrix(n)` | Matriz identidad n×n |

---

## Recursos bibliográficos

- Grossman, S. I. (2019). *Álgebra lineal* (8.ª ed., pp. 529–559). McGraw-Hill.
- Hernández, M. (2018). Espacio propio. En *Álgebra lineal: ejercicios de práctica* (pp. 97–110). Grupo Editorial Patria.
- Alcazar, J. (2013). *Linear algebra notes* (pp. 69–92). Editorial Universidad de Alcalá.
