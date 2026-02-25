//CASO 1. Contador mediante bucle for

for (let i = 0; i <= 11; i++) {
    document.write(`<p>Contador:${i}</p>`);
}

//CASO 2. contador de pares

document.write("<h2>caso 2</h2>");

for (let i = 0; i <= 100; i += 2) {
    document.write(`<p>Contador:${i}</p>`);
}

//CASO 3. Contador de decreto

document.write("<h2>caso 3</h2>");

for (let i = 10; i >= 0; i--) {
    document.write(`<p>contador:${i}</p>`);
}

//CASO 4. Serie dos elevado a N

document.write("<h2>caso 4</h2>");

for (let i = 2; i <= 55; i += 1 + 1 + 2) {
    document.write(`<p>contador:${i}</p>`);
}

//CASO 5. Recorrer un array

const diasSemanas = ["l", "m", "m", "j", "v", "s", "d"];

for (let i = 0; i <= 6; i++) {
    document.write(diasSemanas[i] + `<br><hr>`);
}
//CASO 6. Recorrer una cadena

const saludo = "hola";
let resultadosJS = "";

for (let i = 0; i <= saludo.length - 1; i++) {
    //document.write(saludo[i] + "<br>");

    resultadosJS = resultadosJS + saludo[i] + "<br>";
}
console.log(resultadosJS);
document.getElementById("resultado");
//caso 7. Interrumpir blucle for

const stop = 20;

for (let i = 1; i <= 100; i++) {
    document.write(i + " | ");

    if (i === stop) {
        break;
    }
}

//CASO 8. Saltar una repaticion de un blicle for

document.write("<h2>caso 8</h2>");

// // const salto = Number(prompt("Num del 1..100"));
// // for (i = 1; i <= 100; i++) {
// //     if (i === salto) {
// //         continue;
// //     }

// //     document.write(i + " | ");
// }

//caso 9. For aninados

document.write("<h2> caso 9</h2>");

// let resultadoHTML = "";

// for (let i = 0; i <= 4; i++) {
//     for (let j = 0; j <= 2; j++) {
//         //document.write(`[${i},${j}]`);

//         resultadoHTML = resultadoHTML + `[${i},${j}] `;
//     }
//     //document.write("<br>");
//     resultadoHTML = resultadoHTML + "<br>";
// }

// console.log(resultadoHTML);
// document.getElementById("resultadoCaso9").innerHTML = resultadoHTML;
//CASO 11. For .. in con objetos

document.write("<h2> caso 11</h2>");
const persona = {
    nombre: "Jamileth",
    edad: "11",
    sexo: "mujer",
};
let descripcionPersona = "";
for (let i in persona) {
    //descripcionPersona = descripcionPersona + persona[i] + "<br>";
    //+= es un operador de asignacion y adicion
    //persona [i] es el,valor de las pajera clave/valor
    //i es la clave de las parejas clave/valor
    descripcionPersona += "<strong>" + i + "</strong>" + ":" + persona[i] + "<br>";
}
//document.write(descripcionPersona);
document.getElementById("resultadoCaso11").innerHTML = descripcionPersona;
