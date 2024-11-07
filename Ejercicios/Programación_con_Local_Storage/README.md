# Programación con Local Storage 🌐

> Este proyecto permite al usuario seleccionar un idioma y un color de fondo, almacenando las opciones en el navegador mediante `LocalStorage`. Así, al recargar la página, se mantendrán los ajustes elegidos, creando una experiencia personalizada y persistente.

## Descripción 📝

Este ejercicio emplea `LocalStorage` para almacenar las preferencias de idioma y color de fondo del usuario. Los usuarios pueden elegir su idioma preferido (Catalán, Castellano o Inglés) y un color de fondo (Rojo, Azul o Verde) utilizando botones en la página. Estas opciones se guardan automáticamente y se aplican al recargar la página.

### Ejemplo de uso:

1. El usuario selecciona **Català** y **Azul**.
2. Al recargar la página, el idioma se muestra en catalán y el fondo es azul, gracias a las preferencias guardadas en `LocalStorage`.

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

La función `carregar()` consulta el `LocalStorage` al cargar la página para aplicar las preferencias guardadas. Si el usuario cambia el idioma o el color de fondo, el `LocalStorage` se actualiza inmediatamente.

## Tecnologías utilizadas 🛠️

- HTML
- JavaScript

## Enlace al ejercicio anterior 🔗
Este proyecto continúa el ejercicio de programación con cookies, donde se exploraron métodos similares para almacenar datos temporales. Puedes consultar el ejercicio previo en Programación con Cookies. [Ver ejercicio](https://github.com/Rediaj04/2daw-m06-projects/tree/main/Ejercicios/Programación_con_cookies)
 