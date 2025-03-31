# Online Store - React + TypeScript + Vite

## Descripción
Aplicación web de tienda online desarrollada con React, TypeScript y Vite. La aplicación permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando una API REST.

## Tecnologías Utilizadas
- React 18
- TypeScript
- Vite
- Axios
- CSS3

## Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Rediaj04/2daw-m06-projects.git
```

2. Navegar al directorio del proyecto:
```bash
cd Ejercicios/PeticionesV2
```

3. Instalar dependencias:
```bash
npm install
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto
```
src/
├── assets/         # Recursos estáticos
├── models/         # Modelos de datos
│   ├── ModelData.ts
│   └── ModelObject.ts
├── pages/          # Componentes de página
│   └── Home/       # Página principal
├── App.tsx         # Componente principal
└── main.tsx        # Punto de entrada
```

## Funcionalidades
- Visualización de productos
- Creación de nuevos productos
- Actualización de productos existentes
- Eliminación de productos
- Búsqueda de productos por ID
- Validación de datos de entrada
- Gestión de estado con React Hooks
- Integración con API REST

## API Endpoints
- GET /objects - Obtener todos los productos
- GET /objects/:id - Obtener un producto por ID
- POST /objects - Crear un nuevo producto
- PUT /objects/:id - Actualizar un producto
- DELETE /objects/:id - Eliminar un producto

## Formato de Datos
Los productos deben seguir el siguiente formato:
```
nombre, foto, descripción, precio
```

## Scripts Disponibles
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la versión de producción

## Variables de Entorno
La aplicación requiere la siguiente variable de entorno:
- `VITE_API_URL` - URL de la API (por defecto: http://192.168.238.42:8080/objects)