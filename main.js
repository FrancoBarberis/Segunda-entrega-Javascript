// DEFINO LAS VARIABLES Y CONSTANTES

const carrito = [];
let saldo = 4000;

const producto1 = { id: 1, producto: "Arroz", precio: 800 };

const producto2 = { id: 2, producto: "Aceite", precio: 700 };

const producto3 = { id: 3, producto: "Harina", precio: 500 };

const producto4 = { id: 4, producto: "Fideos", precio: 1200 };

const productos = [];

//DEFINO FUNCIONES
function preguntarSiSigue() {
    let sigue = prompt("¿Desea seguir agregando al carrito? (si/no)");
    return sigue;
}
function alertarValidez() {
    alert("Ingrese un valor válido (si/no)");
}
function agregarAlCarrito(idProducto, productos, carrito) {
    carrito.push(productos[nroProducto]);
    console.log("Producto agregado")
    return;
}

function comprarCarrito(saldo) {
    precioTotal = 0;
    for (p in carrito) {
        precioTotal += carrito[p].precio;
    }
    if (saldo >= precioTotal) {
        saldo-=precioTotal;
        console.log("Carrito comprado")
        return true;
    }
    console.log("Saldo Insuficiente")
    return false;
}
function quitarProducto(nroProducto, carrito){
    carrito.splice(nroProducto);
    console.log(carrito);
    return;
}

productos.push(producto1.producto+" (Código 1), Precio: "+producto1.precio, producto2.producto+" (Código 2), Precio: "+producto2.precio, producto3.producto+" (Código 3), Precio: "+producto3.precio, producto4.producto+" (Código 4), Precio: "+producto4.precio);
console.log(productos);
let mensajeProductos = productos.join("\n"); //CREO EL MENSAJE CON SALTOS DE LINEA
alert("Su presupuesto es: "+saldo+"\n"+"Estos son los productos disponibles con su precio: \n"+mensajeProductos);
console.log(mensajeProductos);

let códigoProd=parseInt(prompt("Ingrese el código de producto"));







