let barcelona: HTMLElement = document.getElementById("barcelona") as HTMLElement;
let madrid:  HTMLElement = document.getElementById("madrid") as HTMLElement;

let red: HTMLDivElement = document.getElementById('red') as HTMLDivElement;
let orange: HTMLDivElement = document.getElementById('orange') as HTMLDivElement;
let purplle: HTMLDivElement = document.getElementById('purple') as HTMLDivElement;
let green: HTMLDivElement = document.getElementById('green') as HTMLDivElement;
let brown: HTMLDivElement = document.getElementById('brown') as HTMLDivElement;
let blue: HTMLDivElement = document.getElementById('blue') as HTMLDivElement;


barcelona.addEventListener('click', () => {
    console.log('Click izquierdo en Barcelona');
    red.textContent = (parseInt(red.textContent!) + 1).toString();
});

madrid.addEventListener('click', () => {
    console.log('Click izquierdo en Madrid');
    orange.textContent = (parseInt(orange.textContent!) + 1).toString();
}); 

barcelona.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Click derecho en Barcelona");
    let ValorActual = parseInt(red.textContent!);
    if (ValorActual > 0) {
        red.textContent = (ValorActual - 1).toString();
    }
});

madrid.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Click derecho en Madrid");

    let ValorActual = parseInt(orange.textContent!);
    if (ValorActual > 0) {
        orange.textContent = (ValorActual - 1).toString();
    }
});

barcelona.addEventListener("mouseenter", () => {
    console.log("Mouse sobre Barcelona");
    brown.textContent = (parseInt(brown.textContent!) + 1).toString();
}); 

madrid.addEventListener("mouseleave", () => {
    console.log("Mouse sale de Madrid");
    purplle.textContent = (parseInt(purplle.textContent!) + 1).toString();
}); 

document.addEventListener("dblclick", () => {
    console.log("Doble click en cualquier parte");
    blue.textContent = (parseInt(blue.textContent!) + 1).toString();
}); 

let loquepresiono = ""; 
document.addEventListener("keydown", (event) => {
    let green = document.getElementById("green")!;
    
    if (event.key == "0") {
        loquepresiono = "";
    } else {
        loquepresiono += event.key;   
    }
    green.textContent = loquepresiono;
});