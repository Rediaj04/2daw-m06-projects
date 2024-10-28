function modificarBom() {
  const valor = Number((document.getElementById("data") as HTMLInputElement).value); // Recuperar y convertir el valor

  // Validar si el valor es mayor a 0
  if (valor > 0) {
      for (let i = 0; i < valor; i++) {
          const colorAleatorio = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generar color
          const ventana = window.open("", "Ventana " + (i + 1), "width=300,height=300"); // Abrir ventana

          if (ventana) {
              ventana.document.write("<h1>Ventana " + (i + 1) + "</h1>"); // Establecer contenido
              setTimeout(() => ventana.document.body.style.backgroundColor = colorAleatorio, 0); // Cambiar color
          }
      }
  } else {
      alert("Introduce un número válido mayor que 0."); // Mensaje de error
  }
}
