alert ("Estan preparados para la competencia Master Chef Digital ..")
function mostrarReceta() {
    let pasos =[
        "1. Cortar 2 limones",
        "2. Exprimirlos en un vaso",
        "3. Agregar agua",
        "4. Mezclar bien"

    ]
    document.getElementById("receta").innerHTML = pasos.join("<br>");
}

function agregarAzucar(conAzucar) {
if (conAzucar) {
    document.getElementById("resultado").innerHTML = " Has agregado azúcar  a tu limonada.";
} 
else {
    document.getElementById("resultado").innerHTML = " Has preparado una limonada sin azúcar .";
}
}
function cambiarFondo() {
    let colores = ["#fffaf0", "#e0ffe0", "#e0f7ff", "#fff0f5"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)];
}
function enviarEnlace() {
    let enlace = document.getElementById("enlaceScratch").value;
    if (enlace.includes("scratch.mit.edu/projects/")) {
        document.getElementById("mensaje").innerHTML = "¡Enlace recibido! " + 
        "<br>Gracias por compartir tu proyecto Scratch";
    } else {
        document.getElementById("mensaje").innerHTML = "Por favor ingresa un enlace válido de Scratch.";
    }
}
function felicitar() {
    let mensajes = [
    "¡Excelente trabajo, Chef!",
    "¡Tu receta quedó deliciosa!",
    "¡Eres un/a MasterChef Digital!",
    "¡Muy bien, programador/a creativo/a!"
];
  let aleatorio = Math.floor(Math.random() * mensajes.length);
document.getElementById("felicitacion").innerText = mensajes[aleatorio];
}