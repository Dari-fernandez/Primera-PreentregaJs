let saludo = ("Bienvenido a Rato Express")

alert(saludo)

let mensaje = "Ingrese que opcion desea\n1 - Hamburguesa simple $2000\n2 - Hamburguesa doble $3000\n3 - Hamburguesa triple $4000\n4 - Cerceza ipa $1300\n5 - Cerveza rubia $1300\n6 - Cerveza roja $1300\n7 - Coca cola $800\n8 - Papas Fritas $1500\n9 - Finalizar compra"
let opcion
let total = 0

do {
    opcion = Number(prompt(mensaje))
    switch (opcion) {
        case 1:
            alert("Se agrega Hamburguesa simple al carrito")
            total += 2000
            break
        case 2:
            alert("Se agrega Hamburguesa doble")
            total += 3000
            break
        case 3:
            alert("Se agrega Hamburguesa triple")
            total += 4000
            break
        case 4:
            alert("Se agrega Cerveza ipa")
            total += 1300
            break
        case 5:
            alert("Se agrega Cerveza rubia")
            total += 1300
            break
        case 6:
            alert("Se agrega Cerveza roja")
            total += 1300
            break
        case 7:
            alert("Se agrega Coca cola")
            total += 800
            break
        case 8:
            alert("Se agrega Papas Fritas")
            total += 1500
            break
        case 9:
            alert("Total a pagar $" + total)
            let finalizar = prompt("Desea agregar algo mas? Si o No").toLowerCase()
            if (finalizar === "no") {
                alert("Gracias por su compra")
            }
            //default:
            break
    }
} while (opcion != 0)