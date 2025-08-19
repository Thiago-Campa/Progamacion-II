//Crear una función constructora para representar productos de un sistema de tienda.

function Producto(nombre, precio) {
    this.nombre = nombre;  
    this.precio = precio;   
    this.mostrarInfo = function() {
        return this.nombre + " - $" + this.precio;
    };
}

var producto1 = new Producto("Camisa", 1500);
var producto2 = new Producto("Pantalón", 2500);

var boton = document.getElementById("mostrarProductos");
var resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    console.log(producto1.mostrarInfo());
    console.log(producto2.mostrarInfo());
});