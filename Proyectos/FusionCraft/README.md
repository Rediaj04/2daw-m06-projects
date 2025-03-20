# 🎮 FusionCraft

<div align="center">

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)]([LICENSE](https://github.com/Rediaj04/2daw-m06-projects/blob/main/LICENSE))

Un juego de fusión de elementos inspirado en juegos como Triple Town y 2048, desarrollado con React y TypeScript.

[Características](#-características) •
[Instalación](#-instalación) •
[Uso](#-uso) •
[Tecnologías](#%EF%B8%8F-tecnologías) •
[Estructura](#-estructura-del-proyecto)

</div>

## 🎯 Características

- **Sistema de Fusión**: Combina elementos del mismo tipo para crear versiones mejoradas
- **Dos Cadenas de Evolución**: 
  - Cadena Básica: `🟦 → 🟩 → 🟨 → 🟧 → 🟥`
  - Cadena Especial: `🟪 → 🟫 → ⬛ → ⬜ → 🔳`
- **Efectos Visuales**: Animaciones suaves y efectos de partículas en las fusiones
- **Efectos de Sonido**: Feedback auditivo para cada acción del juego
- **Controles Intuitivos**: Sistema drag & drop para mover elementos
- **Funciones Especiales**: 
  - Fusión automática de elementos
  - Reinicio rápido del tablero
  - Generadores de elementos básicos y especiales

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Rediaj04/book-scraping-management
cd Proyectos/FusionCraft/
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm start
```

## 💻 Uso

1. **Iniciar el Juego**
   - Abre `http://localhost:3000` en tu navegador
   - El tablero comenzará vacío con dos generadores

2. **Mecánicas Básicas**
   - Click en los generadores para crear elementos
   - Arrastra y suelta elementos del mismo tipo para fusionarlos
   - Combina elementos para alcanzar los niveles máximos (🟥 o 🔳)

3. **Controles Especiales**
   - `Fusión Total`: Combina automáticamente todos los elementos compatibles
   - `Reiniciar`: Vuelve el tablero a su estado inicial

## 🛠️ Tecnologías

- **Frontend**
  - React 19.0.0
  - TypeScript 4.9.5
  - react-dnd 16.0.1
  - CSS3 con animaciones

- **Desarrollo**
  - Node.js
  - npm
  - ESLint
  - Jest para testing

## 📁 Estructura del Proyecto
```bash
FusionCraft/
├── src/
│ ├── components/ # Componentes React
│ │ ├── Tablero.tsx # Componente principal del juego
│ │ ├── Celda.tsx # Celda individual del tablero
│ │ ├── Generador.tsx # Generador de elementos
│ │ ├── ElementoArrastrable.tsx # Elementos arrastrables
│ │ └── FusionEfecto.tsx # Efectos visuales de fusión
│ ├── hooks/ # Hooks personalizados
│ │ └── useSounds.ts # Hook para efectos de sonido
│ ├── types/ # Definiciones de TypeScript
│ │ └── tipos.ts # Tipos e interfaces del juego
│ ├── styles/ # Archivos CSS
│ │ ├── App.css # Estilos principales
│ │ └── FusionEffect.css # Estilos de efectos
│ └── assets/ # Recursos
│ └── sounds/ # Efectos de sonido
├── public/ # Archivos estáticos
└── package.json # Dependencias y scripts
```
## 📋 Características Principales

- 🎨 Interfaz de usuario moderna y responsive
- 🔧 Sistema de fusión intuitivo
- 🎵 Efectos de sonido inmersivos
- 🌈 Personalización de elementos mediante emojis

## 🛠️ Tecnologías Utilizadas

- React 
- TypeScript
- HTML5 & CSS3
- Node.js
- NPM

## 🎯 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm test` - Ejecuta los tests
- `npm run build` - Crea la versión de producción
- `npm run eject` - Expone las configuraciones de webpack

## 📱 Compatibilidad

- ✅ Chrome (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Edge (última versión)
- ✅ Dispositivos móviles y tablets

## 🐛 Reporte de Bugs

Si encuentras algún bug o tienes una sugerencia, por favor abre un issue en el repositorio del proyecto:

1. Ve a la pestaña "Issues"
2. Haz click en "New Issue"
3. Describe el problema o sugerencia
4. Añade capturas de pantalla si es necesario

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Add: Nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT

## 👥 Autores

- **Jaider** - *Desarrollo inicial* - [Rediaj04](https://github.com/Rediaj04)

## 🙏 Agradecimientos

- Inspirado en juegos como Triple Town y 2048
- Iconos y emojis de [Unicode Emoji](https://unicode.org/emoji/charts/full-emoji-list.html)
- React DnD por la funcionalidad de drag and drop
- Comunidad de React por sus recursos y documentación
