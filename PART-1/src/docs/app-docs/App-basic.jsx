import "./App.css";

// ################# Componente App Simple #################
export function AppSimple() {
  console.log("Hello from AppSimple Component");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log("APP Now : ", now, a + b);
  return (
    <>
      <p>Bienvenido {now.toString()}</p>
      <p>
        {a} + {b} = {a + b}
      </p>
    </>
  );
}

// ################# Componente App Multiple #################
function HelloMultiple() {
  return (
    <div>
      <h2>Hello Component</h2>
    </div>
  );
}

export function AppMultiple() {
  console.log("Hello from AppMultiple Component");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log("APP Now : ", now, a + b);
  return (
    <main>
      <h1>Componentes Múltiples</h1>
      <p>Texto introductorio que es solo inline.</p>
      <HelloMultiple />
      <HelloMultiple />
    </main>
  );
}

// ################# Props: pasar datos a componentes #################
function HelloProps({ name, age, time }) {
  console.log("props en Hello: ", { name, age, time });
  return (
    <div>
      <h2>
        Hello {name}, you are {age} years old
      </h2>
    </div>
  );
}

export function AppProps() {
  console.log("Hello from AppProps Component");
  const now = new Date();
  const name = "Lino";
  const age = 20;
  return (
    <main>
      <h1>Props</h1>
	  <hello>
      <HelloProps name={name} age={age} time={now} />
      <HelloProps name="Antonio" age={20 - 5} />
    </main>
  );
}

// ################# No renderizar Objetos #################
export function AppNoRender() {
  const noRenderizado = "Objeto No Renderizado";
  const friends = [
    { name: "Lino", age: 20 },
    { name: "Ana", age: 25 },
  ];
  return (
    <div>
      <h1>{noRenderizado}</h1>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </div>
  );
}

// ################# Export por defecto (el que correrá React) #################
// export default AppProps;

// Usar otros Componentes para probarlos

// export default AppSimple; // Props

// export default AppMultiple; // Múltiples Componentes

export default AppNoRender; // No renderizar Objetos
