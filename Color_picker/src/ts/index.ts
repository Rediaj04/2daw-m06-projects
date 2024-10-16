let coleccionDeBotones: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

for (let i = 0; i < coleccionDeBotones.length; i++) {
    coleccionDeBotones[i].addEventListener("click", () => {
        let cuadradoPequeno: HTMLElement = document.getElementById("cuadradoPequeno")!;
        cuadradoPequeno.style.backgroundColor = coleccionDeBotones[i].value;
    });
}
