import { useState } from "react";

import "./App.css";

function App0() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Practice </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// export default App0;
// export default App0;

//----------------------------------------------------------------------------------------"

const App = () => {
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  const tu = ["tu", "el", "ella"];
  return (
    <>
      <h3>Gretting </h3>
      <h1>
        {friends[0].name} {friends[0].age}
      </h1>
      <h1>{tu}</h1>
    </>
  );
};
export default App;
