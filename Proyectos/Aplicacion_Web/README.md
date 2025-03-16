# VideoMar

> Una aplicación web que permite gestionar clientes, películas y videojuegos en un videoclub retro.

## Descripción

Videoclub Retro es una aplicación web sencilla que permite:
- Mostrar una lista de clientes iniciales.
- Validar correos electrónicos mediante una función flecha.
- Añadir películas o videojuegos mediante un formulario interactivo.
- Visualizar películas, videojuegos o ambos en una tabla organizada.

Este proyecto está diseñado para cumplir con los requisitos de la práctica de desarrollo web del módulo DAW M06 UF2.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página.
- **CSS**: Estilización de los elementos de la interfaz.
- **TypeScript**: Lógica de la aplicación para gestionar datos y eventos de usuario.
- **JavaScript**: Código generado por TypeScript para ser interpretado por el navegador.

## Características

- **Gestión de Clientes**:
  - La lista de clientes se carga al iniciar la página.
  - Valida correos electrónicos antes de mostrarlos.
  
- **Gestión de Productos**:
  - Añade películas con solo un nombre.
  - Añade videojuegos con un nombre y una plataforma separados por coma.
  - Utiliza sobrecarga de funciones para añadir productos iniciales y nuevos.

- **Visualización de Datos**:
  - Tres botones permiten mostrar:
    - Solo películas.
    - Solo videojuegos.
    - Tanto películas como videojuegos en una tabla organizada.

- **Interactividad**:
  - Limpieza automática de listas y tablas antes de mostrar nueva información.
  - Alertas para guiar al usuario en caso de errores o confirmaciones.

## Cómo Usar

1. Clona el repositorio.
2. Instala un servidor local o abre el archivo `index.html` en un navegador.
3. La página cargará automáticamente la lista de clientes y productos iniciales.
4. Usa el formulario para añadir productos.
5. Visualiza la información usando los botones de la sección de visualización.

## Notas

- Asegúrate de tener habilitado JavaScript en tu navegador.
- Este proyecto está diseñado con fines educativos.
