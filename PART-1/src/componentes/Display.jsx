export default function Display({ counter, label = "Contador" }) {
  return (
    <div style={{ 
      fontSize: 18, 
      fontWeight: "bold",
      padding: "10px",
      backgroundColor: "#742222ff",
      borderRadius: 4,
      marginBottom: 10
    }}>
      {label}: {counter}
    </div>
  );
}
