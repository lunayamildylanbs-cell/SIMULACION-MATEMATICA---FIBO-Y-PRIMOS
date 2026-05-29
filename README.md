# KATARI/SOLVE

## Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real

Proyecto web interactivo desarrollado con HTML, CSS y JavaScript aplicando la Serie de Fibonacci y los Números Primos en problemas inspirados en situaciones del mundo real.

---

# Autor

**Yamil Dylan Luna Quispe**

---

# Descripción del proyecto

Este proyecto consiste en una página web interactiva donde se aplican algoritmos matemáticos utilizando JavaScript para resolver distintos problemas relacionados con:

* Serie de Fibonacci
* Números Primos
* Seguridad informática
* Crecimiento progresivo
* Análisis matemático computacional

La página permite al usuario ingresar datos mediante formularios, ejecutar simulaciones y visualizar resultados directamente en pantalla.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* GitHub
* GitHub Pages

---

# Características principales

* Diseño moderno y responsivo
* Navegación interactiva
* Formularios dinámicos
* Resultados visuales en pantalla
* Uso obligatorio de `document.getElementById()`
* Algoritmos matemáticos funcionales
* Separación correcta de HTML, CSS y JavaScript

---

# Problemas implementados

## 1. Sistema de ahorro inteligente

Aplicación de la Serie de Fibonacci para simular un plan de ahorro progresivo.

El usuario ingresa una cantidad de meses y el sistema calcula automáticamente el crecimiento del ahorro siguiendo la secuencia Fibonacci.

### Ejemplo

| Mes | Ahorro |
| --- | ------ |
| 1   | Bs. 1  |
| 2   | Bs. 1  |
| 3   | Bs. 2  |
| 4   | Bs. 3  |
| 5   | Bs. 5  |

---

## 2. Sistema de seguridad digital

Aplicación de números primos para verificar si un código puede considerarse matemáticamente seguro.

El usuario ingresa un número y el sistema determina automáticamente si es primo o no.

### Ejemplo

* Código: 17 → Seguro
* Código: 21 → Inseguro
* Código: 97 → Altamente seguro

---

## 3. Análisis combinado

Generación automática de una secuencia Fibonacci y detección de cuáles valores también son números primos.

El sistema analiza cada término individualmente y muestra los resultados en pantalla.

---

# Explicación de los algoritmos

## Algoritmo de Fibonacci

La Serie de Fibonacci se genera sumando los dos números anteriores de la secuencia.

Ejemplo:

```javascript
let a = 0;
let b = 1;
let c;

for(let i = 1; i <= meses; i++){

   c = a + b;
   a = b;
   b = c;

}
```

---

## Algoritmo de números primos

Un número primo solamente puede dividirse exactamente entre 1 y sí mismo.

Ejemplo:

```javascript
let contador = 0;

for(let i = 1; i <= numero; i++){

   if(numero % i == 0){
      contador++;
   }

}

if(contador == 2){

   // Es primo

}
```

---

# Estructura del proyecto

```text
SIMULACION MATEMATICA-FIBO Y PRIMOS/
│
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── README.md
```

---

# Diseño responsivo

La página fue diseñada para adaptarse correctamente a:

* Computadoras
* Tablets
* Celulares

Utilizando CSS responsivo mediante `media queries`.

---

# Uso de getElementById()

Toda la interacción con formularios y resultados fue desarrollada utilizando:

```javascript
document.getElementById()
```

Cumpliendo con las restricciones obligatorias del desafío.

---

# Repositorio GitHub

Agregar enlace del repositorio aquí:

```text
https://github.com/lunayamildylanbs-cell/SIMULACION-MATEMATICA---FIBO-Y-PRIMOS.git
```

---

# Página publicada

Agregar enlace del sitio web aquí:

```text
https://lunayamildylanbs-cell.github.io/SIMULACION-MATEMATICA---FIBO-Y-PRIMOS/?authuser=0
```

---

# Conclusión

Este proyecto demuestra cómo las matemáticas pueden utilizarse para resolver problemas relacionados con ahorro progresivo, seguridad informática y análisis computacional.

Además de aplicar conceptos matemáticos, el proyecto integra herramientas modernas de desarrollo web utilizando HTML, CSS y JavaScript para construir una experiencia visual e interactiva.

---


# Licencia

Proyecto desarrollado con fines educativos.
