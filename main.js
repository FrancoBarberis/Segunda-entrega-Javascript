// DEFINO LAS VARIABLES Y CONSTANTES

const carrito = [];
let saldo = 4000;

const producto1 = { id: 1, producto: "Arroz", precio: 800 };

const producto2 = { id: 2, producto: "Aceite", precio: 700 };

const producto3 = { id: 3, producto: "Harina", precio: 500 };

const producto4 = { id: 4, producto: "Fideos", precio: 1200 };

const productos = [];

//DEFINO FUNCIONES
function preguntarSiSigue(carrito,saldo) {
    let bandera;
    let sigue = prompt("¿Desea seguir agregando al carrito? (si/no)");
    switch (sigue) {
        case "si":
            bandera = true;
            break;
        case "no":
            bandera = false;
            let quita = prompt("Desea quitar algun producto del carrito? (si/no)");
            switch (quita) {
                case "si":
                    let estadoCarrito=carrito.join("\n");
                    let productoAQuitar = prompt("Ingrese el número de producto a quitar(segun orden en el carrito: 1,2,3...)" + "\n" + estadoCarrito);
                    while (productoAQuitar < 0 || productoAQuitar > carrito.lenght) {
                        alertarValidez();
                        let productoAQuitar = prompt("Ingrese el número de producto a quitar(segun orden en el carrito)" + "\n" + estadoCarrito);
                    }
                    quitarProducto(productoAQuitar-1, carrito);
                    estadoCarrito=carrito.join();
                    let mensajeQuitado = alert("El carrito ahora es:" + "\n" + estadoCarrito);
                    preguntarSiSigue(carrito,saldo);
                    break;
                case "no": //REVISAR FLUJO
                    let decisionComprar=prompt("Desea comprar el carrito? (si/no)");
                    switch(decisionComprar){
                        case "si":
                            comprarCarrito(saldo,carrito);
                            break;
                        case "no":
                            return;
                        default:
                            break;
                    }
                    break;
                default:
                    alertarValidez();
                    break;
            }
            break;
        default:
            alertarValidez();
    }
    return bandera;
}
function alertarValidez() {
    alert("Ingrese un valor válido");
}
function agregarAlCarrito(idProducto, productos, carrito,saldo) {
    let copiaProducto=productos[idProducto-1];
    carrito.push(copiaProducto);
    console.log("Producto agregado");
    let mensajeCarrito = "Su carrito es:"+"\n"+carrito.join("\n");
    alert(mensajeCarrito);
    let sigue = preguntarSiSigue(carrito,saldo);
    return sigue;
}


function comprarCarrito(saldo, carrito) {
    precioTotal = 0;
    for (p in carrito) {
        precioTotal += carrito[p].precio;
    }
    if (saldo >= precioTotal) {
        saldo -= precioTotal;//COBRO LOS PRODUCTOS AL SALDO
        carrito = []; //VACIO EL CARRITO
        console.log("Carrito comprado");
        return true;
    }
    alert("Saldo insuficiente");
    console.log("Saldo Insuficiente");
    return false;
}
function quitarProducto(nroProducto, carrito) {
    carrito.splice(nroProducto);
    console.log(carrito);
    return;
}


//AGREGO LOS PRODUCTOS AL CATÁLOGO
productos.push(producto1.producto + " (Código 1), Precio: " + producto1.precio, producto2.producto + " (Código 2), Precio: " + producto2.precio, producto3.producto + " (Código 3), Precio: " + producto3.precio, producto4.producto + " (Código 4), Precio: " + producto4.precio);
console.log(productos);
let mensajeProductos = productos.join("\n"); //CREO EL MENSAJE CON SALTOS DE LINEA
console.log(mensajeProductos);

let sigue = true;
while (sigue) {

    let mensaje = alert("Su presupuesto es: " + saldo + "\n" + "Estos son los productos disponibles con su precio: \n" + mensajeProductos);
    let codigoProd = parseInt(prompt("Ingrese el código de producto"));
    switch (codigoProd) {
        case 1:
            agregarAlCarrito(1, productos, carrito,saldo);
            break;
        case 2:
            agregarAlCarrito(2, productos, carrito,saldo);
            break;
        case 3:
            agregarAlCarrito(3, productos, carrito,saldo);
            break;
        case 4:
            agregarAlCarrito(4, productos, carrito,saldo);
            break;
        default:
            alertarValidez();
            break;
    }

}






