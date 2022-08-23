let nombre = prompt ("Ingrese su nombre:")
let apellido = prompt ("Ingrese su apellido:")

alert ("Bienvenido" + " " + nombre + " " + apellido)

let entrada = prompt (nombre + " " + apellido + " " + "¡Hola nuevamente!" + " " + "vaya ingresando palabras o numeros, y cuando finalize escriba ESC para interrumpir")

let texto = " "

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese nuevamente palabras o numeros y cuando aya finalizado escriba ESC")
}

alert(nombre + " " + apellido + " " + "esto es lo que salio de lo que escribiste:") 
alert(texto)