/*carrito de compras*/
const carrito = []
/*sin articulos en el carrito*/
function armandoCarrito() {
    const carritoCompleto = document.getElementById("carro")
    let carritoVacio = document.createElement("span")
    let carritoNoVacio = document.createElement("span")
    carritoVacio.innerHTML = (carrito.length === 0 && `El carrito se encuentra vacio...`)
    carritoCompleto.appendChild(carritoVacio)
    carritoNoVacio.innerHTML = (carrito.length !== 0 && carrito)
}
armandoCarrito()
/*alsweetAlert*/
const botonSweetAlert = document.querySelector('buttonProductos')
botonSweetAlert.addEventListener('click', () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
});
/*agregar elementos*/
function mostrarMensajeAdress (){
    let inputvalueName = document.getElementById("name").value;
    let inputvalue = document.getElementById("adress").value;
    let mensajeInputs = document.getElementById("mensaje")
    mensajeInputs.innerHTML =`Gracias ${inputvalueName} !!!, los datos fueron registrados correctamente, te mandaremos el resumen de su compra, a esta direccion de correo electronico: ${inputvalue}`
    let formulario = document.getElementById("customer")
    formulario.innerHTML = ""
}

/*Productos --- Tienda*/

/*localstorage*/
