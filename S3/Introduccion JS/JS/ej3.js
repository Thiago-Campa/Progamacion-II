//ejercicio 1
//Mostrar los números del 1 al 10 en consola.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//ejercicio 2
//Calcular y mostrar la suma de los números del 1 al 10.
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 10 es:", suma);

//ejercicio 3
//Pedir al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert("Tabla del " + numero + ":\n" + tabla);
    console.log("Tabla del " + numero + ":\n" + tabla);
}

//ejercicio 4
//Mostrar los números pares del 1 al 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//ejercicio 5
//Mostrar una cuenta regresiva del 10 al 1.
let i = 10;
let intervalo = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) {
        clearInterval(intervalo);
        console.log("¡Fin de la cuenta regresiva!");
    }
}, 1000);


