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

/*pronto eliminar y cambiar*/
function productoInjertos() {
    /*let articulos = {
        articuloInjerto: "Injertos", precio: 1300
    }
    carrito.push(`${articulos.articuloInjerto}: ${articulos.precio}`)
    console.log(carrito);*/
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}
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
