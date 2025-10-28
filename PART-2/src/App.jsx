import Note from "./components/Note";

// -----------------------------------------------------------------------------------

// DESESTRUCUTRARION DE MODULOS

const App = ({ notes }) => {
  console.log("App works 2");
  return (
    <>
      <h1>Notes</h1>

      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
};
// -----------------------------------------------------------------------------------

/*
const App = (props) => {
  const { notes } = props;

  return (
    <>
      <h1>Notes</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </>
  );
};

*/

// -----------------------------------------------------------------------------------

// Rederizado de componentes

function AppRederizado(props) {
  const { notes } = props;

  return (
    <>
      <h1>Vite + React</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </>
  );
}

// -----------------------------------------------------------------------------------

/*
function App({ notes }) {
  return (
    <>
      <AppRederizado notes={notes} />
    </>
  );
}
*/
export default App;
