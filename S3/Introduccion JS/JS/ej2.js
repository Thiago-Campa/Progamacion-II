//ejercicio 1
//Ingresar un número del 1 al 7 e indicar el día correspondiente.
let dia = prompt("Ingrese un número del 1 al 7 para conocer el día de la semana:");

if (isNaN(dia) || dia < 1 || dia > 7) 
{
    alert("Por favor, ingrese un número válido entre 1 y 7.");
} else 
{
    switch (dia) 
    {
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 7:
            alert("Domingo");
            break;
    }
}


//ejercicio 2
//Mostrar un menú de opciones (1. Saludo, 2. Despedida, 3. Ayuda) y ejecutar la opción elegida.
let opcion = prompt("Elija una opción:\n1. Saludo\n2. Despedida\n3. Ayuda");

switch (opcion) 
{
    case "1":
        alert("¡Hola! ¿Cómo estás?");
        break;
    case "2":
        alert("¡Hasta luego! Que tengas un buen día.");
        break;
    case "3":
        alert("Este es un menú de opciones. Elija 1, 2 o 3.");
        break;
    default:
        alert("Opción no válida. Por favor, elija 1, 2 o 3.");
}

//ejercicio 3
//Ingresar una nota del 1 al 10 e indicar la calificación correspondiente 
// (Insuficiente, Regular, Bien, Muy bien, Excelente).
let nota = parseFloat(prompt("Ingrese una nota del 1 al 10:"));

if (isNaN(nota) || nota < 1 || nota > 10) {
    alert("Por favor, ingrese una nota válida entre 1 y 10.");
} else {
    if (nota < 4) {
        alert("Insuficiente");
    } else if (nota < 6) {
        alert("Regular");
    } else if (nota < 7) {
        alert("Bien");
    } else if (nota < 9) {
        alert("Muy bien");
    } else {
        alert("Excelente");
    }
}

//ejercicio 4
//Pedir una operación matemática (sumar, restar, multiplicar, dividir) y dos números. 
// Realizar la operación.
let operacion = prompt("Ingrese la operación a realizar: sumar, restar, multiplicar, dividir").toLowerCase();

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
} else {
    let resultado;

    switch(operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                resultado = null;
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            alert("Operación no válida. Elija sumar, restar, multiplicar o dividir.");
            resultado = null;
    }

    if (resultado !== null) {
        alert("El resultado es: " + resultado);
    }
}


//ejercicio 5
//Ingresar una edad y mostrar la categoría (Niño/a, Adolescente, Adulto/a, Adulto/a mayor)
let edad = parseInt(prompt("Ingrese su edad:"));

if (isNaN(edad) || edad < 0) {
    alert("Por favor, ingrese una edad válida.");
} else {
    if (edad <= 12) {
        alert("Categoría: Niño/a");
    } else if (edad <= 17) {
        alert("Categoría: Adolescente");
    } else if (edad <= 64) {
        alert("Categoría: Adulto/a");
    } else {
        alert("Categoría: Adulto/a mayor");
    }
}