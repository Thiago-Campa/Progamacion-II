//ejercicio 1
//Pedir al usuario que ingrese la contraseña hasta que sea correcta.
const contraseñaCorrecta = "pass123";
let contraseñaUsuario;

do {
    contraseñaUsuario = prompt("Ingrese la contraseña:");
    if (contraseñaUsuario === null) {
        alert("Cancelaste el ingreso de la contraseña.");
        break;
    } else if (contraseñaUsuario !== contraseñaCorrecta) {
        alert("Contraseña incorrecta. Intente de nuevo.");
    }
} while (contraseñaUsuario !== contraseñaCorrecta);

if (contraseñaUsuario === contraseñaCorrecta) {
    alert("¡Acceso concedido!");
}


//ejercicio 2
//Mostrar los números del 1 al 5 usando while.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


//ejercicio 3
//Pedir números al usuario y sumarlos hasta que ingrese 0.
let suma = 0;
let num;

    do {
        num = parseFloat(prompt("Ingrese un número (0 para finalizar):")); // convierto a número
        if (!isNaN(num)) suma += num;
        else alert("Ingrese un número válido.");
    } while (num!== 0);

    alert("La suma total es: " + suma);


//ejercicio 4
//Pedir un número positivo al usuario. Repetir hasta que lo ingrese correctamente.
let numero;

do {
    numero = parseFloat(prompt("Ingrese un número positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Error: debe ingresar un número mayor que 0.");
    }

} while (isNaN(numero) || numero <= 0);

alert("Número ingresado correctamente: " + numero);
