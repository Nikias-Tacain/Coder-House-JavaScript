/*carrito de compras*/
const carrito = []
/*sin articulos en el carrito*/
function armandoCarrito() {
    const carritoCompleto = document.getElementById("carro")
    let carritoVacio = document.createElement("span")
    let carritoNoVacio = document.createElement("span")
    carritoVacio.innerHTML = (carrito.length === 0 && `Carrito vacio.Porfavor dirijase a `)
    carritoCompleto.appendChild(carritoVacio)
    carritoNoVacio.innerHTML = (carrito.length !== 0 && carrito)
}
armandoCarrito()
/*alerta sweetAlert*/
let botonSweetAlert = document.querySelector('buttonProductos')
botonSweetAlert.addEventListener('click', () => {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
    )
});
/*manipulacion del input celular*/
const alertaNombre = document.querySelectorAll(".numero")
alertaNombre.forEach(alertaNombreButton => {
    alertaNombreButton.addEventListener(`input`, imprimirTextoNombre)
})
function imprimirTextoNombre() {
    const divdatosNombre = document.getElementById("botonDatoNombre")
    let parrafoNombre = document.createElement("span")
    parrafoNombre.innerHTML = ("✔Telefono Celular ingresado correctamente.")
    divdatosNombre.appendChild(parrafoNombre)
}
/*manipulacion del input enviar*/
const alertaEnviar = document.querySelectorAll(".buttonEnviar")
alertaEnviar.forEach(alertaEnviarButton => {
    alertaEnviarButton.addEventListener("click", imprimirTextoEnviar)
})
function imprimirTextoEnviar() {
    const divdatosEnviar = document.getElementById("botonDatoEnviar")
    let parrafoEnviar = document.createElement("span")
    parrafoEnviar.innerHTML = (`✔Gracias por su compra, el resumen de la misma sera enviado a su correo electronico.`)
    divdatosEnviar.appendChild(parrafoEnviar)
}

/*localstorage*/
localStorage.setItem(carrito, 1)
