import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

// ===================================================================================
/*
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  //{ </StrictMode>, }
);
*/
// ===================================================================================

// Rederizado de componentes

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  { id: 2, content: "Browser can execute only JavaScript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App notes={notes} />
  //{ </StrictMode>, }
);

// -----------------------------------------------------------------------------------
// MAPS
const result = notes.map((note) => note.id);
const result1 = notes.map((note) => <li key={note.id}>{note.content}</li>);

console.log(result);
console.log(result1);

// ===================================================================================
