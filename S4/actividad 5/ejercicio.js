//Usar el objeto Math para simular una tirada de dado.


function tirarDado() {
    var resultado = Math.floor(Math.random() * 6) + 1; // Math.random() da 0 ≤ x < 1
    console.log("Resultado de la tirada: " + resultado);
}

var boton = document.getElementById("tirar");


boton.addEventListener("click", tirarDado);
