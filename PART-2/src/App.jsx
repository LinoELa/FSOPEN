// App.jsx
import { useState } from "react";
import Note from "./components/Note";

// ✅ App recibe opcionalmente `notes` desde fuera (Index.jsx) y cae a []
const App = ({ notes: initialNotes = [] }) => {
  // ----------------------------
  // 🧠 Estado del componente
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  // ----------------------------

  // ➕ Añadir nota
  const handleAddNote = (event) => {
    event.preventDefault();

    const noteObject = {
      id: String(Date.now()), // id único sencillo
      content: newNote.trim(),
      important: Math.random() < 0.5,
    };

    if (!noteObject.content) return; // evita añadir vacíos

    setNotes((prev) => prev.concat(noteObject));
    console.log("Note added:", noteObject);
    setNewNote("");
  };

  // 🎯 Botón “demo” (solo imprime en consola)
  const handleClick = () => {
    console.log("clicked");
  };

  // ✍️ Controlador del input (componente controlado)
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  // 🔎 Filtrado: todas vs solo importantes
  const notesToShow = showAll ? notes : notes.filter((n) => n.important);

  // =========================
  // ⬇️ Render (con comentarios)
  // =========================
  return (
    <>
      {/* 🏷️ Título principal */}
      <h1>Notes</h1>

      {/* 🔘 Toggle: ver todas / solo importantes */}
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setShowAll((s) => !s)}>
          {/* Texto dinámico según el estado */}
          show {showAll ? "important" : "all"}
        </button>
      </div>

      {/* 📋 Listado de notas */}
      <ul>
        {notesToShow.map((note) => (
          // 🔹 Cada nota se renderiza con <Note />
          // 🔑 Clave única para que React identifique el ítem
          <Note key={note.id} note={note} />
        ))}
      </ul>

      {/* 📝 Formulario para agregar nueva nota */}
      <form onSubmit={handleAddNote} style={{ marginTop: 12 }}>
        {/* Input controlado: su valor viene del estado */}
        <input
          value={newNote}
          onChange={handleNoteChange} // se ejecuta al teclear
          placeholder="Write your note..."
        />
        {/* Botón de envío del formulario */}
        <button type="submit" style={{ marginLeft: 8 }}>
          Submit
        </button>
      </form>

      {/* 🎛️ Botón extra para probar controladores */}
      <div style={{ marginTop: 12 }}>
        <button onClick={handleClick}>Clicked</button>
      </div>
    </>
  );
};

export default App;
