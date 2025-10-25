// App.jsx
import { useState } from "react";
import Nav from "./componentes/Nav.jsx";
import Header from "./componentes/Header.jsx";

// Importar todos los conceptos
import ControladoresEventos from "./conceptos-react/controladores-eventos/index.jsx";
import ComunicacionEntreComponentes from "./conceptos-react/comunicacion-entre-componentes/index.jsx";
import EjemploPasandoProps from "./conceptos-react/comunicacion-entre-componentes/ejemplo-pasando-props.jsx";
import EstadoCompartido from "./conceptos-react/estado-compartido/index.jsx";
import EjemploEstadoCompartido from "./conceptos-react/estado-compartido/ejemplo-estado-compartido.jsx";
import RefactorizacionComponentes from "./conceptos-react/refactorizacion-componentes/index.jsx";
import EjemploDisplayButton from "./conceptos-react/refactorizacion-componentes/ejemplo-display-button.jsx";
import UseStateBasico from "./conceptos-react/hooks/useState-basico.jsx";
import UseEffectAutoIncremento from "./conceptos-react/hooks/useEffect-autoIncremento.jsx";
import UseStateConLogs from "./conceptos-react/hooks/useState-con-logs.jsx";
import UseEffectMultiple from "./conceptos-react/hooks/useEffect-multiple.jsx";

const SECTIONS = [
  // Controladores de eventos
  {
    key: "controladores-eventos",
    label: "Controladores de Eventos",
    category: "Eventos",
  },

  // Comunicación entre componentes
  {
    key: "comunicacion-entre-componentes",
    label: "Comunicación entre Componentes",
    category: "Props",
  },
  {
    key: "ejemplo-pasando-props",
    label: "Ejemplo: Pasando Props",
    category: "Props",
  },

  // Estado compartido
  { key: "estado-compartido", label: "Estado Compartido", category: "Estado" },
  {
    key: "ejemplo-estado-compartido",
    label: "Ejemplo: Estado Compartido",
    category: "Estado",
  },

  // Refactorización
  {
    key: "refactorizacion-componentes",
    label: "Refactorización de Componentes",
    category: "Arquitectura",
  },
  {
    key: "ejemplo-display-button",
    label: "Ejemplo: Display + Button",
    category: "Arquitectura",
  },

  // Hooks
  { key: "useState-basico", label: "useState Básico", category: "Hooks" },
  {
    key: "useEffect-autoIncremento",
    label: "useEffect Auto-incremento",
    category: "Hooks",
  },
  { key: "useState-con-logs", label: "useState con Logs", category: "Hooks" },
  { key: "useEffect-multiple", label: "useEffect Múltiple", category: "Hooks" },
];

export default function App() {
  const [active, setActive] = useState("controladores-eventos");

  return (
    <div style={{ fontFamily: "system-ui", lineHeight: 1.45, padding: 16 }}>
      <Header
        title="React Conceptos"
        subtitle="Aprende conceptos fundamentales de React con ejemplos interactivos"
      />

      <div
        style={{
          color: "#e7f3ff",
          // backgroundColor: "#0066cc",
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
          border: "1px solid #b3d9ff",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", color: "#0066cc" }}>
          🚀 Cómo usar este playground:
        </h4>
        <ol style={{ margin: 0, paddingLeft: 20 }}>
          <li>
            <strong>Navega</strong> entre las categorías usando los botones de
            arriba
          </li>
          <li>
            <strong>Interactúa</strong> con cada demo para entender los
            conceptos
          </li>
          <li>
            <strong>Abre la consola</strong> (F12) para ver los logs de
            debugging
          </li>
          <li>
            <strong>Lee las explicaciones</strong> en cada sección
          </li>
        </ol>
      </div>

      <Nav sections={SECTIONS} active={active} onChange={setActive} />

      {/* Controladores de eventos */}
      {active === "controladores-eventos" && <ControladoresEventos />}

      {/* Comunicación entre componentes */}
      {active === "comunicacion-entre-componentes" && (
        <ComunicacionEntreComponentes />
      )}
      {active === "ejemplo-pasando-props" && <EjemploPasandoProps />}

      {/* Estado compartido */}
      {active === "estado-compartido" && <EstadoCompartido />}
      {active === "ejemplo-estado-compartido" && <EjemploEstadoCompartido />}

      {/* Refactorización */}
      {active === "refactorizacion-componentes" && (
        <RefactorizacionComponentes />
      )}
      {active === "ejemplo-display-button" && <EjemploDisplayButton />}

      {/* Hooks */}
      {active === "useState-basico" && <UseStateBasico />}
      {active === "useEffect-autoIncremento" && <UseEffectAutoIncremento />}
      {active === "useState-con-logs" && <UseStateConLogs />}
      {active === "useEffect-multiple" && <UseEffectMultiple />}
    </div>
  );
}
