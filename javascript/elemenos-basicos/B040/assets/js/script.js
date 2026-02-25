//CASO 1. Ejemplo basico

const mayorEdad = confirm("Confirma si eres mayor de edad");

if (mayorEdad) document.write("puedes pasar");
else document.write("no puedes pasar");

//CASO 2. Ejemplo abreviado.

confirm("confirma si eres mayor de edad") ? document.write("PASA") : document.write("NO PASAS");
