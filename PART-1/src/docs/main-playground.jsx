import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../App.jsx";

const container = document.getElementById("root");
createRoot(container).render(<App />);

/* ========= MODO MANUAL (opcional) =========
import { AppManual } from "./demos/AppManual.jsx";

const root = createRoot(document.getElementById("root"));
let counter = 1;
const refresh = () => root.render(<AppManual counter={counter} />);

refresh();
setInterval(() => {
  counter += 1;
  refresh();
}, 1000);
=========================================== */
