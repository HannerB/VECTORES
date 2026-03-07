# Ejercicios Resueltos — Vectores y Valores Propios

## Ejercicio 2a — Verdadero o Falso

### Afirmación i: λ = 2 es valor propio de A = [[3,2],[3,8]]

**Criterio:** λ es valor propio ⟺ det(A − λI) = 0.

$$A - 2I = \begin{bmatrix}3-2 & 2\\3 & 8-2\end{bmatrix} = \begin{bmatrix}1 & 2\\3 & 6\end{bmatrix}$$

$$\det(A-2I) = 1 \cdot 6 - 2 \cdot 3 = 6 - 6 = 0$$

**VERDADERO.** El determinante es 0, confirmando que λ = 2 es valor propio.

*Verificación adicional: los valores propios de A son las raíces de p(λ) = λ² − 11λ + 18 = (λ−2)(λ−9), entonces λ₁ = 2 y λ₂ = 9.*

---

### Afirmación ii: λ = −3 es valor propio de A = [[-1,4],[6,9]]

$$A - (-3)I = \begin{bmatrix}-1+3 & 4\\6 & 9+3\end{bmatrix} = \begin{bmatrix}2 & 4\\6 & 12\end{bmatrix}$$

$$\det(A+3I) = 2 \cdot 12 - 4 \cdot 6 = 24 - 24 = 0$$

**VERDADERO.** El determinante es 0, confirmando que λ = −3 es valor propio.

*p(λ) = λ² − 8λ − 33 = (λ+3)(λ−11), entonces λ₁ = −3 y λ₂ = 11.*

---

### Afirmación iii: v = [1,3]ᵀ es vector propio de A = [[1,-1],[6,-4]]

Se calcula Av:

$$A\mathbf{v} = \begin{bmatrix}1 & -1\\6 & -4\end{bmatrix}\begin{bmatrix}1\\3\end{bmatrix} = \begin{bmatrix}1-3\\6-12\end{bmatrix} = \begin{bmatrix}-2\\-6\end{bmatrix}$$

Se comprueba si Av = λv:

$$\begin{bmatrix}-2\\-6\end{bmatrix} = \lambda\begin{bmatrix}1\\3\end{bmatrix} \Rightarrow \lambda = -2 \text{ (de la componente 1)} \quad \lambda = -2 \text{ (de la componente 2)} \checkmark$$

**VERDADERO.** v = [1,3]ᵀ es vector propio con λ = −2.

---

### Afirmación iv: v = [-1,1]ᵀ es vector propio de A = [[5,2],[3,6]]

$$A\mathbf{v} = \begin{bmatrix}5 & 2\\3 & 6\end{bmatrix}\begin{bmatrix}-1\\1\end{bmatrix} = \begin{bmatrix}-5+2\\-3+6\end{bmatrix} = \begin{bmatrix}-3\\3\end{bmatrix}$$

Se comprueba si Av = λv:

$$\begin{bmatrix}-3\\3\end{bmatrix} = \lambda\begin{bmatrix}-1\\1\end{bmatrix} \Rightarrow \lambda = 3 \text{ (de la componente 1)} \quad \lambda = 3 \text{ (de la componente 2)} \checkmark$$

**VERDADERO.** v = [−1,1]ᵀ es vector propio con λ = 3.

---

## Ejercicio 2b — Máximo dos valores propios en una matriz 2×2

Para cualquier matriz $A = \begin{bmatrix}a&b\\c&d\end{bmatrix}$:

$$p(\lambda) = \det(A - \lambda I) = (a-\lambda)(d-\lambda) - bc = \lambda^2 - (a+d)\lambda + (ad-bc)$$

Este polinomio tiene **grado 2**, por lo que por el Teorema Fundamental del Álgebra tiene exactamente 2 raíces (contando multiplicidad, en ℂ). En los reales, puede tener 0, 1 o 2 raíces distintas → como máximo 2 valores propios distintos.

**Caso 1 — Dos valores propios distintos:**
$A = \begin{bmatrix}4&1\\2&3\end{bmatrix}$, $p(\lambda) = \lambda^2 - 7\lambda + 10 = (\lambda-5)(\lambda-2)$ → λ₁ = 5, λ₂ = 2.

**Caso 2 — Un valor propio (multiplicidad 2):**
$B = \begin{bmatrix}3&1\\0&3\end{bmatrix}$, $p(\lambda) = (\lambda-3)^2$ → solo λ = 3.

**Caso 3 — Sin valores propios reales:**
$C = \begin{bmatrix}0&-1\\1&0\end{bmatrix}$, $p(\lambda) = \lambda^2 + 1$ → no tiene raíces en ℝ.

---

## Ejercicio 2c — λ es valor propio de A ⟺ λ es valor propio de Aᵀ

**Demostración:**

Para toda matriz cuadrada M: det(M) = det(Mᵀ). Por tanto:

$$\det(A - \lambda I) = \det\!\left((A - \lambda I)^T\right) = \det(A^T - \lambda I^T) = \det(A^T - \lambda I)$$

Los polinomios característicos de A y Aᵀ son idénticos → tienen las mismas raíces → los mismos valores propios.

**Ejemplo numérico con $A = \begin{bmatrix}3&1\\2&4\end{bmatrix}$:**

$$p_A(\lambda) = (3-\lambda)(4-\lambda)-2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$$

$$A^T = \begin{bmatrix}3&2\\1&4\end{bmatrix} \Rightarrow p_{A^T}(\lambda) = (3-\lambda)(4-\lambda)-2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$$

Ambas matrices tienen λ₁ = 2 y λ₂ = 5. ∎

---

## Ejercicio 2d — Polinomio característico y valores propios reales

### Matriz i: A = [[2,7],[7,2]]

$$p(\lambda) = \det\begin{bmatrix}2-\lambda & 7\\7 & 2-\lambda\end{bmatrix} = (2-\lambda)^2 - 49$$

$$= \lambda^2 - 4\lambda + 4 - 49 = \boxed{\lambda^2 - 4\lambda - 45}$$

Factorización: $(\lambda - 9)(\lambda + 5) = 0$

**Valores propios: λ₁ = 9, λ₂ = −5**

*(Matriz simétrica → valores propios reales garantizados por el Teorema Espectral)*

---

### Matriz ii: A = [[-4,-1],[6,1]]

$$p(\lambda) = \det\begin{bmatrix}-4-\lambda & -1\\6 & 1-\lambda\end{bmatrix} = (-4-\lambda)(1-\lambda)-(-1)(6)$$

$$= (-4-\lambda)(1-\lambda) + 6 = -4 + 4\lambda - \lambda + \lambda^2 + 6$$

$$= \boxed{\lambda^2 + 3\lambda + 2}$$

Factorización: $(\lambda + 1)(\lambda + 2) = 0$

**Valores propios: λ₁ = −1, λ₂ = −2**
