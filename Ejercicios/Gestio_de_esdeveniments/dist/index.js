"use strict";
let barcelona = document.getElementById("barcelona");
let madrid = document.getElementById("madrid");
let red = document.getElementById('red');
let orange = document.getElementById('orange');
let purplle = document.getElementById('purple');
let green = document.getElementById('green');
let brown = document.getElementById('brown');
let blue = document.getElementById('blue');
barcelona.addEventListener('click', () => {
    console.log('Click izquierdo en Barcelona');
    red.textContent = (parseInt(red.textContent) + 1).toString();
});
madrid.addEventListener('click', () => {
    console.log('Click izquierdo en Madrid');
    orange.textContent = (parseInt(orange.textContent) + 1).toString();
});
barcelona.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Click derecho en Barcelona");
    let ValorActual = parseInt(red.textContent);
    if (ValorActual > 0) {
        red.textContent = (ValorActual - 1).toString();
    }
});
madrid.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Click derecho en Madrid");
    let ValorActual = parseInt(orange.textContent);
    if (ValorActual > 0) {
        orange.textContent = (ValorActual - 1).toString();
    }
});
barcelona.addEventListener("mouseenter", () => {
    console.log("Mouse sobre Barcelona");
    brown.textContent = (parseInt(brown.textContent) + 1).toString();
});
madrid.addEventListener("mouseleave", () => {
    console.log("Mouse sale de Madrid");
    purplle.textContent = (parseInt(purplle.textContent) + 1).toString();
});
document.addEventListener("dblclick", () => {
    console.log("Doble click en cualquier parte");
    blue.textContent = (parseInt(blue.textContent) + 1).toString();
});
let loquepresiono = "";
document.addEventListener("keydown", (event) => {
    let green = document.getElementById("green");
    if (event.key == "0") {
        loquepresiono = "";
    }
    else {
        loquepresiono += event.key;
    }
    green.textContent = loquepresiono;
});
//# sourceMappingURL=index.js.map