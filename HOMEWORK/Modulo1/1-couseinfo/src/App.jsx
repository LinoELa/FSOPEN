import "./App.css";

// -----------------------------------------------------------

const Header = (props) => {
  console.log("Entrada Header");

  return (
    <div>
      <h1>{props.course1}</h1>
    </div>
  );
};

// -----------------------------------------------------------

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Total : {props.total}</p>
    </>
  );
};

// -----------------------------------------------------------

function App() {
  const course = "Half Stack application development";
  console.log("Salida Header");

  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course1={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;

//

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
