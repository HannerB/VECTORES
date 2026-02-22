# Contenido para el Mapa Conceptual de Espacios Vectoriales

## 1. ¿Qué es un espacio vectorial?

**Definición:**
Un espacio vectorial (o espacio lineal) es un conjunto V de elementos llamados **vectores**, junto con dos operaciones:
- **Suma de vectores:** u + v (para u, v en V)
- **Multiplicación por escalar:** c·v (para c escalar real y v en V)

que satisfacen **10 axiomas** fundamentales.

**Los 10 axiomas:**

*Axiomas de la suma (A1–A5):*
1. **Cerradura en la suma:** Si u, v ∈ V, entonces u + v ∈ V
2. **Conmutatividad:** u + v = v + u
3. **Asociatividad:** (u + v) + w = u + (v + w)
4. **Elemento neutro (vector cero):** Existe 0 ∈ V tal que v + 0 = v para todo v ∈ V
5. **Inverso aditivo:** Para cada v ∈ V, existe −v ∈ V tal que v + (−v) = 0

*Axiomas de la multiplicación por escalar (M1–M5):*
6. **Cerradura en el producto escalar:** Si c ∈ ℝ y v ∈ V, entonces c·v ∈ V
7. **Distributividad respecto a la suma de vectores:** c·(u + v) = c·u + c·v
8. **Distributividad respecto a la suma de escalares:** (c + d)·v = c·v + d·v
9. **Asociatividad del producto escalar:** c·(d·v) = (cd)·v
10. **Elemento neutro escalar:** 1·v = v

**Notación:**
- Se denota como (V, +, ·) o simplemente V
- Los escalares provienen de un campo F (generalmente ℝ o ℂ)

---

## 2. ¿Qué tipos de espacios vectoriales conoce?

### Espacios vectoriales clásicos:

- **ℝⁿ (espacio n-dimensional real):** Conjunto de n-tuplas de números reales
  - ℝ² = {(x, y) | x, y ∈ ℝ} — el plano
  - ℝ³ = {(x, y, z) | x, y, z ∈ ℝ} — el espacio tridimensional

- **M_{m×n} (matrices m×n):** Conjunto de todas las matrices de tamaño m×n con entradas reales
  - M₂₂ = matrices 2×2
  - M₃₃ = matrices 3×3

- **Pₙ (polinomios de grado ≤ n):** Conjunto de todos los polinomios de grado a lo sumo n
  - P₂ = {a₀ + a₁x + a₂x² | a₀, a₁, a₂ ∈ ℝ}

- **C[a,b] (funciones continuas):** Conjunto de funciones continuas en el intervalo [a, b]

### Subespacios vectoriales:
Un **subespacio vectorial** W de V es un subconjunto W ⊆ V que es él mismo un espacio vectorial con las mismas operaciones. Para verificarlo basta comprobar:
1. El vector cero pertenece a W (0 ∈ W)
2. W es cerrado bajo la suma: si u, w ∈ W, entonces u + w ∈ W
3. W es cerrado bajo multiplicación escalar: si c ∈ ℝ y w ∈ W, entonces c·w ∈ W

### Ejemplos de subespacios:
- Una recta que pasa por el origen en ℝ²
- Un plano que pasa por el origen en ℝ³
- El conjunto {0} (subespacio trivial)
- El espacio V completo (subespacio impropio)

---

## 3. ¿Cómo se determina que un conjunto dado es o no un espacio vectorial?

### Método 1: Verificación directa de los 10 axiomas
Se comprueba uno por uno que cada axioma se cumple. Si alguno falla, el conjunto NO es un espacio vectorial.

### Método 2: Prueba de subespacio (si es subconjunto de un espacio vectorial conocido)
Si S ⊆ V (donde V ya es un espacio vectorial), basta verificar 3 condiciones:

1. **No vacío / Contiene al vector cero:** 0 ∈ S
2. **Cerrado bajo la suma:** Para todo u, v ∈ S → u + v ∈ S
3. **Cerrado bajo multiplicación escalar:** Para todo c ∈ ℝ y v ∈ S → c·v ∈ S

**Si alguna de las 3 condiciones falla → NO es subespacio (ni espacio vectorial)**

### Errores comunes — Conjuntos que NO son espacios vectoriales:
- Conjuntos que no contienen el vector cero (por ejemplo, y = -3x + 1 no pasa por el origen)
- Conjuntos que no son cerrados bajo la suma (por ejemplo, matrices invertibles: la suma de dos invertibles puede no ser invertible)
- Conjuntos definidos por desigualdades (x > 0 no es cerrado bajo multiplicación por -1)

---

## 4. ¿Qué es y cómo se determina una base para un espacio vectorial?

### Definición de base:
Una **base** de un espacio vectorial V es un conjunto de vectores B = {v₁, v₂, ..., vₙ} que cumple dos condiciones:
1. **Son linealmente independientes:** La única solución de c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 es c₁ = c₂ = ... = cₙ = 0
2. **Generan todo V:** Todo vector v ∈ V se puede escribir como combinación lineal v = c₁v₁ + c₂v₂ + ... + cₙvₙ

### Dimensión:
El número de vectores en una base se llama la **dimensión** del espacio vectorial:
- dim(ℝⁿ) = n
- dim(M_{m×n}) = m·n
- dim(Pₙ) = n + 1

### Bases canónicas (estándar):

**Para ℝ²:** {e₁, e₂} = {(1, 0), (0, 1)}

**Para ℝ³:** {e₁, e₂, e₃} = {(1, 0, 0), (0, 1, 0), (0, 0, 1)}

**Para M₂₂:** {E₁₁, E₁₂, E₂₁, E₂₂} donde cada Eᵢⱼ tiene un 1 en la posición (i,j) y ceros en las demás

**Para P₂:** {1, x, x²}

### ¿Cómo determinar una base?
1. **Verificar independencia lineal:** Plantear c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 y resolver el sistema. Si la única solución es la trivial (todos cero), son linealmente independientes.
2. **Verificar que generan el espacio:** Todo vector del espacio debe poder expresarse como combinación lineal de los vectores de la base.
3. **Método práctico:** Formar una matriz con los vectores como filas (o columnas) y reducir por filas. Los vectores correspondientes a filas pivote forman una base.

---

## Organización visual sugerida para el mapa:

```
                      ESPACIOS VECTORIALES
                             |
        _____________________|_____________________
        |           |              |               |
   DEFINICIÓN    TIPOS      ¿ES ESPACIO       BASE Y
        |           |       VECTORIAL?       DIMENSIÓN
        |           |              |               |
   [Conjunto V]  [ℝⁿ]      [Verificar        [Conjunto LI
   [+ suma]      [M_mn]     10 axiomas]       que genera V]
   [+ escalar]   [Pₙ]      [o 3 condiciones  [dim = n° vectores]
   [10 axiomas]  [C[a,b]]   de subespacio]   [Bases canónicas]
                 [Subespacios]
```

---

## Nota:
Este contenido está listo para ser transformado en un mapa conceptual visual usando herramientas como:
- Canva
- Lucidchart
- MindMeister
- CmapTools
- O dibujarlo a mano y escanearlo
