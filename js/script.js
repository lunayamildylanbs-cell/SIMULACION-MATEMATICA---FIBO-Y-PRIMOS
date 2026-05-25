// FIBONACCI

document.getElementById("btnFibonacci").onclick = function () {

    let meses = parseInt(document.getElementById("meses").value);

    let resultado = document.getElementById("resultadoFibonacci");

    if (isNaN(meses) || meses <= 0) {

        resultado.innerHTML =
        "Por favor, ingresa una cantidad válida de meses.";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let texto = "";
    let suma = 0;

    for (let i = 1; i <= meses; i++) {

        texto +=
        "Mes " + i + " → Bs. " + b + "<br>";

        suma += b;

        c = a + b;
        a = b;
        b = c;
    }

    texto +=
    "<br><strong>Total ahorrado: Bs. " + suma + "</strong>";

    resultado.innerHTML = texto;
};

// NÚMEROS PRIMOS

document.getElementById("btnPrimo").onclick = function () {

    let numero =
    parseInt(document.getElementById("numeroPrimo").value);

    let resultado =
    document.getElementById("resultadoPrimo");

    if (isNaN(numero) || numero <= 0) {

        resultado.innerHTML =
        "Por favor, ingresa un número válido.";

        return;
    }

    let contador = 0;

    for (let i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            contador++;
        }
    }

    if (contador == 2) {

        resultado.innerHTML =
        "El número <strong>" + numero +
        "</strong> es primo.";

    } else {

        resultado.innerHTML =
        "El número <strong>" + numero +
        "</strong> no es primo.";
    }

};

// FIBONACCI + PRIMOS

document.getElementById("btnCombinado").onclick =
function () {

    let cantidad =
    parseInt(document.getElementById("cantidad").value);

    let resultado =
    document.getElementById("resultadoCombinado");

    if (isNaN(cantidad) || cantidad <= 0) {

        resultado.innerHTML =
        "Ingresa una cantidad válida.";

        return;
    }

    let a = 0;
    let b = 1;
    let c;

    let texto = "";

    for (let i = 1; i <= cantidad; i++) {

        let numero = b;

        let contador = 0;

        for (let j = 1; j <= numero; j++) {

            if (numero % j == 0) {
                contador++;
            }

        }

        if (contador == 2) {

            texto +=
            "Fibonacci: <strong>" + numero +
            "</strong> → Es primo<br>";

        } else {

            texto +=
            "Fibonacci: " + numero +
            " → No es primo<br>";
        }

        c = a + b;
        a = b;
        b = c;
    }

    resultado.innerHTML = texto;

};
