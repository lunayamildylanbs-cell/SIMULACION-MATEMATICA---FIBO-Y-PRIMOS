// EFECTO SCROLL SUAVE PARA LINKS
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(function(enlace){

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino =
        document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// PROBLEMA 1
// FIBONACCI EN AHORRO INTELIGENTE

document.getElementById("btnFibonacci").onclick =
function(){

    let meses =
    parseInt(
        document.getElementById("meses").value
    );

    let resultado =
    document.getElementById("resultadoFibonacci");



    // VALIDACIÓN

    if(isNaN(meses) || meses <= 0){

        resultado.innerHTML =

        `
        <div class="error-box">

            Debes ingresar una cantidad válida de meses.

        </div>
        `;

        return;

    }

    // VARIABLES FIBONACCI

    let a = 0;
    let b = 1;
    let c;

    let suma = 0;

    let texto =

    `
    <h3>
      RESULTADO DEL PLAN DE AHORRO
    </h3>

    <p>
      El sistema calculó el crecimiento del ahorro
      utilizando la Serie de Fibonacci.
    </p>

    <div class="resultado-grid">
    `;

    // GENERACIÓN

    for(let i = 1; i <= meses; i++){

        texto +=

        `
        <div class="resultado-item">

            <div class="resultado-numero">
                Mes ${i}
            </div>

            <div class="resultado-valor">
                Bs. ${b}
            </div>

        </div>
        `;

        suma += b;

        c = a + b;
        a = b;
        b = c;

    }

    texto +=
    `
    </div>

    <div class="resultado-final">

        <h4>
          Total acumulado:
        </h4>

        <span>
          Bs. ${suma}
        </span>

    </div>

    <div class="analisis-box">

        <h4>
          Análisis del problema
        </h4>

        <p>

          El crecimiento del ahorro demuestra cómo
          pequeñas cantidades pueden aumentar
          progresivamente utilizando patrones matemáticos.

        </p>

        <p>

          Este tipo de simulación puede utilizarse
          en economía, educación financiera,
          planificación de inversiones
          y proyecciones de crecimiento.

        </p>

    </div>
    `;

    resultado.innerHTML = texto;

};

// PROBLEMA 2
// NÚMEROS PRIMOS EN SEGURIDAD

document.getElementById("btnPrimo").onclick =
function(){

    let numero =
    parseInt(
        document.getElementById("numeroPrimo").value
    );

    let resultado =
    document.getElementById("resultadoPrimo");

    // VALIDACIÓN

    if(isNaN(numero) || numero <= 0){

        resultado.innerHTML =

        `
        <div class="error-box">

            Debes ingresar un código válido.

        </div>
        `;

        return;

    }

    // VERIFICACIÓN

    let contador = 0;
    let divisores = "";



    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){

            contador++;

            divisores += i + " ";

        }

    }

    // RESULTADO

    let estado = "";
    let mensaje = "";
    let nivel = "";

    if(contador == 2){

        estado =
        "CODIGO SEGURO";

        mensaje =

        `
        El número ingresado solamente
        puede dividirse entre 1 y sí mismo.
        Por lo tanto,
        el sistema lo considera primo.
        `;

        nivel =
        "Nivel de seguridad: ALTO";

    }

    else{

        estado =
        "CODIGO INSEGURO";

        mensaje =

        `
        El número tiene múltiples divisores,
        por lo tanto no puede considerarse
        un número primo.
        `;

        nivel =
        "Nivel de seguridad: BAJO";

    }

    resultado.innerHTML =

    `
    <h3>
      ANALISIS DEL CODIGO
    </h3>

    <div class="codigo-estado">

        ${estado}

    </div>

    <div class="codigo-info">

        <p>

          <strong>
            Código analizado:
          </strong>

          ${numero}

        </p>

        <p>

          <strong>
            Divisores encontrados:
          </strong>

          ${divisores}

        </p>

        <p>

          <strong>
            Cantidad de divisores:
          </strong>

          ${contador}

        </p>

        <p>

          ${nivel}

        </p>

    </div>

    <div class="analisis-box">

        <h4>
          Explicación matemática
        </h4>

        <p>

          Los números primos son fundamentales
          en criptografía y seguridad informática
          porque permiten construir sistemas
          de cifrado complejos.

        </p>

        <p>

          Muchos algoritmos modernos
          utilizan operaciones matemáticas
          basadas en factorización prima.

        </p>

        <p>

          ${mensaje}

        </p>

    </div>
    `;

};

// PROBLEMA 3
// FIBONACCI + PRIMOS

document.getElementById("btnCombinado").onclick =
function(){

    let cantidad =
    parseInt(
        document.getElementById("cantidad").value
    );

    let resultado =
    document.getElementById("resultadoCombinado");

    // VALIDACIÓN

    if(isNaN(cantidad) || cantidad <= 0){

        resultado.innerHTML =

        `
        <div class="error-box">

            Debes ingresar una cantidad válida.

        </div>
        `;

        return;

    }


    // VARIABLES

    let a = 0;
    let b = 1;
    let c;

    let fibonacciTexto = "";
    let primosTexto = "";

    let cantidadPrimos = 0;

    // GENERAR FIBONACCI

    for(let i = 1; i <= cantidad; i++){

        let numero = b;

        fibonacciTexto += numero + " ";

        // VERIFICAR SI ES PRIMO

        let contador = 0;

        for(let j = 1; j <= numero; j++){

            if(numero % j == 0){

                contador++;

            }

        }

        if(contador == 2){

            cantidadPrimos++;

            primosTexto +=

            `
            <div class="primo-item">

                Fibonacci ${numero}
                → ES PRIMO

            </div>
            `;

        }

        c = a + b;
        a = b;
        b = c;

    }

    // SI NO HAY PRIMOS

    if(primosTexto == ""){

        primosTexto =

        `
        <div class="error-box">

            No se encontraron números primos.

        </div>
        `;

    }

    // RESULTADO FINAL

    resultado.innerHTML =

    `
    <h3>
      ANALISIS COMBINADO
    </h3>

    <div class="resultado-secuencia">

        <h4>
          Secuencia Fibonacci generada
        </h4>

        <p>
          ${fibonacciTexto}
        </p>

    </div>

    <div class="resultado-primos">

        <h4>
          Números primos encontrados
        </h4>

        ${primosTexto}

    </div>

    <div class="resultado-final">

        <h4>
          Total de números primos:
        </h4>

        <span>
          ${cantidadPrimos}
        </span>

    </div>

    <div class="analisis-box">

        <h4>
          Interpretación matemática
        </h4>

        <p>

          Este análisis combina dos conceptos
          matemáticos importantes:
          la Serie de Fibonacci
          y los Números Primos.

        </p>

        <p>

          Algunos valores Fibonacci
          también pueden ser números primos,
          creando relaciones matemáticas
          utilizadas en teoría numérica
          y algoritmos computacionales.

        </p>

    </div>
    `;

};

// EFECTO NAVBAR ACTIVO
window.addEventListener("scroll", function(){

    let navbar =
    document.querySelector(".navbar");

    navbar.classList.toggle(
        "navbar-active",
        window.scrollY > 50
    );

});
