// DEFINO LAS VARIABLES Y CONSTANTES

const carrito = [];
let saldo = 4000;

const producto1 = { id: 1, producto: "Arroz", precio: 800 };

const producto2 = { id: 2, producto: "Aceite", precio: 700 };

const producto3 = { id: 3, producto: "Harina", precio: 500 };

const producto4 = { id: 4, producto: "Fideos", precio: 1200 };

const productos = [];
productos.push(producto1, producto2, producto3, producto4);
console.log(productos);

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