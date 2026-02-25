let a = 0;
let b = 1;

for (let elemento = 1; elemento <= 200; elemento++) {
    document.write(`${a} <br>`);
    let siguiente = a + b;
    a = b;
    b = siguiente;
}
