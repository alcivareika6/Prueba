// CASO 1. Variable no asignada
console.log("\n\n___\nCASO 1:\n");
let miPrimeraVariable; // declaracion de variable
console.log(miPrimeraVariable);

// CASO 2. Asignacion de vairable
console.log("\n\n___\nCASO 2:\n");
miPrimeraVariable = "Soy un texto"; // asiganacion de variable
console.log(miPrimeraVariable);

// CASO 3. Reasignar un nuevo valor a una variable
console.log("\n\n___\nCASO 3:\n");
miPrimeraVariable = "Ahora soy otro texto";
console.log(miPrimeraVariable);

// CASO 4. Asignar a una variable el resultado de una operacion
console.log("\n\n___\nCASO 4:\n");
let numeroA = 4;
console.log(numeroA);

let numeroB = -2.5;
console.log(numeroB);

let suma = numeroA + numeroB;
console.log(suma);

console.log(numeroA + " + " + numeroB + " = " + suma);

// CASO 5. Concatenar textos y variables
console.log("\n\n___\nCASO 5:\n");
let nombre = "Diego";

console.log("Hola " + nombre + ". ¿Qué tal?");

// CASO 6. Variables booleanas
console.log("\n\n___\nCASO 6:\n");
let estoyVivo = true;

console.log(estoyVivo);

let condicionA = 3 < 7;
console.log(condicionA);

let condicionB = 3 > 7;
console.log(condicionB);

// CASO 7. Array
console.log("\n\n___\nCASO 7:\n");
let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(semana[1]);
console.log(semana[2]);

let idDia = 2;

let ingreso = [100, 300, 50, 200, 100, 0, 0];
console.log("Los ingresos del " + semana[2] + "fueron" + ingreso[2] + "€.");

// CASO 8. Objetos literales
console.log("\n\n___\nCASO 8:\n");

let persona = {
    nombre: "Pedro",
    apellido1: "Soler",
    apellidos: "Martinez",
    edad: 35,
};

console.log(persona.nombre);
console.log(perdona.apellido1);
console.log(persona.apellido2);

console.log("El nombre de la persona es: " + persona.nombre + "" + persona.apellido.apellido01 + " " + persona2);

// CASO 9. El tipo de una variable
console.log("\n\n___\nCASO 9:\n");

let iva = 0.16;
console.log(typeof iva);
let iva = "0.16";
console.log(typeof iva);

// CASO 10.Constante
console.log("\n\n___\nCASO 10:\n");

const PI = 301416;
let radio = 3;
let perimetro = 2 * PI * radio;
console.log("El perimetro del un circuito de radio " + radio + "es : " + perimetro);
S;
