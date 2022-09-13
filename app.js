

/*Productos tienda*/
const productos = document.querySelector(".tienda")

function creartarjeta([img,producto,nombre,precio,carrito]) {
    let code = `
    <div class="tarjetas">
        <img src="${img}" alt="${producto}">
        <div class="tarjetas__texto">
            <h2 class="tarjetas__nombre">${nombre}</h2>
            <p class="tarjetas__precio">${precio}</p>
            <br>
            <button class="tarjetas__botton">${carrito}</button>
        </div>
    </div>`
    productos.innerHTML += code;
}

let injertos = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/07/greenlove/entities/img-20191018-wa0040-28201346.jpg",
"injertos",
"Injertos",
"$ 1300",
"Agregar al carrito"]

let velasSoja = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/img-20210712-183007-1442-16225856.jpg",
"Velas de soja",
"Velas de soja",
"$ 600",
"Agregar al carrito"]

let comboDuo = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/-20220623-192544-00002-16230554.png",
"Combos dúos velas + sucus",
"Combos dúos velas + sucus",
"$ 1200",
"Agregar al carrito"]

let portamacetaZinc = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-1411002-12180212.jpg",
"Portamaceta zinc",
"Portamaceta zinc",
"$ 990",
"Agregar al carrito"]

let macetasCemento = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210111-010433-16193916.jpg",
"Macetas de cemento",
"Macetas de cemento",
"$ 700",
"Agregar al carrito"]

let portamacetaTrioVintage = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141007-16221043.jpg",
"Portamaceta trio vintage",
"Portamaceta trio vintage",
"$ 2300",
"Agregar al carrito"]

let macetasPlasticasM10 = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-1341382-17001027.jpg",
"Macetas plásticas estampadas M10",
"Macetas plásticas estampadas M10",
"$ 500",
"Agregar al carrito"]

let macetasPlasticasM6 = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141317-17001458.jpg",
"Macetas plásticas estampadas M6",
"Macetas plásticas estampadas M6",
"$ 150",
"Agregar al carrito"]

let portamacetaZincchico = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-140634-17002204.jpg",
"Portamacetas zinc",
"Portamacetas zinc",
"$ 600",
"Agregar al carrito"]

let macetaZinc = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220619-141214-17002452.jpg",
"Maceta Zinc",
"Maceta Zinc",
"$ 650",
"Agregar al carrito"]

let ramoFloresPreservadas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210712-160011-03135131.jpg",
"Ramos flores preservadas",
"Ramos flores preservadas",
"$ 1200",
"Agregar al carrito"]

let bouquetsPartys = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210711-203025-08215455.jpg",
"Bouquets partys",
"Bouquets partys",
"$ 250",
"Agregar al carrito"]

let ramosGrandes = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20210711-202726-08215929.jpg",
"Ramos grandes",
"Ramos grandes",
"$ 1500",
"Agregar al carrito"]

let EsferasFloresPreservadas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/img-20220808-wa0149-12161432.jpg",
"Esferas con flores preservadas",
"Esferas con flores preservadas",
"$ 600",
"Agregar al carrito"]

let coronasRusticas = ["https://www.greenlove.ar/images/cache/tpt700x700/2022/08/greenlove/entities/20220709-1316232-16223800.jpg",
"Coronas rústicas",
"Coronas rústicas",
"$ 1500",
"Agregar al carrito"]




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
