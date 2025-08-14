//ejercicio 1
//Pedir al usuario que ingrese números hasta que ingrese un número mayor a 100. 
//Mostrar cuántos intentos hizo.
let numero;
let intentos = 0;

do {
    numero = parseFloat(prompt("Ingrese un número mayor a 100:"));
    intentos++;

    if (isNaN(numero)) {
        alert("Por favor ingrese un número válido.");
    }

} while (isNaN(numero) || numero <= 100);

alert("Número ingresado: " + numero + "\nCantidad de intentos: " + intentos);


//ejercicio 2
//Solicitar una contraseña hasta que el usuario escriba la correcta ("secreta123").
//Mostrar un mensaje de éxito.
let contraseña;

do {
    contraseña = prompt("Ingrese la contraseña:");
} while (contraseña !== "secreta123");

alert("¡Contraseña correcta! Acceso concedido.");


//ejerecicio 3
//Pedir al usuario números positivos y acumularlos. 
//Finalizar cuando se ingrese un número negativo y mostrar la suma total.
let suma = 0;
let num;

do {
    numero = parseFloat(prompt("Ingrese un número positivo (negativo para finalizar):"));

    if (!isNaN(num)) {
        if (num >= 0) {
            suma += num; // Solo sumamos si es positivo
        }
    } else {
        alert("Ingrese un número válido.");
    }

} while (num >= 0);

alert("La suma total de los números positivos es: " + suma);


//ejercicio 4
//Mostrar un menú con opciones hasta que el usuario elija salir (opción 3).
//Mostrar qué opción eligió.
let opcion;

do {
    opcion = prompt(
        "Menú de opciones:\n" +
        "1. Opción 1\n" +
        "2. Opción 2\n" +
        "3. Salir\n\n" +
        "Ingrese el número de la opción:"
    );

    switch(opcion) {
        case "1":
            alert("Elegiste la Opción 1");
            break;
        case "2":
            alert("Elegiste la Opción 2");
            break;
        case "3":
            alert("Saliendo del menú...");
            break;
        default:
            alert("Opción no válida, ingrese 1, 2 o 3.");
    }

} while (opcion !== "3");


//ejercicio 5
//Pedir un número entre 1 y 10 hasta que el usuario lo haga correctamente. 
// Mostrar el número ingresado.

let numer0;

do {
    numer0 = parseInt(prompt("Ingrese un número entre 1 y 10:"));

    if (isNaN(numer0) || numer0 < 1 || numer0 > 10) {
        alert("Número inválido. Intente nuevamente.");
    }

} while (isNaN(numer0) || numer0 < 1 || numer0 > 10);

alert("Número ingresado correctamente: " + numer0);