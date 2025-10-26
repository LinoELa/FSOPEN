import { useState } from "react";

export default function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <span style={{ marginRight: 8 }}>{left}</span>
        <button
          onClick={handleLeftClick}
          style={{
            marginRight: 8,
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          left
        </button>
        <button
          onClick={handleRightClick}
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          right
        </button>
        <span style={{ marginLeft: 8 }}>{right}</span>
      </div>
      <p>{allClicks.join(" ")}</p>
      <p>Total : {total}</p>
    </div>
  );
}
