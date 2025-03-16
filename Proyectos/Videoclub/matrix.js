// //Si deseas ver la animacion, descomentar este codigo.
// //Consecuncias: El archivo TS, dejara de mostrar los datos. (Se encuentra en mantenimiento estas funciones para que funcionen ambos archivos)

// // Función para generar caracteres aleatorios
// function getRandomChar() {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     return characters[Math.floor(Math.random() * characters.length)];
//   }
  
//   // Función para crear una columna de caracteres
//   function createMatrixColumn() {
//     const column = document.createElement("div");
//     column.classList.add("matrix-character");
//     column.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
//     column.style.animationDuration = `${Math.random() * 5 + 3}s`; // Velocidad aleatoria
//     document.getElementById("matrixBackground").appendChild(column);
  
//     // Generar caracteres que caen
//     const interval = setInterval(() => {
//       column.textContent = getRandomChar();
//     }, 100);
  
//     // Eliminar la columna después de que termine la animación
//     setTimeout(() => {
//       column.remove();
//       clearInterval(interval);
//     }, 10000); // Duración de la animación
//   }
  
//   // Crear múltiples columnas de caracteres
//   function startMatrixEffect() {
//     setInterval(createMatrixColumn, 100); // Crear una nueva columna cada 100ms
//   }
  
//   // Iniciar el efecto Matrix al cargar la página
//   window.onload = startMatrixEffect;