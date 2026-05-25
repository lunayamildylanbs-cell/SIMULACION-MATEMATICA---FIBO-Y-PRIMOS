# Matemáticas que Resuelven Problemas  
## Fibonacci y Números Primos en la Vida Real

Proyecto web interactivo desarrollado con HTML, CSS y JavaScript, aplicando la serie de Fibonacci y los números primos para resolver problemas relacionados con el mundo real.

---

# Autor

**Yamil Dylan Luna Quispe**

---

# Descripción del Proyecto

Este proyecto fue desarrollado como parte del desafío:

> “Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real”.

La aplicación web permite al usuario interactuar con distintos simuladores matemáticos relacionados con:

- Serie de Fibonacci
- Números primos
- Seguridad informática
- Ahorro progresivo
- Crecimiento matemático

La página utiliza formularios interactivos, JavaScript y diseño responsivo para mostrar resultados dinámicamente.

---

# Problemas Aplicados al Mundo Real

## Fibonacci en ahorro progresivo

Simula un sistema de ahorro donde cada depósito aumenta siguiendo la secuencia Fibonacci.

Ejemplo:

| Mes | Ahorro |
|---|---|
| 1 | Bs. 1 |
| 2 | Bs. 1 |
| 3 | Bs. 2 |
| 4 | Bs. 3 |
| 5 | Bs. 5 |
| 6 | Bs. 8 |

---

## Números primos en seguridad informática

Verifica si un número puede considerarse primo para utilizarse como código básico de seguridad.

Los números primos son utilizados en:

- Criptografía
- Validación de códigos
- Protección de información
- Sistemas de cifrado

---

## Fibonacci y primos combinados

Genera una secuencia Fibonacci y detecta cuáles valores también son números primos.

---

# Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la página |
| CSS3 | Diseño visual y responsivo |
| JavaScript | Lógica matemática |
| Git y GitHub | Control de versiones |
| Netlify / GitHub Pages | Publicación web |

---

# Funcionalidades

- Simulador de Fibonacci
- Verificador de números primos
- Detección de Fibonacci primos
- Formularios interactivos
- Resultados dinámicos
- Diseño responsivo
- Uso de `document.getElementById()`

---

# Algoritmo Fibonacci

```javascript
let a = 0;
let b = 1;
let c;

for (let i = 1; i <= meses; i++) {
   c = a + b;
   a = b;
   b = c;
}
```

# Algoritmo de números primos

```javascript
let contador = 0;

for (let i = 1; i <= numero; i++) {

   if (numero % i == 0) {
      contador++;
   }

}

if (contador == 2) {
   console.log("Es primo");
}
```

# Estructura del Proyecto

```text
desafio-fibonacci-primos/
│
├── index.html
├── estilos.css
├── script.js
└── README.md
```

# Diseño Responsivo

La página fue desarrollada utilizando diseño responsivo para adaptarse correctamente a:

- Computadoras
- Tablets
- Celulares

---

# Repositorio GitHub

```text
https://github.com/TU-USUARIO/desafio-fibonacci-primos
```

---

# Página Publicada

```text
https://tu-proyecto.netlify.app
```

---

# Conclusión

Este proyecto demuestra cómo las matemáticas pueden aplicarse a problemas reales mediante programación web.

La combinación de Fibonacci y números primos permite comprender aplicaciones relacionadas con:

- Seguridad informática
- Crecimiento progresivo
- Organización matemática
- Algoritmos computacionales

Además, el proyecto integra tecnologías modernas como HTML, CSS y JavaScript para crear una experiencia interactiva y visualmente atractiva.

---

# Captura del Proyecto

Agregar aquí una imagen de la página principal del proyecto.

---

# Licencia

Proyecto educativo desarrollado con fines académicos.