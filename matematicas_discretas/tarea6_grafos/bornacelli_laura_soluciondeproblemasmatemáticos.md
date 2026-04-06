**Introducción**

El presente documento tiene como objetivo analizar un grafo ponderado dirigido de cinco vértices, aplicando conceptos fundamentales de la teoría de grafos para determinar las ponderaciones entre vértices, calcular las trayectorias mínimas desde el vértice 1 hacia el resto y establecer el costo total mínimo de dichas trayectorias. Para ello se empleará el algoritmo de Dijkstra, herramienta clásica en la resolución de problemas de caminos mínimos en grafos con pesos no negativos.

**Definición de grafo ponderado**

Un grafo ponderado es una estructura $G = (V, E, w)$ donde $V$ es el conjunto de vértices, $E$ el conjunto de aristas y $w: E \rightarrow \mathbb{R}^+$ una función que asigna un peso o costo a cada arista. En un grafo ponderado dirigido, cada arista tiene una dirección definida, de modo que el peso de $(u, v)$ no implica necesariamente la existencia ni el mismo costo de $(v, u)$ (Doerr & Levasseur, 2025).

**Algoritmo de Dijkstra**

El algoritmo de Dijkstra permite encontrar el camino de menor costo desde un vértice origen hacia todos los demás vértices de un grafo con pesos no negativos. El procedimiento consiste en mantener un conjunto de vértices visitados y actualizar iterativamente las distancias mínimas conocidas. En cada iteración se selecciona el vértice no visitado con menor distancia acumulada, se marca como visitado y se actualizan las distancias de sus vecinos si se encuentra un camino más corto (Lehman et al., 2018).

**Descripción del grafo analizado**

El grafo ponderado dirigido presenta cinco vértices $\{1, 2, 3, 4, 5\}$ con las siguientes aristas dirigidas y sus respectivos pesos:

| Arista | Peso |
|:---:|:---:|
| $1 \rightarrow 3$ | 10 |
| $1 \rightarrow 2$ | 60 |
| $1 \rightarrow 4$ | 100 |
| $3 \rightarrow 2$ | 40 |
| $3 \rightarrow 4$ | 30 |
| $3 \rightarrow 5$ | 5 |
| $4 \rightarrow 5$ | 20 |
| $2 \rightarrow 5$ | 8 |

## Ejercicio I: Tabla de ponderaciones entre vértices

**Identificación de componentes:**

- Vértices: $\{1, 2, 3, 4, 5\}$
- Tipo: grafo ponderado dirigido
- Representación: matriz de adyacencia con pesos

Para identificar las ponderaciones entre cada par de vértices se construye la matriz de adyacencia dirigida. El símbolo $\infty$ indica que no existe arista directa entre los vértices correspondientes, y el símbolo $-$ indica que no aplica (mismo vértice).

**Tabla de ponderaciones (matriz de adyacencia):**

| Origen $\backslash$ Destino | 1 | 2 | 3 | 4 | 5 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **1** | — | 60 | 10 | 100 | $\infty$ |
| **2** | $\infty$ | — | $\infty$ | $\infty$ | 8 |
| **3** | $\infty$ | 40 | — | 30 | 5 |
| **4** | $\infty$ | $\infty$ | $\infty$ | — | 20 |
| **5** | $\infty$ | $\infty$ | $\infty$ | $\infty$ | — |

**Análisis:** El vértice 1 tiene conexiones directas hacia los vértices 2, 3 y 4. El vértice 3 actúa como nodo central con tres aristas de salida. Los vértices 2, 4 y 5 tienen capacidad de salida reducida: el vértice 2 solo conecta con 5, el vértice 4 solo conecta con 5, y el vértice 5 no tiene aristas de salida, funcionando como nodo sumidero del grafo.

## Ejercicio II: Trayectoria mínima del vértice 1 al resto

**Aplicación del Algoritmo de Dijkstra:**

Se parte del vértice 1 con distancia 0. Todos los demás vértices inician con distancia $\infty$.

**Paso 1.** Se visita el vértice 1 ($dist = 0$). Se actualizan sus vecinos directos:

$$dist[2] = 60, \quad dist[3] = 10, \quad dist[4] = 100$$

**Paso 2.** Se selecciona el vértice no visitado con menor distancia: vértice 3 ($dist = 10$). Se actualizan sus vecinos:

$$dist[2] = \min(60,\; 10 + 40) = 50 \quad \text{(actualizado)}$$
$$dist[4] = \min(100,\; 10 + 30) = 40 \quad \text{(actualizado)}$$
$$dist[5] = \min(\infty,\; 10 + 5) = 15$$

**Paso 3.** Se selecciona el vértice 5 ($dist = 15$). El vértice 5 no tiene aristas de salida; no se realizan actualizaciones.

**Paso 4.** Se selecciona el vértice 4 ($dist = 40$). Se actualiza su vecino:

$$dist[5] = \min(15,\; 40 + 20) = 15 \quad \text{(sin cambio)}$$

**Paso 5.** Se selecciona el vértice 2 ($dist = 50$). Se actualiza su vecino:

$$dist[5] = \min(15,\; 50 + 8) = 15 \quad \text{(sin cambio)}$$

**Tabla resumen de iteraciones del algoritmo:**

| Iteración | Vértice visitado | dist[1] | dist[2] | dist[3] | dist[4] | dist[5] |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Inicial | — | 0 | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| 1 | 1 | 0 | 60 | 10 | 100 | $\infty$ |
| 2 | 3 | 0 | 50 | 10 | 40 | 15 |
| 3 | 5 | 0 | 50 | 10 | 40 | 15 |
| 4 | 4 | 0 | 50 | 10 | 40 | 15 |
| 5 | 2 | 0 | 50 | 10 | 40 | 15 |

**Trayectorias mínimas desde el vértice 1:**

| Destino | Trayectoria mínima | Costo |
|:---:|:---:|:---:|
| 2 | $1 \rightarrow 3 \rightarrow 2$ | 50 |
| 3 | $1 \rightarrow 3$ | 10 |
| 4 | $1 \rightarrow 3 \rightarrow 4$ | 40 |
| 5 | $1 \rightarrow 3 \rightarrow 5$ | 15 |

**Análisis:** El vértice 3 resulta ser el nodo clave de la red: pasar por él permite mejorar el costo hacia los vértices 2 y 4 respecto a las aristas directas desde 1. La conexión directa $1 \rightarrow 2$ (costo 60) es superada por la ruta $1 \rightarrow 3 \rightarrow 2$ (costo 50), y la conexión $1 \rightarrow 4$ (costo 100) es ampliamente superada por $1 \rightarrow 3 \rightarrow 4$ (costo 40).

## Ejercicio III: Costo mínimo de la trayectoria

El costo mínimo total del árbol de trayectorias más cortas desde el vértice 1 se obtiene sumando los costos individuales de cada trayectoria óptima identificada en el ejercicio anterior:

$$C_{min} = dist[3] + dist[5] + dist[4] + dist[2]$$

$$C_{min} = 10 + 15 + 40 + 50 = 115$$

**Argumentación teórica:** Según el algoritmo de Dijkstra, las distancias finales obtenidas son óptimas porque en cada iteración se selecciona el vértice de menor distancia acumulada no visitado, garantizando que una vez que un vértice es visitado su distancia no puede mejorar con pesos no negativos (Lehman et al., 2018). Este principio, conocido como la propiedad de optimalidad del algoritmo, asegura que las cuatro trayectorias halladas son globalmente mínimas.

Desde la perspectiva de la vida real, este tipo de grafo puede modelar una red de distribución donde los vértices representan almacenes o centros logísticos y los pesos representan distancias, tiempos o costos de transporte. El costo mínimo total de 115 unidades indica que, partiendo del nodo central 1, es posible abastecer todos los demás puntos de la red con ese costo acumulado mínimo, tomando siempre la ruta más eficiente disponible (MIT OCW, 2012).

**Conclusiones**

A través del análisis del grafo ponderado dirigido de cinco vértices y la aplicación sistemática del algoritmo de Dijkstra, se obtuvieron los siguientes resultados principales:

1. La matriz de adyacencia permitió identificar con precisión las ponderaciones directas entre cada par de vértices, evidenciando que el vértice 5 actúa como nodo sumidero y que el vértice 3 es el nodo con mayor conectividad de salida dentro de la red.

2. Las trayectorias mínimas desde el vértice 1 hacia los demás vértices no siempre coinciden con las aristas directas disponibles: en los casos de los vértices 2 y 4, la ruta óptima pasa obligatoriamente por el vértice 3, reduciendo el costo de 60 a 50 y de 100 a 40 respectivamente.

3. El costo mínimo total del árbol de trayectorias es de 115 unidades, resultado que garantiza la cobertura de todos los nodos desde el vértice origen con el menor gasto posible de recursos, lo cual confirma la utilidad práctica de los grafos ponderados en problemas de optimización de redes.

**Referencias**

Doerr, A., & Levasseur, K. (2025). Trees. *Applied discrete structures* (3rd ed., v3.12) (pp. 241-258). University of Massachusetts Lowell.

Espinosa, R. (2016). *Matemáticas discretas* (pp. 382-397). Alfaomega.

Gimbert, J., Moreno, R. y Ribó, J. (1998). *Apropament a la teoria de grafs i als seus algorismes* (pp. 97-108). Edicions de la Universitat de Lleida.

Lehman, E., Leighton, F. T., & Meyer, A. R. (2018). Directed graphs & Partial Orders. *Mathematics for Computer Science* (pp. 421-449). MIT OpenCourseWare.

MIT OCW. (2012). *6.046J Design and Analysis of Algorithms – Lecture 4: Minimum Spanning Trees II*. Supplemental reading in CLRS. 1-8.
