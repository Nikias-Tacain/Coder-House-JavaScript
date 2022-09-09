let ingresoNombre = prompt("Has Ingresado a Green Love, ¿Cual es su nombre?")

alert("Bienvenido/a" + " " + ingresoNombre.toUpperCase() + " " + "estos son nuestros productos:")

    let catalogo = prompt(`(Escriba la opcion que desea elegir)
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

/*Productos tienda*/


const productos = document.querySelector(".tienda")

function creartarjeta([img,producto,nombre,precio]) {
    let code = `
    <div class="tarjetas">
        <img src="${img}" alt="${producto}">
        <div class="tarjetas__texto">
            <h2 class="tarjetas__nombre">${nombre}</h2>
            <p class="tarjetas__precio">${precio}</p>
        </div>
    </div>
    `
    productos.innerHTML += code;
}

let injertos = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/07/greenlove/entities/img-20191018-wa0040-28201346.jpg",
"injertos",
"Injertos",
"$ 1300"]

let velasSoja = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/img-20210712-183007-1442-16225856.jpg",
"Velas de soja",
"Velas de soja",
"$ 600"]

let comboDuo = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/-20220623-192544-00002-16230554.png",
"Combos dúos velas + sucus",
"Combos dúos velas + sucus",
"$ 1200"]

let portamacetaZinc = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-1411002-12180212.jpg",
"Portamaceta zinc",
"Portamaceta zinc",
"$ 990"]

let macetasCemento = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210111-010433-16193916.jpg",
"Macetas de cemento",
"Macetas de cemento",
"$ 700"]

let portamacetaTrioVintage = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141007-16221043.jpg",
"Portamaceta trio vintage",
"Portamaceta trio vintage",
"$ 2300"]

let macetasPlasticasM10 = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-1341382-17001027.jpg",
"Macetas plásticas estampadas M10",
"Macetas plásticas estampadas M10",
"$ 500"]

let macetasPlasticasM6 = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141317-17001458.jpg",
"Macetas plásticas estampadas M6",
"Macetas plásticas estampadas M6",
"$ 150"]

let portamacetaZincchico = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-140634-17002204.jpg",
"Portamacetas zinc",
"Portamacetas zinc",
"$ 600"]

let macetaZinc = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141214-17002452.jpg",
"Maceta Zinc",
"Maceta Zinc",
"$ 650"]

let ramoFloresPreservadas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210712-160011-03135131.jpg",
"Ramos flores preservadas",
"Ramos flores preservadas",
"$ 1200"]

let bouquetsPartys = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210711-203025-08215455.jpg",
"Bouquets partys",
"Bouquets partys",
"$ 250"]

let ramosGrandes = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210711-202726-08215929.jpg",
"Ramos grandes",
"Ramos grandes",
"$ 1500"]

let EsferasFloresPreservadas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/img-20220808-wa0149-12161432.jpg",
"Esferas con flores preservadas",
"Esferas con flores preservadas",
"$ 600"]

let coronasRusticas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220709-1316232-16223800.jpg",
"Coronas rústicas",
"Coronas rústicas",
"$ 1500"]




creartarjeta(injertos)
creartarjeta(velasSoja)
creartarjeta(comboDuo)
creartarjeta(portamacetaZinc)
creartarjeta(macetasCemento)
creartarjeta(portamacetaTrioVintage)
creartarjeta(macetasPlasticasM10)
creartarjeta(macetasPlasticasM6)
creartarjeta(portamacetaZincchico)
creartarjeta(macetaZinc)
creartarjeta(ramoFloresPreservadas)
creartarjeta(bouquetsPartys)
creartarjeta(ramosGrandes)
creartarjeta(EsferasFloresPreservadas)
creartarjeta(coronasRusticas)
