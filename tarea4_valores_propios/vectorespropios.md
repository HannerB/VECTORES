**Introducción**

Los valores propios y vectores propios constituyen uno de los conceptos más fundamentales del álgebra lineal y tienen aplicaciones directas en ingeniería de software, ciencias de datos, procesamiento de señales y aprendizaje automático. Un valor propio (o valor característico) es un escalar $\lambda$ tal que, al multiplicar una matriz $A$ por cierto vector no nulo $\mathbf{v}$, el resultado es simplemente ese mismo vector escalado: $A\mathbf{v} = \lambda\mathbf{v}$. Los vectores que satisfacen esta condición se denominan vectores propios.

En este reporte se aborda el estudio de los valores y vectores propios a través de un mapa conceptual que resume los conceptos clave, seguido de cuatro ejercicios resueltos con su respectiva verificación en GeoGebra. Se incluye también un enlace al video explicativo que detalla el procedimiento paso a paso.

**Desarrollo de la actividad**

**Mapa conceptual**

Se presenta a continuación el mapa conceptual que responde las preguntas orientadoras sobre valores propios, vectores propios, método de determinación, matrices semejantes y matrices simétricas. El mapa fue elaborado integrando los conceptos de Grossman (2019) y Hernández (2018).

*(Insertar imagen del mapa conceptual aquí)*

**Ejercicios resueltos**

A continuación se presenta la solución detallada de cada uno de los ejercicios planteados, con justificación matemática completa.

## Ejercicio 2a — Verdadero o Falso

**Afirmación i — $\lambda = 2$ es valor propio de $A = \begin{bmatrix} 3 & 2 \\ 3 & 8 \end{bmatrix}$**

Un escalar $\lambda$ es valor propio de $A$ si y solo si $\det(A - \lambda I) = 0$.

$$A - 2I = \begin{bmatrix} 3-2 & 2 \\ 3 & 8-2 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}$$

$$\det(A - 2I) = (1)(6) - (2)(3) = 6 - 6 = 0 \checkmark$$

**Resultado: VERDADERO.** El determinante es cero, por lo tanto $\lambda = 2$ sí es valor propio de $A$.

---

**Afirmación ii — $\lambda = -3$ es valor propio de $A = \begin{bmatrix} -1 & 4 \\ 6 & 9 \end{bmatrix}$**

$$A - (-3)I = A + 3I = \begin{bmatrix} -1+3 & 4 \\ 6 & 9+3 \end{bmatrix} = \begin{bmatrix} 2 & 4 \\ 6 & 12 \end{bmatrix}$$

$$\det(A + 3I) = (2)(12) - (4)(6) = 24 - 24 = 0 \checkmark$$

**Resultado: VERDADERO.** El determinante es cero, por lo tanto $\lambda = -3$ sí es valor propio de $A$.

---

**Afirmación iii — El vector $\mathbf{v} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$ es vector propio de $A = \begin{bmatrix} 1 & -1 \\ 6 & -4 \end{bmatrix}$**

Un vector $\mathbf{v} \neq \mathbf{0}$ es vector propio de $A$ si existe un escalar $\lambda$ tal que $A\mathbf{v} = \lambda\mathbf{v}$.

Se calcula $A\mathbf{v}$:

$$A\mathbf{v} = \begin{bmatrix} 1 & -1 \\ 6 & -4 \end{bmatrix} \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} (1)(1)+(-1)(3) \\ (6)(1)+(-4)(3) \end{bmatrix} = \begin{bmatrix} 1-3 \\ 6-12 \end{bmatrix} = \begin{bmatrix} -2 \\ -6 \end{bmatrix}$$

Se verifica si $A\mathbf{v} = \lambda\mathbf{v}$:

$$\begin{bmatrix} -2 \\ -6 \end{bmatrix} = \lambda \begin{bmatrix} 1 \\ 3 \end{bmatrix} \implies \lambda = -2$$

Comprobación: $-2 \cdot \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} -2 \\ -6 \end{bmatrix}$ ✓

**Resultado: VERDADERO.** El vector $\begin{bmatrix} 1 \\ 3 \end{bmatrix}$ es vector propio de $A$ con valor propio $\lambda = -2$.

---

**Afirmación iv — El vector $\mathbf{v} = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$ es vector propio de $A = \begin{bmatrix} 5 & 2 \\ 3 & 6 \end{bmatrix}$**

Se calcula $A\mathbf{v}$:

$$A\mathbf{v} = \begin{bmatrix} 5 & 2 \\ 3 & 6 \end{bmatrix} \begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} (5)(-1)+(2)(1) \\ (3)(-1)+(6)(1) \end{bmatrix} = \begin{bmatrix} -5+2 \\ -3+6 \end{bmatrix} = \begin{bmatrix} -3 \\ 3 \end{bmatrix}$$

Se verifica si $A\mathbf{v} = \lambda\mathbf{v}$:

$$\begin{bmatrix} -3 \\ 3 \end{bmatrix} = \lambda \begin{bmatrix} -1 \\ 1 \end{bmatrix} \implies \lambda = 3$$

Comprobación: $3 \cdot \begin{bmatrix} -1 \\ 1 \end{bmatrix} = \begin{bmatrix} -3 \\ 3 \end{bmatrix}$ ✓

**Resultado: VERDADERO.** El vector $\begin{bmatrix} -1 \\ 1 \end{bmatrix}$ es vector propio de $A$ con valor propio $\lambda = 3$.

## Ejercicio 2b — Máximo dos valores propios en una matriz 2×2

**Explicación:**

Para una matriz $A$ de tamaño $2 \times 2$, el polinomio característico se obtiene de:

$$p(\lambda) = \det(A - \lambda I)$$

Si $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, entonces:

$$p(\lambda) = \det\begin{bmatrix} a-\lambda & b \\ c & d-\lambda \end{bmatrix} = (a-\lambda)(d-\lambda) - bc$$

$$= \lambda^2 - (a+d)\lambda + (ad - bc) = \lambda^2 - \text{tr}(A)\,\lambda + \det(A)$$

Este es un **polinomio de grado 2**. Por el Teorema Fundamental del Álgebra, un polinomio de grado $n$ tiene exactamente $n$ raíces (contando multiplicidad) en $\mathbb{C}$. En el conjunto de los reales, un polinomio de grado 2 puede tener 0, 1 o 2 raíces reales. Por tanto, una matriz $2 \times 2$ puede tener **a lo sumo dos valores propios distintos**.

**Ejemplo 1 — Dos valores propios distintos:**

$$A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} \implies p(\lambda) = \lambda^2 - 7\lambda + 10 = (\lambda-5)(\lambda-2)$$

Valores propios: $\lambda_1 = 5$, $\lambda_2 = 2$ (dos distintos).

**Ejemplo 2 — Un valor propio repetido:**

$$B = \begin{bmatrix} 3 & 1 \\ 0 & 3 \end{bmatrix} \implies p(\lambda) = (3-\lambda)^2 = \lambda^2 - 6\lambda + 9$$

Valor propio: $\lambda = 3$ con multiplicidad 2 (solo uno).

**Ejemplo 3 — Sin valores propios reales:**

$$C = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \implies p(\lambda) = \lambda^2 + 1$$

No tiene raíces reales (valores propios son $\pm i$ en $\mathbb{C}$).

## Ejercicio 2c — λ es valor propio de A si y solo si λ es valor propio de $A^T$

**Demostración:**

La clave está en que el polinomio característico de $A$ y de $A^T$ son iguales:

$$\det(A - \lambda I) = \det\!\left((A - \lambda I)^T\right) = \det(A^T - \lambda I^T) = \det(A^T - \lambda I)$$

La primera igualdad se debe a que $\det(M) = \det(M^T)$ para toda matriz $M$. Por tanto, $A$ y $A^T$ tienen el mismo polinomio característico y, en consecuencia, los **mismos valores propios**.

**Ejemplo concreto:**

Sea $A = \begin{bmatrix} 3 & 1 \\ 2 & 4 \end{bmatrix}$, entonces $A^T = \begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}$.

**Polinomio de $A$:**

$$p_A(\lambda) = \det\begin{bmatrix} 3-\lambda & 1 \\ 2 & 4-\lambda \end{bmatrix} = (3-\lambda)(4-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$$

**Polinomio de $A^T$:**

$$p_{A^T}(\lambda) = \det\begin{bmatrix} 3-\lambda & 2 \\ 1 & 4-\lambda \end{bmatrix} = (3-\lambda)(4-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda-2)(\lambda-5)$$

**Conclusión:** Ambas matrices tienen los mismos valores propios $\lambda_1 = 2$ y $\lambda_2 = 5$. Queda demostrado que $\lambda$ es valor propio de $A$ si y solo si $\lambda$ es valor propio de $A^T$.

## Ejercicio 2d — Polinomio característico y valores propios

**Matriz i: $A = \begin{bmatrix} 2 & 7 \\ 7 & 2 \end{bmatrix}$**

$$p(\lambda) = \det(A - \lambda I) = \det\begin{bmatrix} 2-\lambda & 7 \\ 7 & 2-\lambda \end{bmatrix}$$

$$= (2-\lambda)^2 - 49 = \lambda^2 - 4\lambda + 4 - 49 = \lambda^2 - 4\lambda - 45$$

**Factorización:**

$$\lambda^2 - 4\lambda - 45 = (\lambda - 9)(\lambda + 5)$$

**Valores propios reales:** $\lambda_1 = 9$ y $\lambda_2 = -5$.

*Nota: esta es una matriz simétrica ($A = A^T$), lo que garantiza que sus valores propios sean reales.*

---

**Matriz ii: $A = \begin{bmatrix} -4 & -1 \\ 6 & 1 \end{bmatrix}$**

$$p(\lambda) = \det(A - \lambda I) = \det\begin{bmatrix} -4-\lambda & -1 \\ 6 & 1-\lambda \end{bmatrix}$$

$$= (-4-\lambda)(1-\lambda) - (-1)(6) = (-4-\lambda)(1-\lambda) + 6$$

Se expande:

$$= -4 + 4\lambda - \lambda + \lambda^2 + 6 = \lambda^2 + 3\lambda + 2$$

**Factorización:**

$$\lambda^2 + 3\lambda + 2 = (\lambda+1)(\lambda+2)$$

**Valores propios reales:** $\lambda_1 = -1$ y $\lambda_2 = -2$.

## Verificación en GeoGebra

**Verificación del Ejercicio 2a**

En GeoGebra CAS se verifican los valores y vectores propios directamente:

Para la afirmación i, se ingresa la matriz y se comprueba el determinante:
```
A = {{3,2},{3,8}}
Det(A - 2 * IdentityMatrix(2))
```
Resultado: $0$ → confirma que $\lambda = 2$ es valor propio.

Para la afirmación iii y iv, se verifican los vectores propios:
```
A = {{1,-1},{6,-4}}, v = {1,3}
A * v
```
Resultado: `{-2,-6}` = $-2 \cdot \{1,3\}$ → confirma $\lambda = -2$.

**Verificación del Ejercicio 2b**

```
B = {{4,1},{2,3}}
Eigenvalues(B)
```
Resultado: `{5, 2}` → dos valores propios distintos.

**Verificación del Ejercicio 2c**

```
A = {{3,1},{2,4}}
AT = Transpose(A)
Eigenvalues(A)
Eigenvalues(AT)
```
Resultado: ambos devuelven `{5, 2}` → confirma la proposición.

**Verificación del Ejercicio 2d**

```
A1 = {{2,7},{7,2}}
Eigenvalues(A1)
CharacteristicPolynomial(A1, x)
```
Resultado: eigenvalues `{9, -5}`, polinomio `x² - 4x - 45`.

```
A2 = {{-4,-1},{6,1}}
Eigenvalues(A2)
CharacteristicPolynomial(A2, x)
```
Resultado: eigenvalues `{-1, -2}`, polinomio `x² + 3x + 2`.

**Enlace del video explicativo**

*(Insertar aquí el enlace del video explicativo una vez grabado)*

**Conclusiones**

A través de esta actividad se comprendieron los conceptos fundamentales de valores propios y vectores propios, herramientas esenciales del álgebra lineal con amplias aplicaciones en ingeniería. Las principales conclusiones son:

En primer lugar, verificar si un escalar $\lambda$ es valor propio de una matriz $A$ se reduce a comprobar si $\det(A - \lambda I) = 0$, lo cual es una condición necesaria y suficiente. De los ejercicios resueltos, todas las afirmaciones resultaron verdaderas, evidenciando que los valores y vectores propios propuestos satisfacen la condición $A\mathbf{v} = \lambda\mathbf{v}$.

En segundo lugar, el hecho de que el polinomio característico de una matriz $2 \times 2$ sea siempre de grado 2 limita la cantidad de valores propios reales distintos a un máximo de dos. Esta propiedad algebraica tiene consecuencias geométricas importantes: los vectores propios definen las direcciones invariantes bajo la transformación lineal representada por la matriz.

En tercer lugar, la equivalencia entre los valores propios de $A$ y $A^T$ resulta de la propiedad fundamental $\det(M) = \det(M^T)$. Este resultado implica que la transposición no altera el espectro de una matriz, aunque sí puede cambiar los vectores propios asociados.

Finalmente, GeoGebra demostró ser una herramienta eficaz para verificar cálculos de valores propios mediante los comandos `Eigenvalues()` y `CharacteristicPolynomial()`, reduciendo el riesgo de errores aritméticos y permitiendo una interpretación geométrica inmediata de los resultados.

**Referencias**

Grossman, S. I. (2019). *Álgebra lineal* (8.ª ed., pp. 529–559). McGraw-Hill.

Hernández, M. (2018). Espacio propio. En *Álgebra lineal: ejercicios de práctica* (pp. 97–110). Grupo Editorial Patria.

Alcazar, J. (2013). *Linear algebra notes* (pp. 69–92). Editorial Universidad de Alcalá.

GeoGebra.org. (s. f.). *GeoGebra Clásico*. GeoGebra. https://www.geogebra.org/classic
