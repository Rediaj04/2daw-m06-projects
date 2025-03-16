# J_Clicker 🎮

Un juego incremental (clicker) desarrollado con React, TypeScript y Tailwind CSS. En este juego, los jugadores pueden ganar dinero haciendo clic en diferentes tipos de monedas y comprar mejoras para aumentar su producción de dinero.

## 🚀 Características

- Tres tipos diferentes de monedas:
  - 💰 Moneda de Cobre (valor: 1)
  - 💰 Moneda de Plata (valor: 5)
  - 💰 Moneda de Oro (valor: 10)

- Sistema de mejoras:
  - 🔄 Auto Clicker: Genera dinero automáticamente cada segundo
  - ⚡ Doble Click: Multiplica el valor de tus clics
  - 🚀 Mega Boost: Aumenta significativamente tus ganancias

- 💾 Guardado automático del progreso
- 🎨 Interfaz moderna y responsive
- ✨ Efectos visuales y animaciones suaves

## 🛠️ Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

## 📋 Requisitos Previos

- Node.js (versión 14.0 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone [https://github.com/Rediaj04/2daw-m06-projects.git]
cd J_Clicker
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre tu navegador y visita `http://localhost:5173`

## 🎮 Cómo Jugar

1. Haz clic en las monedas para ganar dinero
   - Moneda de Cobre: 1 moneda por clic
   - Moneda de Plata: 5 monedas por clic
   - Moneda de Oro: 10 monedas por clic

2. Compra mejoras para aumentar tus ganancias:
   - Auto Clicker: Genera monedas automáticamente
   - Doble Click: Duplica el valor de tus clics
   - Mega Boost: Multiplica significativamente tus ganancias

3. ¡Gestiona tus recursos sabiamente para maximizar tu producción de monedas!

## 🏗️ Estructura del Proyecto

```
J_Clicker/
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas de la aplicación
│   └── App.tsx        # Componente principal
├── public/            # Archivos públicos
└── package.json       # Dependencias y scripts
```

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción
