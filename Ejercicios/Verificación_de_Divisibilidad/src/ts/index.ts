function calcula() {
  // Obtenemos el valor del input con id "numero" y lo convertimos a número con 'Number'
  const numero = Number((document.getElementById("numero") as HTMLInputElement).value);

  // Verificamos si el valor ingresado es un número válido
  if (isNaN(numero)) {
      document.getElementById("resultado")!.innerText = "Por favor, ingresa un número válido.";
      document.getElementById("resultado")!.style.color = "red"; // Mensaje de error en rojo
      return;
  }

  // Verificamos si el número es divisible por 4
  if (numero % 4 == 0) {
      // Si el resto de la división por 4 es 0, el número es divisible
      document.getElementById("resultado")!.innerText = `El número ${numero} es divisible por 4.`;
      document.getElementById("resultado")!.style.color = "green"; // Mensaje en verde
  } else {
      // Si el número no es divisible por 4, se muestra este mensaje
      document.getElementById("resultado")!.innerText = `El número ${numero} no es divisible por 4.`;
      document.getElementById("resultado")!.style.color = "red"; // Mensaje en rojo
  }
}