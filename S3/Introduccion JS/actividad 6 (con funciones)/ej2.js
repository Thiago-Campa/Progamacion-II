//ejercicio 2
//Crear una función llamada doble que reciba un número como parámetro y devuelva su doble.
//Desde el programa principal, pedir un número al usuario y mostrar el resultado usando la función.
function pedirYMostrarDoble() {
    let numUsuario = parseFloat(prompt("Ingrese un número:"));

    if (!isNaN(numUsuario)) {
        let resultado = doble(numUsuario);
        alert("El doble de " + numUsuario + " es: " + resultado);
    } else {
        alert("No ingresaste un número válido.");
    }
}

