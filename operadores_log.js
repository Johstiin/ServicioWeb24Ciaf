console.log("--------")
console.log("operadores logicos");

console.log("operador AND &&");
console.log(false && false);
console.log(true && false);
console.log(false && true);
console.log(true && true);

console.log("operador OR ||");
console.log(false || false);
console.log(false || false);
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log("operador NOT !");
console.log(!false);
console.log(!false);
console.log(!true);
console.log(!true);

let counter = 10;
if (counter > 100) {
    console.log(`el valor del  counter es: ${counter} es mayor que 100 `);
    console.log(`el valor del  counter es: ${counter} es menor que 100 `);   
}

counter > 100 ? console.log("counter > 100"): console.log("counter < 100")