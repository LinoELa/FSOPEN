export default function Button({ onClick, text, disabled = false, style = {} }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{ 
        marginRight: 8, 
        padding: "8px 16px",
        borderRadius: 6,
        border: "2px solid #007bff",
        backgroundColor: disabled ? "#6c757d" : "#007bff",
        color: "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontSize: 14,
        fontWeight: "500",
        transition: "all 0.2s",
        ...style 
      }}
      onMouseOver={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = "#0056b3";
          e.target.style.borderColor = "#0056b3";
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = "#007bff";
          e.target.style.borderColor = "#007bff";
        }
      }}
    >
      {text}
    </button>
  );
}
