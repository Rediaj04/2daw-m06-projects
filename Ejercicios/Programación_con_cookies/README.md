# Programación con Cookies 🍪

> Este proyecto permite a los usuarios personalizar el idioma y el color de fondo de la página, guardando estas preferencias en cookies para que persistan al recargarla.

## Descripción 📝

Este ejercicio utiliza cookies para almacenar las preferencias de idioma y color de fondo del usuario. Los usuarios pueden seleccionar un idioma (Catalán, Castellano o Inglés) y un color de fondo (Rojo, Azul o Verde) mediante botones. Estas configuraciones se almacenan como cookies en el navegador, lo que permite que se mantengan al recargar la página.

### Ejemplo de Uso:

1. El usuario selecciona **Català** y **Azul**.
2. Al recargar la página, el idioma se muestra en catalán y el fondo es azul, gracias a las cookies guardadas.

## Instrucciones 🧑‍💻

1. **Selecciona el idioma** haciendo clic en uno de los botones:
   - `Català`: Cambia el texto a catalán.
   - `Castellano`: Cambia el texto a castellano.
   - `Inglés`: Cambia el texto a inglés.

2. **Selecciona el color de fondo**:
   - `Rojo`
   - `Azul`
   - `Verde`

3. **Recarga la página**. Las preferencias seleccionadas se conservarán.

## Funcionalidad 🚀

La función `carregarCookies()` consulta las cookies al cargar la página para aplicar las preferencias guardadas. Si el usuario cambia el idioma o el color de fondo, las cookies se actualizan inmediatamente.

## Tecnologías Utilizadas 🛠️

- **HTML**: Estructura de la página.
- **JavaScript/TypeScript**: Lógica para manejar las cookies y actualizar el idioma y el color de fondo.