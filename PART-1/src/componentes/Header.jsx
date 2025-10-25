export default function Header({ title, subtitle }) {
  return (
    <header style={{ 
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: "2px solid #eee"
    }}>
      <h1 style={{ margin: 0, color: "#333" }}>{title}</h1>
      {subtitle && <p style={{ margin: "5px 0 0 0", color: "#666" }}>{subtitle}</p>}
    </header>
  );
}
