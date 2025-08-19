//Crear un objeto alumno y mostrar sus datos.
//Crear 2 funciones: crearAlumno y mostrarAlumno


// Objeto vacío que contendrá los datos del alumno
var alumno = {};

function crearAlumno(nombre, edad, curso) {
    alumno.nombre = nombre;
    alumno.edad = edad;
    alumno.curso = curso;
}

function mostrarAlumno() {
    console.log("Nombre: " + alumno.nombre);
    console.log("Edad: " + alumno.edad);
    console.log("Curso: " + alumno.curso);
}

crearAlumno("Juan", 20, "Matemática");

var boton = document.getElementById("mostrar");
boton.addEventListener("click", mostrarAlumno);
