let contenedorProductos = document.getElementById('divTarjetas');

const contenedorCarrito = document.getElementById('carritoContenedor')

const vaciarCarrito = document.getElementById('vaciar-carrito')

const precioTotal = document.getElementById('precioTotal')

const formularioCarrito = document.getElementById('finalizarCompra')

const formularioDiv = document.getElementById('datosDiv')
/*Productos --- Tienda*/
    fetch('../constructor/data.json')
        .then((res)=>res.json())
        .then((data)=>{
            data.forEach((producto) => {
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
            /*carrito de compras*/
            let carrito = []

            document.addEventListener('DOMContentLoaded', () => {
                if (localStorage.getItem('carrito')) {
                    carrito = JSON.parse(localStorage.getItem('carrito'))
                    actualizarCarrito()
                }
            })

            vaciarCarrito.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Deseas borrar todo tu carrito?',
                    showDenyButton: true,
                    confirmButtonText: 'Borrar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Se ha eliminado correctamente el carrito', '', 'success')
                        carrito.length = 0
                        actualizarCarrito()
                    } else if (result.isDenied) {
                    Swal.fire('Mantuviste tu carrito a salvo', '', 'info')
                    }
                })
            })
            const agregarAlCarrito = (prodId) => {
                Toastify({

                    text: "Se ha agregado correctamente al carrito. (Desliza hacia abajo para ver lo que agregaste)",
                    
                    duration: 2500
                    
                }).showToast();
                const existe = carrito.some (prod => prod.id === prodId)

                if (existe) {
                    const prod = carrito.map (prod => {
                        if (prod.id === prodId)  {
                            prod.cantidad++
                        }
                    })
                }else{
                    
                const item = data.find((prod) => prod.id === prodId);
                carrito.push(item)
            }
            actualizarCarrito()
            }
            const eliminarDelCarrito = (prodId) => {
                Toastify({

                    text: "Ha sido eliminado con exito.",
                    
                    duration: 1500
                    
                }).showToast();
                const item = carrito.find((prod) => prod.id === prodId)
                const indice = carrito.indexOf(item)
                carrito.splice(indice, 1)
                actualizarCarrito()
            }
            const actualizarCarrito = () => {
                contenedorCarrito.innerHTML = ""
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
                localStorage.setItem('carrito', JSON.stringify(carrito))
                precioTotal.innerHTML = carrito.reduce((acc , prod)=> acc + prod.precio * prod.cantidad,0)
            }
            formularioCarrito.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Deseas finalizar tu compra? Esta accion sera irreversible',
                    showDenyButton: true,
                    confirmButtonText: 'Finalizar compra'
                }).then((result) => {
                    if (result.isConfirmed) {
                        botonesCarrito.innerHTML = ""
                const div = document.createElement('div')
                div.innerHTML = `<h1>INGRESE SUS DATOS</h1>
                <div class="contact-card">
                    <div class="form">
                        <div class="column-1">
                            <label for="name">Nombre y apellido</label>
                            <label for="mail">Telefono</label>
                            <label for="mail">Direccion de correo</label>
                        </div>
                        <div class="column-2">
                            <input class="field" type="text" name="name" id="name">
                            <input class="field" type="text" name="phone" id="phone">
                            <input class="field" type="text" name="adress" id="adress">
                            <button onclick="mostrarMensajeAdress()" class="buton" id="enviarInfo">Enviar Info</button>
                        </div>
                    </div>
                </div>`
                formularioDiv.appendChild(div)
                    } else if (result.isDenied) {
                    Swal.fire('Siga tranquilimente con sus compras, gracias', '', 'info')
                    }
                })
                function mostrarMensajeAdress (){
                    let inputvalueName = document.getElementById("name").value;
                    let inputvalue = document.getElementById("adress").value;
                    let mensajeInputs = document.getElementById("mensaje");
                    datosDiv.innerHTML = ""
                    mensajeInputs.innerHTML =`Gracias ${inputvalueName} !!!, los datos fueron registrados correctamente, te mandaremos el resumen de su compra a esta direccion de correo electronico: ${inputvalue}`
                    carrito.length = 0
                    actualizarCarrito()
                }
            })


        })