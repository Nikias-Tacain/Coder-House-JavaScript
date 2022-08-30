let nombre = prompt("Buenos dias, ¿cual es su nombre?")
alert("¡Que tenga un buen dia!" + " " + nombre)
let catalogo = prompt(`Has ingresado al catalogo de Green Love, Estos son los productos que se encuentran en stock ahora mismo.

            Injertos
            Velas de soja
            Portamaceta zinc
            Portamaceta trio vintage
            Esferas con flores preservadas`)
switch (catalogo) {
    case "Injertos":
        let cantidadInjertos = (prompt(`Has elegido Injertos, ¿Cuantos deseas agregar a tu carrito de compras?
                                    Valor por unidad: $500
                                    Stock: 5 unidades`));
        if (cantidadInjertos<=5){
            console.log(alert("Has agregado" + " " + cantidadInjertos + " " + "Injertos." + " " + "Valor total de la compra:" + " " + cantidadInjertos*500));
        }else{
            alert("Error al ingresar Injertos al carrito ¡Quedan solamente 5 unidades!")
        }
        break;
    case "Velas de soja":
        let cantidadVelasSoja = (prompt(`Has elegido Velas de soja, ¿Cuantos deseas agregar a tu carrito de compras?
                                    Valor por unidad: $750
                                    Stock: 5 unidades`));
        if (cantidadVelasSoja<=5){
            console.log(alert("Has agregado" + " " + cantidadVelasSoja + " " + "Velas de soja." + " " + "Valor total de la compra:" + " " + cantidadVelasSoja*750));
        }else{
            alert("Error al ingresar Velas de soja al carrito ¡Quedan solamente 5 unidades!")
        }
        break;
    case "Portamaceta zinc":
        let cantidadPortamacetaZinc = (prompt(`Has elegido Portamaceta zinc, ¿Cuantos deseas agregar a tu carrito de compras?
                                    Valor por unidad: $900
                                    Stock: 5 unidades`));
        if (cantidadPortamacetaZinc<=5){
            console.log(alert("Has agregado" + " " + cantidadPortamacetaZinc + " " + "Portamaceta zinc." + " " + "Valor total de la compra:" + " " + cantidadPortamacetaZinc*900));
        }else{
            alert("Error al ingresar Portamaceta zinc al carrito ¡Quedan solamente 5 unidades!")
        }
        break;
    case "Portamaceta trio vintage":
        let cantidadPortamacetaTrioVintage = (prompt(`Has elegido Portamaceta trio vintage, ¿Cuantos deseas agregar a tu carrito de compras?
                                    Valor por unidad: $1200
                                    Stock: 5 unidades`));
        if (cantidadPortamacetaTrioVintage<=5){
            console.log(alert("Has agregado" + " " + cantidadPortamacetaZinc + " " + "Portamaceta trio vintage." + " " + "Valor total de la compra:" + " " + cantidadPortamacetaTrioVintage*1200));
        }else{
            alert("Error al ingresar Portamaceta trio vintage al carrito ¡Quedan solamente 5 unidades!")
        }
        break;
    case "Esferas con flores preservadas":
        let cantidadEsferasFloresPreservadas = (prompt(`Has elegido Esferas con flores preservadas, ¿Cuantos deseas agregar a tu carrito de compras?
                                    Valor por unidad: $1500
                                    Stock: 5 unidades`));
        if (cantidadEsferasFloresPreservadas<=5){
            console.log(alert("Has agregado" + " " + cantidadEsferasFloresPreservadas + " " + "Esferas con flores preservadas." + " " + "Valor total de la compra:" + " " + cantidadEsferasFloresPreservadas*1500));
        }else{
            alert("Error al ingresar Portamaceta trio vintage al carrito ¡Quedan solamente 5 unidades!")
        }
        break;
    default:
        console.log(alert("Pronto ingresaran mas articulos, disculpe las molestias.)"));
        break;
}