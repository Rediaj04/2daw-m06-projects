"use strict";
function carregarCookies() {
    let arrayCookies = document.cookie.split("; ");
    let nomCookie = "";
    let valorCookie = "";
    for (let cookie of arrayCookies) {
        let temp = cookie.split("=");
        nomCookie = temp[0];
        valorCookie = temp[1];
        console.log(`Nomre de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`);
        let h1 = document.getElementById("header");
        let p = document.getElementById("paragraph");
        if (nomCookie == "idioma" && valorCookie == "catalan" && h1 != null) {
            h1.innerHTML = "Texto en català";
            p.innerHTML = "Per veure els canvis, actualitzar la pàgina.";
        }
        else if (nomCookie == "idioma" && valorCookie == "castellano" && h1 != null) {
            h1.innerHTML = "Texto en castellano";
            p.innerHTML = "Para ver los cambios, actualitzar la página.";
        }
        else if (nomCookie == "idioma" && valorCookie == "ingles" && h1 != null) {
            h1.innerHTML = "Text in English";
            p.innerHTML = "To see the changes, refresh the page.";
        }
        if (nomCookie == "fondocolor") {
            document.body.style.backgroundColor = valorCookie;
        }
    }
    ;
}
