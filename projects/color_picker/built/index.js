"use strict";
let coleccionDeBotones = document.getElementsByTagName("button");
for (let i = 0; i < coleccionDeBotones.length; i++) {
    coleccionDeBotones[i].addEventListener("click", () => {
        let cuadradoPequeno = document.getElementById("cuadradoPequeno");
        cuadradoPequeno.style.backgroundColor = coleccionDeBotones[i].value;
    });
}
