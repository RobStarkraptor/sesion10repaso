
const body = document.querySelector("body");



function btnCambiarColor(){
    console.log("Entro al boton");
    // setTimeout(CambiarColor,5000);
    setInterval(CambiarColor,3000);
    // CambiarColor();

}

function CambiarColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#"+randomColor;
}