// --------- INICIO COMPONENTE DE REACT ---------

const Hello = (props) => {
  // FuncioN auxiliar del componente
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old{" "}
      </p>
      <p>So you were born in {bornYear()}</p>
    </div>
  );
};

// --------- FIN COMPONENTE DE REACT ---------

const App = () => {
  const name = "Peter";
  const age = 29;

  return (
    <div>
      <h1>Grettings</h1>
      <Hello name={name} age={age} />
      <Hello name="Maya" age={26 + 10} />
    </div>
  );
};

export default App;
