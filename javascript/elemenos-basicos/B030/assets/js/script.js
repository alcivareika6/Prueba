//CASO 1. IF con una sola instruccion

// const anio = prompt("¿En que año llego el hombre a la Luna?");

// let mensaje = "Es incorrecto";
// En un if las llaves no son obligatorias si solo contienen una instruccion
// if (anio == 1969) {
//     mensaje = "¡Perfecto! Te lo sabes.";
// }

// document.write(mensaje);
//Caso 2.IF con varias instrucciones

//let puntos = 0;
// const dia = prompt("¿ cuantos dias tiene un año bisiesto?");
// if (dia == 366) {
//     document.write('<p class ="acierto">¡MUY BIEN!</p>');
//     puntos += 1; //puntos = puntos + 1;
// }
// document.write(`tienes ${puntos} punto.`);

//CASO 3. La clausula ELSE
// const solucion = prompt(`¿Cuanto es 3x4?`);

// if (solucion == 12) {
//     document.write('<span class="icom"><i  class="bi bi-emoji-smile"></i>¡CORRECTO!</span>');
// } else {
//     document.write("NO ES CORRECTO😘");
// }

//CASO 4. La clausula else if
// const temperatura = prompt("¿Que temperatura hace hoy?");

// if (temperatura < 0) document.write("Hace mas frio, lleva ropa de abrigo");
// else if (temperatura < 10) document.write("Hace frio. lleva una chaqueta");
// else if (temperatura < 20) document.write("temperatura agradable, usa un sueter");
// else if (temperatura < 30) document.write("Empieza hacer calor, dia de senderismo");
// else if (temperatura < 40) document.write("Mucha calor, lleva una top");
// else document.write("No se puede vivir");

//CASO 5. Operador termario

// const edad = prompt("¿Que edad tienes?");

// ? la interrogante equivale a "entonces"
// : equivale a "sino"
// let acceso = edad >= 18 ? "Puede Pasar" : "No puedes pasar";

// document.write(acceso);

//CASO 6. Multiples operadores ternarios.

// const num = prompt("introduce el numero");

// let tipoNum = num < 0 ? "El numero es negativo" : num == 0 ? "El nuemro es cero" : "Es positivo";
