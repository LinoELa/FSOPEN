// Podemos asignar métodos a un objeto definiendo propiedades que son funciones:

// this : es una palabra clave que hace referencia al objeto que está ejecutando el código actual,
// también conocido como contexto de ejecución

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",

  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};

arto.greet(); // se imprime "hello, my name is Arto Hellas"
console.log("----------------------");

// Los métodos se pueden asignar a los objetos incluso después de la creación del objeto:

const arto1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.growOlder = function () {
  this.age += 1;
};

console.log(arto.age); // se imprime 35
arto.growOlder();
console.log(arto.age); // se imprime 36
console.log("----------------------");

// Modifiquemos ligeramente el objeto:

const arto2 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },

  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.doAddition(1, 4); // se imprime 5

const referenceToAddition = arto.doAddition;
referenceToAddition(10, 15); // se imprime 25

console.log("----------------------");

// Ahora el objeto tiene el método doAddition que calcula la suma de números que se le da como parámetros
// Ahora el objeto tiene el método doAddition que calcula la suma de números que se le da como parámetros.
// El método se llama de la forma habitual, utilizando el objeto arto.doAddition(1, 4)
//  o almacenando una referencia de método en una variable y llamando al método a través de
// la variable: referenceToAddition(10, 15).

// Si intentamos hacer lo mismo con el método greet nos encontramos con un problema:
arto.greet(); // se imprime "hello, my name is Arto Hellas"

const referenceToGreet = arto.greet;
referenceToGreet(); // se imprime "hello, my name is undefined"
console.log("----------------------");
