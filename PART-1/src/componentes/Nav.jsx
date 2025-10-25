export default function Nav({ sections, active, onChange }) {
  // Agrupar secciones por categoría
  const groupedSections = sections.reduce((acc, section) => {
    const category = section.category || "Otros";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(section);
    return acc;
  }, {});

  return (
    <nav style={{ margin: "20px 0" }}>
      {Object.entries(groupedSections).map(([category, categorySections]) => (
        <div key={category} style={{ marginBottom: 20 }}>
          <h3 style={{ 
            margin: "0 0 10px 0", 
            color: "#666", 
            fontSize: 14, 
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            {category}
          </h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 15 }}>
            {categorySections.map((s) => (
              <button
                key={s.key}
                onClick={() => onChange(s.key)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "2px solid #007bff",
                  background: active === s.key ? "#007bff" : "#fff",
                  color: active === s.key ? "#fff" : "#007bff",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: "500",
                  transition: "all 0.2s"
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
