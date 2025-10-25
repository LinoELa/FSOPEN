# React Playground 🚀

Un playground interactivo para aprender conceptos fundamentales de React con ejemplos prácticos organizados por temas.

## 📁 Estructura del proyecto

```text
src/
├─ componentes/
│   ├─ Button.jsx              # Componente botón reutilizable
│   ├─ Display.jsx             # Componente para mostrar contadores
│   ├─ Header.jsx              # Componente de encabezado
│   ├─ Nav.jsx                 # Navegación con categorías
│   └─ CounterDisplay.jsx      # Componente específico para contadores
│
├─ conceptos-react/
│   ├─ controladores-eventos/
│   │    ├─ index.jsx          # Demo de controladores de eventos
│   │    └─ explicacion.md     # Explicación teórica
│   │
│   ├─ comunicacion-entre-componentes/
│   │    ├─ index.jsx          # Comunicación padre-hijo
│   │    └─ ejemplo-pasando-props.jsx  # Ejemplo con props
│   │
│   ├─ estado-compartido/
│   │    ├─ index.jsx          # Estado compartido básico
│   │    └─ ejemplo-estado-compartido.jsx  # Ejemplo avanzado
│   │
│   ├─ refactorizacion-componentes/
│   │    ├─ index.jsx          # Refactorización básica
│   │    └─ ejemplo-display-button.jsx  # Ejemplo Display + Button
│   │
│   └─ hooks/
│        ├─ useState-basico.jsx        # Hook useState básico
│        ├─ useEffect-autoIncremento.jsx # Hook useEffect con interval
│        ├─ useState-con-logs.jsx      # useState con debugging
│        └─ useEffect-multiple.jsx     # Múltiples useEffect
│
├─ App.jsx                     # App principal con navegación
├─ main.jsx                    # Punto de entrada
└─ index.css                   # Estilos globales
```

## 🎯 Cómo usar

### Modo Normal (Recomendado)

1. Ejecuta `npm run dev` o `yarn dev`
2. Navega entre las diferentes categorías usando los botones
3. Interactúa con cada demo para entender los conceptos

### Categorías disponibles

#### 🎮 **Eventos**

- **Controladores de Eventos**: Manejo básico de eventos con funciones nombradas e inline

#### 📡 **Props**

- **Comunicación entre Componentes**: Cómo pasar datos del padre al hijo
- **Ejemplo: Pasando Props**: Ejemplos prácticos con destructuring

#### 🔄 **Estado**

- **Estado Compartido**: Lifting state up y comunicación entre componentes
- **Ejemplo: Estado Compartido**: Múltiples contadores con estado compartido

#### 🏗️ **Arquitectura**

- **Refactorización de Componentes**: Separar lógica en componentes reutilizables
- **Ejemplo: Display + Button**: Componentes completamente separados

#### 🪝 **Hooks**

- **useState Básico**: Hook fundamental para manejar estado
- **useEffect Auto-incremento**: Hook para efectos secundarios con cleanup
- **useState con Logs**: Debugging y re-rendering
- **useEffect Múltiple**: Diferentes tipos de useEffect

## 🔧 Comandos útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 💡 Conceptos clave que aprenderás

### **Eventos**

- Controladores de eventos como funciones
- Diferencia entre función y llamada de función
- Eventos nombrados vs inline

### **Props**

- Comunicación padre-hijo
- Destructuring de props
- Reutilización de componentes

### **Estado**

- useState hook básico
- Lifting state up
- Estado compartido entre componentes

### **Arquitectura**

- Refactorización de componentes
- Separación de responsabilidades
- Componentes reutilizables

### **Hooks**

- useState para estado local
- useEffect para efectos secundarios
- Cleanup de efectos
- Dependencias de useEffect

## 🎨 Características

✅ **Navegación por categorías** - Organizado por temas  
✅ **12 demos diferentes** - Desde eventos hasta hooks avanzados  
✅ **Componentes reutilizables** - Button, Display, Header, Nav  
✅ **Explicaciones teóricas** - Archivos .md con conceptos  
✅ **Logs de debugging** - Para entender re-rendering  
✅ **Estilos inline** - Sin dependencias externas de CSS  
✅ **Código comentado** - Explicaciones en cada demo

## 🚀 Para empezar

1. Ejecuta `npm run dev`
2. Navega entre las categorías usando los botones
3. Interactúa con cada demo para aprender los conceptos
4. Abre la consola para ver los logs en demos de debugging
5. Lee las explicaciones en los archivos .md

¡Disfruta aprendiendo React! 🎉
