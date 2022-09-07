function productos(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock 
}

const Injertos = new productos("Injertos", 500, "5 unidades")
const VelasSoja = new productos("Velas de soja", 750, "5 unidades")
const PortamacetaZinc = new productos("Portamaceta Zinc", 900, "5 unidades")
const PortamacetaTrioVintage = new productos("Portamaceta Trio Vintage", 1200, "5 unidades")
const EsferasFloresPreservadas = new productos("Esferas Flores Preservadas", 1500, "5 unidades")

let nombre = prompt("Buenos dias, ¿cual es su nombre?")
let correo = prompt("Introduzca su correo electronico para futuras compras. Gracias")
alert("¡Que tenga un buen dia!" + " " + nombre.toUpperCase())
do {
    let catalogo = prompt(`Has ingresado al catalogo de Green Love. (Escriba la opcion que desea elegir)

            Injertos
            Velas de soja
            Portamaceta zinc
            Portamaceta trio vintage
            Esferas con flores preservadas`)
            switch (catalogo) {
                case "Injertos":
                    let cantidadInjertos = Number(prompt (`Has elegido Injertos, ¿Cuantos deseas agregar a tu carrito de compras?
                                                Valor por unidad: $500
                                                Stock: 5 unidades`));
                    if (cantidadInjertos<=5){
                        alert("Has agregado" + " " + cantidadInjertos + " " + "Injertos." + " " + "Valor total de la compra:" + " " + cantidadInjertos*500);
                    }else{
                        alert("Error al ingresar Injertos al carrito ¡Quedan solamente 5 unidades!");
                    }
                    break;
                case "Velas de soja":
                    let cantidadVelasSoja = Number(prompt(`Has elegido Velas de soja, ¿Cuantos deseas agregar a tu carrito de compras?
                                                Valor por unidad: $750
                                                Stock: 5 unidades`));
                    if (cantidadVelasSoja<=5){
                        alert("Has agregado" + " " + cantidadVelasSoja + " " + "Velas de soja." + " " + "Valor total de la compra:" + " " + cantidadVelasSoja*750);
                    }else{
                        alert("Error al ingresar Velas de soja al carrito ¡Quedan solamente 5 unidades!");
                    }
                    break;
                case "Portamaceta zinc":
                    let cantidadPortamacetaZinc = Number(prompt(`Has elegido Portamaceta zinc, ¿Cuantos deseas agregar a tu carrito de compras?
                                                Valor por unidad: $900
                                                Stock: 5 unidades`));
                    if (cantidadPortamacetaZinc<=5){
                        alert("Has agregado" + " " + cantidadPortamacetaZinc + " " + "Portamaceta zinc." + " " + "Valor total de la compra:" + " " + cantidadPortamacetaZinc*900);
                    }else{
                        alert("Error al ingresar Portamaceta zinc al carrito ¡Quedan solamente 5 unidades!");
                    }
                    break;
                case "Portamaceta trio vintage":
                    let cantidadPortamacetaTrioVintage = Number(prompt(`Has elegido Portamaceta trio vintage, ¿Cuantos deseas agregar a tu carrito de compras?
                                                Valor por unidad: $1200
                                                Stock: 5 unidades`));
                    if (cantidadPortamacetaTrioVintage<=5){
                        alert("Has agregado" + " " + cantidadPortamacetaZinc + " " + "Portamaceta trio vintage." + " " + "Valor total de la compra:" + " " + cantidadPortamacetaTrioVintage*1200);
                    }else{
                        alert("Error al ingresar Portamaceta trio vintage al carrito ¡Quedan solamente 5 unidades!");
                    }
                    break;
                case "Esferas con flores preservadas":
                    let cantidadEsferasFloresPreservadas = Number(prompt(`Has elegido Esferas con flores preservadas, ¿Cuantos deseas agregar a tu carrito de compras?
                                                Valor por unidad: $1500
                                                Stock: 5 unidades`));
                    if (cantidadEsferasFloresPreservadas<=5){
                        alert("Has agregado" + " " + cantidadEsferasFloresPreservadas + " " + "Esferas con flores preservadas." + " " + "Valor total de la compra:" + " " + cantidadEsferasFloresPreservadas*1500);
                    }else{
                        alert("Error al ingresar Portamaceta trio vintage al carrito ¡Quedan solamente 5 unidades!");
                    }
                    break;
                default:
                    console.log("Pronto ingresaran mas articulos, disculpe las molestias.");
                    break;
            }
            const carrito = []
            carrito.push(catalogo.toUpperCase())
            alert("Carrito de compras"+ "\n" + carrito)
} while (nombre);

/*const dom = document.querySelectorAll("h2")
const dom = document.querySelectorAll(".hola")
const dom = document.querySelectorAll("#hola")


console.log(dom);*/