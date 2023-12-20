alert("Ingrese la opcion del producto que desea llevar,para salir ingrese 0")
let seleccionarProductos = Number(prompt("1-Burguer triple $3000 2-burguer doble $2000 3-burguer simple $1000 4-papas $500"))
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precion) => {
    return cant * precion
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Burguer triple, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 3000)
            break;

        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es burguer doble, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2000)
            break;

        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es burguer simple, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1000)
            break;

        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es papas, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 500)
            break;

        default:
            break;

    }
    seleccionarProductos = Number(prompt("1-Burguer triple $3000 2-burguer doble $2000 3-burguer simple $1000 4-papas $500"))

}


alert("el total de la compra es de:" + total)

const envio = () => {
    if (total >= 10000) {
        alert("El envio es gratuito")
    } else {
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
    }
}

envio()

alert("Gracias por la compra! Hasta pronto ")
