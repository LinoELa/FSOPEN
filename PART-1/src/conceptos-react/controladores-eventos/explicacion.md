# Controladores de Eventos

Los controladores de eventos en React son funciones que se ejecutan cuando ocurre un evento específico (como un clic, cambio de input, etc.).

## Conceptos clave

### 1. **Función vs Llamada de función**

```jsx
// ✅ Correcto - pasar referencia de función
<button onClick={handleClick}>Click me</button>

// ❌ Incorrecto - ejecuta la función inmediatamente
<button onClick={handleClick()}>Click me</button>
```

### 2. **Controladores nombrados vs inline**

```jsx
// Controlador nombrado
const handleClick = () => {
  console.log("clicked");
  setCounter(counter + 1);
};

// Controlador inline
<button onClick={() => setCounter(0)}>Reset</button>;
```

### 3. **Eventos comunes**

- `onClick` - clic del mouse
- `onChange` - cambio en input/select
- `onSubmit` - envío de formulario
- `onMouseOver` - mouse sobre elemento

## Ejemplo práctico

El componente `ControladoresEventos` muestra cómo usar controladores nombrados e inline para manejar el estado de un contador.
