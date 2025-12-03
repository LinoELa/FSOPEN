import "./App.css";

// -----------------------------------------------------------

const Header = (props) => {
  console.log("Header");

  return (
    <div>
      <h1>{props.course1}</h1>
    </div>
  );
};

// -----------------------------------------------------------

const Part = ({ objetoNombre, objetoExercise }) => {
  console.log("Part");

  return (
    <>
      <p>
        {objetoNombre} {objetoExercise}
      </p>
    </>
  );
};

// -----------------------------------------------------------

const Content = ({ objetoContent }) => {
  console.log("Content");

  return (
    <>
      <Part
        objetoNombre={objetoContent[0].nombre}
        objetoExercise={objetoContent[0].exercises}
      />
      <Part
        objetoNombre={objetoContent[1].nombre}
        objetoExercise={objetoContent[1].exercises}
      />
      <Part
        objetoNombre={objetoContent[2].nombre}
        objetoExercise={objetoContent[2].exercises}
      />
    </>
  );
};

const Total = ({ ObjetoTotal }) => {
  console.log("Total");

  const total =
    ObjetoTotal[0].exercises +
    ObjetoTotal[1].exercises +
    ObjetoTotal[2].exercises;
  return (
    <>
      <p>Total : {total}</p>
    </>
  );
};

// -----------------------------------------------------------

function App() {
  const course = "Half Stack application development";

  const partsApp = [
    { nombre: "Fundamentals of React", exercises: 10 },
    { nombre: "Using props to pass data", exercises: 7 },
    { nombre: "State of a component", exercises: 14 },
  ];
  console.log("App");

  return (
    <div>
      <Header course1={course} />
      <Content objetoContent={partsApp} />
      <Total ObjetoTotal={partsApp} />
    </div>
  );
}

export default App;

// const Content = ... {
//   return (
//     <div>
//       <Part .../>
//       <Part .../>
//       <Part .../>
//     </div>
//   )
// }

// const App = () => {
//   // const-definitions

//   return (
//     <div>
//       <Header course={course} />
//       <Content ... />
//       <Total ... />
//     </div>
//   )
// }

// function App() {
//   const course = "Half Stack application development";
//   const part1 = "Fundamentals of React";
//   const exercises1 = 10;
//   const part2 = "Using props to pass data";
//   const exercises2 = 7;
//   const part3 = "State of a component";
//   const exercises3 = 14;

//   return (
//     <>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </>
//   );
// }
