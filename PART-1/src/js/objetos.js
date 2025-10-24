console.log("------------ OBJETO ----------------");

let objectVar = {
  name: "Alice",
  age: 30,
  departamento: "Informatica",
  accion: "Desarrollo",
};

const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};

//Referencia a las propiedades de un objeto usando la notación "de punto", o usando corchetes:

// referencia a objetos
console.log(object1.name); // se imprime Arto Hellas

const fieldName = "age";

console.log(object1[fieldName]); // se imprime 35

//Puedes agregar propiedades a un objeto sobre la marcha usando notación de puntos o corchetes
object1.address = "Helsinki";
object1["secret number"] = 12341;

console.log("------------ OBJETO ----------------");
