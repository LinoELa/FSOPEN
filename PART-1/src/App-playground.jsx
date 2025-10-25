// App.jsx
import { useState } from "react";
import Nav from "./components/Nav.jsx";

// Demos
import Hello from "./demos/Hello.jsx";
import HelloProps from "./demos/HelloProps.jsx";
import CounterDisplay from "./components/CounterDisplay.jsx";
import AppHookBasic from "./demos/AppHookBasic.jsx";
import AppHookAuto from "./demos/AppHookAuto.jsx";
import EventsDemo from "./demos/EventsDemo.jsx";
import EventHandlerIsFunctionDemo from "./demos/EventHandlerIsFunctionDemo.jsx";
import LiftingStateDemo from "./demos/LiftingStateDemo.jsx";
import RerenderLogsDemo from "./demos/RerenderLogsDemo.jsx";

const SECTIONS = [
  { key: "hello", label: "Hello (props)" },
  { key: "helloProps", label: "Hello (destruct.)" },
  { key: "counterDisplay", label: "Re-render manual (solo props)" },
  { key: "hookBasic", label: "Hook básico (+1)" },
  { key: "hookAuto", label: "Hook auto-incremento" },
  { key: "events", label: "Control de eventos" },
  { key: "eventIsFunc", label: "Handler es función" },
  { key: "lifting", label: "Lifting state (hijos)" },
  { key: "rerenderLogs", label: "Re-render con logs" },
];

export default function App() {
  const [active, setActive] = useState("hello");
  const name = "Peter";
  const age = 29;
  const demoCounter = 0;

  return (
    <div style={{ fontFamily: "system-ui", lineHeight: 1.45, padding: 16 }}>
      <h1>React Playground</h1>
      <Nav sections={SECTIONS} active={active} onChange={setActive} />

      {active === "hello" && <Hello name={name} age={age} />}
      {active === "helloProps" && <HelloProps name="Maya" age={26 + 10} />}
      {active === "counterDisplay" && (
        <section>
          <h2>Re-render manual (solo lectura)</h2>
          <CounterDisplay counter={demoCounter} />
          <p style={{ color: "#666" }}>
            Cambia este valor desde <code>main.jsx</code> con
            {" "}re-render manual si activas el modo opcional.
          </p>
        </section>
      )}
      {active === "hookBasic" && (
        <section>
          <h2>Hook básico</h2>
          <AppHookBasic />
        </section>
      )}
      {active === "hookAuto" && (
        <section>
          <h2>Hook auto-incremento con stop</h2>
          <AppHookAuto />
        </section>
      )}
      {active === "events" && (
        <section>
          <h2>Control de eventos</h2>
          <EventsDemo />
        </section>
      )}
      {active === "eventIsFunc" && (
        <section>
          <h2>Un controlador de eventos es una función</h2>
          <EventHandlerIsFunctionDemo />
        </section>
      )}
      {active === "lifting" && (
        <section>
          <h2>Pasando estado a componentes hijos</h2>
          <LiftingStateDemo />
        </section>
      )}
      {active === "rerenderLogs" && (
        <section>
          <h2>Re-render por cambios en el estado (logs)</h2>
          <RerenderLogsDemo />
        </section>
      )}
    </div>
  );
}
