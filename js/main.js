// let opcion
// do {
//     let opcion = parseInt(prompt("Ingrese una opción:\n\n1. Ver productos\n2 Ver sucursales\n\n Para salir ingrese 0"));
// switch (opcion) {
//     case 0:
//         alert("!Muchas por tu visita, vuelva pronto! ")
//         break;
//     case 1:
//         alert("Estos son nuestros productos:")
//         break;
//     case 2:
//         alert("Estas son nuestras sucursales:")
//         break;

//     default:
//         alert("Opcion NO válida")
// }

// } while (opcion !== 0)


let opcion = parseInt(prompt("Ingrese una opción:\n\n1. Ver productos\n2 Ver sucursales\n\n Para salir ingrese 0"));
while (opcion !== 0) {
    if (opcion === 1) {
        alert("Estos son nuestros productos: ");
    } else if (opcion === 2) {
        alert("Estas son nuestras sucursales")
    } else {
        alert("Opcion NO válida")
    }

    opcion = parseInt(prompt("Ingrese otra opción:\n\n1. Ver productos\n2 Ver sucursales\n\n Para salir ingrese 0"));

    if (opcion === 0) {
        alert("!Muchas por tu visita, vuelva pronto! ")
    }
}