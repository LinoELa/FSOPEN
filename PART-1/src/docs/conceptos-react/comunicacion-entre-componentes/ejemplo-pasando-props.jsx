import Button from "../../componentes/Button.jsx";

// Componente que muestra props destructuradas
const Saludo = ({ nombre, edad, ciudad }) => {
  const añoNacimiento = new Date().getFullYear() - edad;
  
  return (
    <div style={{ 
      padding: 15, 
      backgroundColor: "#f9f9f9", 
      borderRadius: 8,
      border: "1px solid #ddd"
    }}>
      <h4>¡Hola {nombre}!</h4>
      <p>Tienes {edad} años</p>
      <p>Vives en {ciudad}</p>
      <p>Probablemente naciste en {añoNacimiento}</p>
    </div>
  );
};

export default function EjemploPasandoProps() {
  return (
    <div>
      <h3>Ejemplo: Pasando Props</h3>
      <p>Los componentes pueden recibir datos del componente padre:</p>
      
      <Saludo 
        nombre="María" 
        edad={25} 
        ciudad="Madrid" 
      />
      
      <Saludo 
        nombre="Carlos" 
        edad={30} 
        ciudad="Barcelona" 
      />
      
      <div style={{ marginTop: 20 }}>
        <h4>Conceptos mostrados:</h4>
        <ul>
          <li><strong>Props:</strong> Datos pasados del padre al hijo</li>
          <li><strong>Destructuring:</strong> Extraer propiedades del objeto props</li>
          <li><strong>Reutilización:</strong> Mismo componente con diferentes datos</li>
        </ul>
      </div>
    </div>
  );
}
