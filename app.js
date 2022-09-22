/*Alerta "Has agregado productos al carrito*/
const alertCarrito = document.querySelectorAll(".tarjetas__botton")
alertCarrito.forEach(alertCarritoButton => {
    alertCarritoButton.addEventListener("click", productosCarrito)
})
function productosCarrito() {
    alert(`                            El producto se ha agregado exitosamente.


                            Dirijase al carrito para finalizar su compra.

                                                ¡Muchas Gracias!`)
}
/*manipulacion del input nombre*/
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

/*localstorange*/
localStorage.setItem(alertCarrito, 1)

