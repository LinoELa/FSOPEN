console.log("----------- ARRAY -----------------");


let arrayVar = [1, 2, 3, 4, 5];

// ARRAYS
const t = [1, -1, 3];

t.push(5);

console.log(t.length); // se imprime 4
console.log(t[1]); // se imprime -1

t.forEach((value) => {
  console.log(value); // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
});

// concat, que no agrega el elemento al array,
// pero crea un nuevo array en la que se incluyen el contenido del array anterior y el nuevo elemento.
const tConcat = [1, -1, 3];

const tConcat2 = t.concat(5); // crea un nuevo array

console.log(tConcat); // se imprime [1, -1, 3]
console.log(tConcat2); // se imprime [1, -1, 3, 5]

const m2 = t.map((value) => "<li>" + value + "</li>");
console.log(m2);
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
