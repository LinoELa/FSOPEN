// Funciones JS
console.log("---------  -------------");

// 2 Unicas formar de declarar una function

console.log("--------- funcion Declaracion ");

function declararion(a, b) {
  return a * b;
}

const resultDeclaration = declararion(2, 6);
console.log(resultDeclaration);
// result ahora es 12

console.log("--------- funcion Expresion ");

const expresion = function (a, b) {
  return (a + b) / 2;
};

const resultExpresion = expresion(2, 5);
console.log(resultExpresion);

// result ahora es 3.5
console.log("---------  -------------");

// definir funcion
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

// llamar funcion
const result = sum(1, 5);
console.log(result);

// Si hay un solo parámetro, podemos excluir los paréntesis de la definición:

const square = (p) => {
  console.log(p);
  return p * p;
};

console.log("--------- Funcion  inline : De una sola expresion -------------");
const squareInline = (p) => p * p;

// Esta forma es particularmente útil cuando se manipulan arrays,
// por ejemplo, cuando se usa el método map:

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
// tSquared ahora es [1, 4, 9]
