// let opcion = parseInt(prompt("Ingrese una opción:\n\n1. Ver productos\n2 Ver sucursales\n\n Para salir ingrese 0"));
// while (opcion !== 0) {
//     if (opcion === 1) {
//         alert("Estos son nuestros productos: ");
//     } else if (opcion === 2) {
//         alert("Estas son nuestras sucursales")
//     } else {
//         alert("Opcion NO válida")
//     }

//     opcion = parseInt(prompt("Ingrese otra opción:\n\n1. Ver productos\n2 Ver sucursales\n\n Para salir ingrese 0"));

//     if (opcion === 0) {
//         alert("!Muchas por tu visita, vuelva pronto! ")
//     }
// }
class Producto {
    constructor(id, nombre, precio, stock, enOferta) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.enOferta = enOferta;
    }
}


const productos = [
    {
        id: 1,
        nombre: "Almendra",
        gramos: 250,
        precio: 3500,
        stock: 250,
        enOferta: false,
    },
    {
        id: 2,
        nombre: "Castañas de Cajú",
        gramos: 250,
        precio: 3500,
        stock: 500,
        enOferta: true,
    },
    {
        id: 3,
        nombre: "Maní salado",
        gramos: 250,
        precio: 500,
        stock: 0,
        enOferta: false,
    },
    {
        id: 4,
        nombre: "Maní sin sal",
        gramos: 250,
        precio: 500,
        stock: 0,
        enOferta: false,
    },
    {
        id: 5,
        nombre: "Nuez mariposa",
        gramos: 250,
        precio: 2500,
        stock: 500,
        enOferta: false,
    },
];

function generarMensaje(array) {
    let mensaje = "";
    array.forEach((el) => mensaje += `${el.id}) ${el.nombre} - Precio x 250gr = $${el.precio}
    `);

    return mensaje;
}

function verTodosLosProductos() {

    let mensaje = generarMensaje(productos)
    alert(mensaje)

};
function verProductosEnOferta() {

    let productosEnOferta = productos.filter((el) => el.enOferta);

    let mensaje = generarMensaje(productosEnOferta);
    alert(mensaje);
};
function verProductosSinStock() {

    let productosSinStock = productos.filter((el) => el.stock === 0);

    let mensaje = generarMensaje(productosSinStock);
    alert(mensaje);

};
function agregarPreducto() {

    let id = parseInt(prompt("Ingrese el id del producto"));
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = parseInt(prompt("Ingrese precio del producto"));
    let stock = parseInt(prompt("Ingrese el stock del producto"));

    if (productos.some(el => el.id === id)) {
        alert("Ya existe un producto con el id " + id);
    } else {
        if (nombre !== "" && precio > 0 && stock > 0) {
            let nuevoProducto = new Producto(id, nombre, precio, stock, false);

            productos.push(nuevoProducto);
        }else{
            alert("No se pudo crear el producto. Revisá los datos ingresados.")
        }
    }
};

let opcion;
do {
    opcion = prompt("Ingrese una opción:/n/n1. Para ver todos los productos./n2. Para ver los productos en oferta./n3. Para ver los productos sin stock./n4 Para agregar un nuevo producto./n/n Pulse 0 para salir.");

    switch (opcion) {
        case "0":
            alert("Gracias. Vuelva pronto.")
            break
        case "1":
            verTodosLosProductos();
            break
        case "2":
            verProductosEnOferta();
            break
        case "3":
            verProductosSinStock();
            break
        case "4":
            agregarPreducto();
            break

        default:
            alert("No es una opción válida. Por favor, ingresar una de las indicadas.")
            break;
    }

} while (opcion !== "0")