//caso 1. null

let nula = null;
//null es un tipo de dato premitivo (no es un objeto)

document.write(nula + "<br>");
//caso 2. undifined

let indefinida; // declaracion sin asignacion
//undefined es un tipo de dato primitivo (no es un objeto)
document.write(indefinida + "<br>");

//CASO 3. Comparar null con undefined.

document.write(nula == indefinida);
document.write("<br>");

document.write(nula === indefinida);
document.write("<br>");

//caso 4 Error historico de JavaScript

document.write((typeof indefinida) + "<br>");
document.write((typeof nula) + "<br>");
