# Mapa Conceptual — Vectores y Valores Propios

## Preguntas orientadoras respondidas

---

### ¿Qué es un valor propio?

Un **valor propio** (también llamado valor característico o eigenvalor) de una matriz cuadrada $A$ de tamaño $n \times n$ es un escalar $\lambda$ (real o complejo) tal que existe un vector no nulo $\mathbf{v}$ que satisface:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geométricamente, $\lambda$ describe cómo se escala (estira o comprime) el vector propio asociado cuando se aplica la transformación lineal $A$. Si $\lambda > 1$, el vector se estira; si $0 < \lambda < 1$, se comprime; si $\lambda < 0$, además se invierte la dirección; si $\lambda = 0$, el vector colapsa al origen.

---

### ¿Qué es un vector propio?

Un **vector propio** (o vector característico / eigenvector) asociado a un valor propio $\lambda$ es cualquier vector no nulo $\mathbf{v}$ que satisface $A\mathbf{v} = \lambda\mathbf{v}$.

Características fundamentales:
- Todo múltiplo escalar no nulo de un vector propio también es vector propio del mismo $\lambda$
- El conjunto de todos los vectores propios de $\lambda$ (junto con el vector cero) forma un subespacio vectorial llamado **espacio propio** $E_\lambda = \text{Nul}(A - \lambda I)$
- Los vectores propios correspondientes a **valores propios distintos** son linealmente independientes

---

### ¿Cómo se determinan los valores y vectores propios?

**Paso 1 — Polinomio característico:**
Resolver $\det(A - \lambda I) = 0$. Esta ecuación se llama **ecuación característica** y su lado izquierdo es el **polinomio característico** de $A$, denotado $p(\lambda)$.

Para una matriz $2 \times 2$:
$$p(\lambda) = \lambda^2 - \text{tr}(A)\,\lambda + \det(A)$$

**Paso 2 — Encontrar los valores propios:**
Las raíces del polinomio característico son los valores propios $\lambda_1, \lambda_2, \ldots, \lambda_n$.

**Paso 3 — Encontrar los vectores propios:**
Para cada valor propio $\lambda_i$, resolver el sistema homogéneo $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$. Las soluciones no triviales son los vectores propios.

Ejemplo con $A = \begin{bmatrix} 2 & 7 \\ 7 & 2 \end{bmatrix}$:
- $p(\lambda) = \lambda^2 - 4\lambda - 45 = (\lambda-9)(\lambda+5)$
- $\lambda_1 = 9$: $(A - 9I)\mathbf{v} = \mathbf{0}$ → $\mathbf{v}_1 = \begin{bmatrix}1\\1\end{bmatrix}$
- $\lambda_2 = -5$: $(A + 5I)\mathbf{v} = \mathbf{0}$ → $\mathbf{v}_2 = \begin{bmatrix}1\\-1\end{bmatrix}$

---

### ¿Qué significa que dos matrices sean semejantes?

Dos matrices cuadradas $A$ y $B$ de orden $n$ son **semejantes** si existe una matriz invertible $P$ tal que:
$$B = P^{-1}AP$$

Propiedades de las matrices semejantes:
- Tienen el **mismo polinomio característico** → los mismos valores propios
- Tienen el **mismo determinante**: $\det(B) = \det(A)$
- Tienen la **misma traza**: $\text{tr}(B) = \text{tr}(A)$
- Tienen el **mismo rango**
- Representan la **misma transformación lineal** en bases distintas

La semejanza es importante para la **diagonalización**: una matriz $A$ es diagonalizable si es semejante a una matriz diagonal $D$, en cuyo caso $D = P^{-1}AP$ donde las columnas de $P$ son los vectores propios y la diagonal de $D$ contiene los valores propios.

---

### ¿Qué es una matriz simétrica?

Una matriz cuadrada $A$ es **simétrica** si coincide con su transpuesta:
$$A = A^T \quad \Longleftrightarrow \quad a_{ij} = a_{ji} \text{ para todo } i, j$$

Ejemplo: $\begin{bmatrix} 2 & 7 \\ 7 & 2 \end{bmatrix}$ es simétrica porque el elemento (1,2) = el elemento (2,1) = 7.

Propiedades especiales de las matrices simétricas (Teorema Espectral):
- Todos sus **valores propios son reales** (aunque la matriz tenga entradas reales)
- Los vectores propios correspondientes a **valores propios distintos son ortogonales**
- Siempre es **diagonalizable ortogonalmente**: $A = Q D Q^T$ donde $Q$ es ortogonal ($Q^T = Q^{-1}$) y $D$ es diagonal

---

## Estructura del mapa (para Canva o CmapTools)

**Nodo central:** Valores y Vectores Propios

**Ramas principales:**
1. Valor Propio $\lambda$ → definición → $\det(A-\lambda I)=0$ → polinomio característico → raíces
2. Vector Propio $\mathbf{v}$ → $A\mathbf{v}=\lambda\mathbf{v}$ → espacio propio → s.h. $(A-\lambda I)\mathbf{v}=\mathbf{0}$
3. Matrices Semejantes → $B=P^{-1}AP$ → mismos valores propios → diagonalización
4. Matriz Simétrica → $A=A^T$ → valores propios reales → vectores propios ortogonales
