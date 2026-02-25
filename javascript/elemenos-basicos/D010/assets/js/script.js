// CASO 1. Función que devuelve un resultado

console.clear();

function doble(num) {
    return num * 2;
}
console.log(doble(1));

// CASO 2. Valor de una función asignado a una variable

function potenciaDe2(num) {
    return 2 ** num;
}

let resultado = potenciaDe2(4);

console.log(resultado);
//CASO 3. Funcion que no devuelven valor
function triple(num) {
    console.log(`El triple de ${num} es ${3 * num}.`);
}

triple(7);
triple(100);
triple(222);
//Caso 4.
function textorojo() {
    document.body.className = "rojo";
}
//CASO 5. Evento onchange.
function cambiarcolor() {
    let color = document.querySelector(".selectorColor").value;
}

function cambiarcolorMejorada(color) {
    document.body.className;
}

function colorBola(color) {
    document.getElementsById("caja-redonda").className = "cajaResultado" + color;
}
