//Crear un objeto usuario con nombre, contraseña y un método para verificar si una
//contraseña es válida.

var usuario = {
    nombre: "Juan",
    contraseña: "12345",

    verificarContraseña: function(input) {
        if(input === this.contraseña) {
            console.log("Contraseña correcta");
        } else {
            console.log("Contraseña incorrecta");
        }
    }
};

var boton = document.getElementById("verificar");

boton.addEventListener("click", function() {
    var input = prompt("Ingresa tu contraseña:"); 
    usuario.verificarContraseña(input);
});
