// CASO 1. Contador mediante bucle for
document.write("<h2>CASO 1</h2>");

for (let i = 1; i <= 10; i++) {
    document.write(`<p>Contador: ${i}</p>`);
}

// CASO 2. Contador de pares
document.write("<h2>CASO 2</h2>");

for (let i = 0; i <= 10; i += 2) {
    document.write(`<p>Contador: ${i}</p>`);
}

// CASO 3. Contador de decremento
document.write("<h2>CASO 3</h2>");

for (let i = 10; i >= 0; i--) {
    document.write(`<p>Contador: ${i}</p>`);
}

// CASO 4. serie 2 elevado a n
document.write("<h2> CASO 4 </h2>");

// 2 elevado a 8
let conta = 1;
for (let conta = 1; conta <= 8; conta++) {
    document.write(`<p>2<sup>${conta}</sup>= ${2 ** conta} </p>`);
}

// CASO 5. Recorrer un array
document.write("<h2> CASO 5 </h2>");

const diasSemana = ["L", "M", "X", "J", "V", "S", "D"];

for (i = 0; i <= diasSemana.length - 1; i++) {
    document.write(diasSemana[i] + "<br><hr>");
}

// CASO 6. Recorrer una cadena
document.write("<h2> CASO 6 </h2>");

const saludo = "Hola Mundo";
let resultadoJS = "";

for (let i = 0; i <= saludo.length - 1; i++) {
    //document.write (saludo[i]+ '<br>');
    resultadoJS = resultadoJS + saludo[i] + "<br>";
}

console.log(resultadoJS);

document.getElementById("resultado").innerHTML = resultadoJS;

// CASO 7. Interrumpir bucle for
document.write("<h2> CASO 7 </h2>");
const stop = 20;

for (let i = 1; i <= 100; i++) {
    document.write(i + " | ");
    if (i === stop) {
        break;
    }
}

// CASO 8. Saltar una repetición de un bucle for
document.write("<h2> CASO 8 </h2>");

// const salto = Number(prompt("Número del 1..100"));
// for (i=1; i<=100;i++){

//     if(i === salto){
//         continue;
//     }

//     document.write( i + " | ");
// }

// CASO 9. for anidados
document.write("<h2> CASO 9 </h2>");

let resultadoHTML = "";

for (i = 0; i <= 4; i++) {
    for (j = 0; j <= 18; j++) {
        // document.write(`[${i},${j}]`);
        resultadoHTML = resultadoHTML + `[${i},${j}] `;
    }
    //document.write("<br>");

    resultadoHTML = resultadoHTML + "<br>";
}

document.getElementById("resultadoCaso9").innerHTML = resultadoHTML;

// console.log(resultadoHTML);

// CASO 10. Break con etiqueta
document.write("<h2> CASO 10 </h2>");

document.write(`<table><tbody>`);
salida: for (let fila = 1; fila <= 10; fila++) {
    document.write(`<tr>`);

    for (columna = 1; columna <= 10; columna++) {
        document.write(`<td>${fila * columna}</td>`);

        if (fila == 5 && columna == 4) {
            // Cerramos el </tr> aunque los navegadores modernos tengan la capcidad de completar las tablas
            document.write(`</tbody></table>`);
            break salida;
        }
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);

// CASO 11. for...in con objetos
document.write("<h2> CASO 11 </h2>");

//!   El estado del objeto es el conjunto de valores que toman sus propiedades
// !  clave, valor
const persona = {
    nombre: "Isa",
    edad: "31",
    sexo: "mujer",
};

let descripcionPersona = "";

// ! Recorre el objeto persona
for (let i in persona) {
    //descripcionPersona = descripcionPersona + persona[i] + "<br>";
    // += es un operador de asignación y adición
    // Persona[i] es el valor de la pareja clave/valor
    // i es el clave de la pareja clave/valor
    descripcionPersona += `<strong>${i}</strong>` + ": " + persona[i] + "<br>";
}

//document.write(descripcionPersona);
document.getElementById("resultadoObjeto").innerHTML = descripcionPersona;

//CASO 12. For .. in con aray

document.write("<h2> CASO 12 </h2>");

const temp = [7, 21, 32, 8, 8, 12];

for (let i in temp) {
    document.write(`${i}: ºº         ${temp[i]} | `);
}

//CASO 13. Diferencia entre for .. in array semi-vacios

document.write("<h2> CASO 13 </h2>");

const arraySemiVacio = []; // array vacio

arraySemiVacio[4] = "Hola"; // array semi-vacio
// [,,, "hola"];

console.log(arraySemiVacio[1]);
console.log(arraySemiVacio[4]);

for (let i = 0; i <= arraySemiVacio.length - 1; i++) {
    document.write(arraySemiVacio[i] + "<br>");
}

for (let i in arraySemiVacio) {
    document.write(arraySemiVacio[i] + "<br>");
}
//CASO 14 For.. of

document.write("<h2> CASO 14 </h2>");

const array = [4, 6, 2];

for (let i in array) {
    document.write(i + "<br>");
    //for in muestra los indices de array
}

for (let i of array) {
    document.write(i + "<br>");
    //for in muestra lis valores del array
}
