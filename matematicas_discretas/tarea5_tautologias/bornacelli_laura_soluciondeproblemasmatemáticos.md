**Introducción**

El presente documento tiene como objetivo resolver y clasificar tres proposiciones compuestas mediante tablas de verdad, determinando si cada una corresponde a una tautología, contradicción o contingencia. Para ello, se identifican las proposiciones atómicas, los conectores lógicos y las negaciones que conforman cada expresión, y se evalúan de manera sistemática todos los posibles valores de verdad.

**Definición de proposición compuesta**

Una proposición compuesta es una expresión lógica formada por dos o más proposiciones atómicas (simples) unidas mediante conectores lógicos. Los conectores fundamentales son: la conjunción ($\wedge$), la disyunción ($\vee$), la negación ($\neg$), la implicación ($\Rightarrow$) y la bicondicional ($\Leftrightarrow$). Cada conector tiene una tabla de verdad definida que permite calcular el valor de verdad de la proposición compuesta a partir de los valores de sus componentes.

**Cálculo de la tabla de verdad**

Para construir una tabla de verdad se listan todas las combinaciones posibles de valores de verdad de las proposiciones atómicas. Si hay $n$ proposiciones atómicas, la tabla tendrá $2^n$ filas. En cada fila se evalúan paso a paso los conectores, respetando el orden de precedencia: primero la negación, luego la conjunción, después la disyunción y finalmente la implicación.

**Clasificación de proposiciones compuestas**

- **Tautología:** la proposición es verdadera en todas las filas de la tabla de verdad, sin importar los valores de las proposiciones atómicas.
- **Contradicción:** la proposición es falsa en todas las filas de la tabla de verdad.
- **Contingencia:** la proposición es verdadera en algunas filas y falsa en otras.

## Ejercicio a: $(p \wedge q) \Rightarrow p \vee \neg r$

**Identificación de componentes:**

- Proposiciones atómicas: $p$, $q$, $r$
- Conectores: conjunción ($\wedge$), implicación ($\Rightarrow$), disyunción ($\vee$)
- Negaciones: $\neg r$
- Estructura: $(p \wedge q) \Rightarrow (p \vee \neg r)$

**Paso 1.** Se calculan las subexpresiones intermedias: $p \wedge q$ y $\neg r$.

**Paso 2.** Se evalúa la disyunción $p \vee \neg r$.

**Paso 3.** Se aplica la implicación. Recordemos que $A \Rightarrow B$ es falsa únicamente cuando $A$ es verdadera y $B$ es falsa.

**Tabla de verdad:**

| $p$ | $q$ | $r$ | $p \wedge q$ | $\neg r$ | $p \vee \neg r$ | $(p \wedge q) \Rightarrow (p \vee \neg r)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | F | V | **V** |
| V | V | F | V | V | V | **V** |
| V | F | V | F | F | V | **V** |
| V | F | F | F | V | V | **V** |
| F | V | V | F | F | F | **V** |
| F | V | F | F | V | V | **V** |
| F | F | V | F | F | F | **V** |
| F | F | F | F | V | V | **V** |

**Análisis:** Dado que la columna resultado muestra el valor verdadero (V) en las 8 filas, la proposición es verdadera para toda combinación posible de valores de verdad de $p$, $q$ y $r$.

Esto se explica porque siempre que la conjunción $p \wedge q$ es verdadera, necesariamente $p$ es verdadera, lo cual garantiza que $p \vee \neg r$ también sea verdadera. En consecuencia, la implicación nunca es falsa.

**Clasificación: TAUTOLOGÍA**

## Ejercicio b: $\neg[(p \wedge q) \Rightarrow p]$

**Identificación de componentes:**

- Proposiciones atómicas: $p$, $q$
- Conectores: conjunción ($\wedge$), implicación ($\Rightarrow$)
- Negaciones: $\neg$ (aplicada a toda la implicación)
- Estructura: $\neg[(p \wedge q) \Rightarrow p]$

**Paso 1.** Se calcula la conjunción $p \wedge q$.

**Paso 2.** Se evalúa la implicación $(p \wedge q) \Rightarrow p$. Observemos que si $p \wedge q$ es verdadera, entonces $p$ necesariamente es verdadera, por lo cual la implicación siempre es verdadera. Si $p \wedge q$ es falsa, la implicación también es verdadera (una implicación con antecedente falso siempre es verdadera).

**Paso 3.** Se aplica la negación exterior, invirtiendo el resultado.

**Tabla de verdad:**

| $p$ | $q$ | $p \wedge q$ | $(p \wedge q) \Rightarrow p$ | $\neg[(p \wedge q) \Rightarrow p]$ |
|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | **F** |
| V | F | F | V | **F** |
| F | V | F | V | **F** |
| F | F | F | V | **F** |

**Análisis:** La implicación $(p \wedge q) \Rightarrow p$ es una tautología, puesto que la conjunción $p \wedge q$ solo puede ser verdadera cuando ambas proposiciones lo son, lo cual incluye a $p$. Por lo tanto, la implicación nunca tiene antecedente verdadero con consecuente falso. Al negar una tautología, el resultado es siempre falso en todas las filas.

**Clasificación: CONTRADICCIÓN**

## Ejercicio c: $[(p \wedge q) \Rightarrow (r \wedge p)]$

**Identificación de componentes:**

- Proposiciones atómicas: $p$, $q$, $r$
- Conectores: conjunción ($\wedge$) en ambos lados, implicación ($\Rightarrow$)
- Negaciones: ninguna
- Estructura: $(p \wedge q) \Rightarrow (r \wedge p)$

**Paso 1.** Se calculan las conjunciones de ambos lados: $p \wedge q$ (antecedente) y $r \wedge p$ (consecuente).

**Paso 2.** Se evalúa la implicación. Será falsa únicamente cuando $p \wedge q$ sea verdadera y $r \wedge p$ sea falsa. Esto ocurre cuando $p$ y $q$ son verdaderas pero $r$ es falsa.

**Tabla de verdad:**

| $p$ | $q$ | $r$ | $p \wedge q$ | $r \wedge p$ | $(p \wedge q) \Rightarrow (r \wedge p)$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | V | **V** |
| V | V | F | V | F | **F** |
| V | F | V | F | V | **V** |
| V | F | F | F | F | **V** |
| F | V | V | F | F | **V** |
| F | V | F | F | F | **V** |
| F | F | V | F | F | **V** |
| F | F | F | F | F | **V** |

**Análisis:** La proposición es verdadera en 7 de las 8 filas y falsa en una sola fila (cuando $p = V$, $q = V$ y $r = F$). Esto ocurre porque la única forma de que la implicación falle es que el antecedente $p \wedge q$ sea verdadero mientras el consecuente $r \wedge p$ sea falso, lo cual sucede únicamente cuando $r$ es falsa estando $p$ y $q$ verdaderas.

Al presentar tanto valores verdaderos como falsos, la proposición no es ni tautología ni contradicción.

**Clasificación: CONTINGENCIA**

**Conclusiones**

A través del desarrollo de las tres proposiciones compuestas y sus respectivas tablas de verdad, se identificaron los tres tipos posibles de clasificación en lógica proposicional:

1. La proposición $(p \wedge q) \Rightarrow (p \vee \neg r)$ resultó ser una **tautología**, lo que demuestra que cuando el antecedente de una implicación lógicamente contiene al consecuente, la expresión siempre será verdadera.

2. La proposición $\neg[(p \wedge q) \Rightarrow p]$ resultó ser una **contradicción**, pues negar una tautología produce una proposición que siempre es falsa, sin importar los valores de verdad asignados.

3. La proposición $(p \wedge q) \Rightarrow (r \wedge p)$ resultó ser una **contingencia**, ya que su valor de verdad depende de la combinación específica de valores de las proposiciones atómicas, mostrando tanto resultados verdaderos como falsos.

Este análisis confirma que las tablas de verdad constituyen una herramienta fundamental y sistemática para determinar la naturaleza lógica de cualquier proposición compuesta, permitiendo evaluar de forma exhaustiva todos los escenarios posibles.

**Referencias**

Espinosa, R. (2016). *Matemáticas discretas*. Alfaomega.

Lehman, E., Leighton, F. T., & Meyer, A. R. (2018). Logical Formulas. En *Mathematics for Computer Science* (pp. 57-68). MIT OpenCourseWare.

Tinoco del Valle, J. A., Hernández Sastoque, E. & Escorla Caballero, E. (2023). Proposiciones compuestas. En *Introducción a la lógica matemática* (pp. 37-75). Editorial Unimagdalena.

Zach, R. (Ed.). (2025). Natural deduction. En *Sets, logic, computation: An open introduction to metalogic* (pp. 194-221). Open Logic Project.
