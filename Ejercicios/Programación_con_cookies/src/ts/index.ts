// Función que carga y aplica las cookies almacenadas al cargar la página
function carregarCookies() {
  // Divide las cookies en un array separando por "; "
  let arrayCookies: string[] = document.cookie.split("; ");
  let nomCookie: string = "";
  let valorCookie: string = "";

  // Recorre cada cookie y divide su nombre y valor
  for (let cookie of arrayCookies) {
    let temp = cookie.split("=");
    nomCookie = temp[0];
    valorCookie = temp[1];
    console.log(`Nombre de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`);

    // Obtiene los elementos HTML para modificar el contenido del encabezado y el párrafo
    let h1: HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
    let p: HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;

    // Aplica el idioma en función de la cookie almacenada
    if (nomCookie == "idioma" && valorCookie == "catalan" && h1 != null) {
      h1.innerHTML = "Texto en català";
      p.innerHTML = "Per veure els canvis, actualitzar la pàgina."
    } else if (nomCookie == "idioma" && valorCookie == "castellano" && h1 != null) {
      h1.innerHTML = "Texto en castellano";
      p.innerHTML = "Para ver los cambios, actualizar la página."
    } else if (nomCookie == "idioma" && valorCookie == "ingles" && h1 != null) {
      h1.innerHTML = "Text in English";
      p.innerHTML = "To see the changes, refresh the page."
    }

    // Aplica el color de fondo de la página en función de la cookie almacenada
    if (nomCookie == "fondocolor") {
      document.body.style.backgroundColor = valorCookie;
    }
  }
}
