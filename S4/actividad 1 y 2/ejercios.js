//Agregar dinámicamente una propiedad "notaFinal" al objeto alumno.

var alumno = {
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

alumno.notaFinal = 8;

function mostrarNombre() {
    console.log(alumno.nombreCompleto());
}

function mostrarNota(){
    console.log("Nota final:", alumno.notaFinal); // 8
}