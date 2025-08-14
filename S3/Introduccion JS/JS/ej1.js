//ejercicio 1
//Pedir al usuario su edad mediante prompt y mostrar un mensaje que indique si es mayor o menor de edad
let edad =prompt("Ingrese su edad:");

if (isNaN(edad)) {
    alert("Por favor, ingrese un número válido.");
} else if (edad >= 18) {
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}

//ejercicio 2
//Ingresar un número y clasificarlo como positivo, negativo o cero.
let numero = prompt("Ingrese un número:");

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

//ejercicio 3
//Pedir dos números al usuario e indicar cuál es mayor, o si son iguales.
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
} else if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
} else {
    alert("Ambos números son iguales.");
}

//ejercicio 4
//Pedir al usuario el precio de un producto. Si cuesta más de $1000, aplicar un 10% de descuento.
//Mostrar el precio final.
let precio = prompt("Ingrese el precio del producto:");

if (isNaN(precio) || precio < 0) {
    alert("Por favor, ingrese un precio válido.");
} else {
    if (precio > 1000) {
        let descuento = precio * 0.10;
        let precioFinal = precio - descuento;
        alert("El precio con descuento es: $" + precioFinal.toFixed(2));
    } else {
        alert("El precio final es: $" + precio.toFixed(2));
    }
}

//ejercicio 5
//Pedir una contraseña al usuario y validar si coincide con una predefinida.
const contraseñaCorrecta = "miSecreta123";

let contraseñaUsuario = prompt("Ingrese la contraseña:");

if (contraseñaUsuario === null) {
    alert("No ingresaste ninguna contraseña.");
} else if (contraseñaUsuario === contraseñaCorrecta) {
    alert("Acceso concedido.");
} else {
    alert("Contraseña incorrecta. Acceso denegado.");
}