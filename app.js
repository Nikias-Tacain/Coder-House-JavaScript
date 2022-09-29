/*sin articulos en el carrito*/
function mostrarMensajeAdress (){
    let inputvalueName = document.getElementById("name").value;
    let inputvalue = document.getElementById("adress").value;
    let mensajeInputs = document.getElementById("mensaje")
    mensajeInputs.innerHTML =`Gracias ${inputvalueName} !!!, los datos fueron registrados correctamente, te mandaremos el resumen de su compra, a esta direccion de correo electronico: ${inputvalue}`
    let formulario = document.getElementById("customer")
    formulario.innerHTML = ""
}
/*Productos --- Tienda*/
const stockProductos = [
    {id: 1, nombre: "Injertos",precio: 1600,imagen: "../logos/injertos.svg"},
    {id: 2, nombre: "Velas de soja",precio: 600,imagen: "../logos/Velas-de-soja.svg"},
    {id: 3, nombre: "Combo Duo Velas + Sucus",precio: 1200,imagen: "../logos/Combo-duovelas-sucus.svg"},
    {id: 4, nombre: "Portamaceta Zinc",precio: 990,imagen: "../logos/PortamacetaZinc.svg"},
    {id: 5, nombre: "Portamaceta Trio Vintage",precio: 2300,imagen: "../logos/Portamaceta-Trio-Vintage.svg"},
    {id: 6, nombre: "Ramos Flores Preservadas",precio: 1200,imagen: "../logos/Ramos-Flores-Preservadas.svg"},
    {id: 7, nombre: "Bouquets Partys",precio: 250,imagen: "../logos/BouquetsPartys.svg"},
    {id: 8, nombre: "Coronas Rusticas",precio: 1500,imagen: "../logos/Coronas-Rusticas.svg"},
    {id: 9, nombre: "Esferas con flores preservadas",precio: 600,imagen: "../logos/Esferas-flores-preservadas.svg"}
]
/*agregar elementos*/

let contenedorProductos = document.getElementById('divTarjetas');

const contenedorCarrito = document.getElementById('carritoContenedor')

/*carrito de compras*/
const carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add('tarjetas__texto', 'tarjetas');
    div.innerHTML = `
    <img class="tarjetas__img" src= ${producto.imagen} alt="...">
    <h3 class="tarjetas__nombre">${producto.nombre}</h3>
    <p class="tarjetas__precio">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar tarjetas__botton">Agregar al carrito</button>`
    contenedorProductos.appendChild(div);

    const botonPress = document.getElementById(`agregar${producto.id}`);
    botonPress.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });
});
const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId);
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito);
};

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "Carrito de compras:"
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p class= "carrito__precio">Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}<span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar">🗑️</button>`

        contenedorCarrito.appendChild(div)

    })
}

/*localstorage*/

