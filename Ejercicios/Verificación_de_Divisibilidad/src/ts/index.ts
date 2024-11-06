// Definimos la función 'calcula' que se encargará de verificar si un número es divisible por 4
function calcula() {
    // Obtenemos el valor del input con id "numero" y lo convertimos a número con 'Number'
    const numero = Number((<HTMLInputElement>document.getElementById("numero")).value);
  
    // Verificamos si el número es divisible por 4
    if (numero % 4 == 0) {
      // Si el resto de la división por 4 es 0, el número es divisible
      console.log("Es divisible");
    } else {
      // Si el número no es divisible por 4, se muestra este mensaje
      console.log("No es divisible");
    }
  }
  