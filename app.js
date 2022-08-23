// let food = prompt("Que vas a pedir ?");


// switch (food) {
//     case "hamburguesa":
//         console.log(`Pedido: ${food}, valor $800`);
//         break;
//     case "empanadas":
//         console.log(`Pedido: ${food}, valor $75 cada una`);
//         break;
//     case "lomo":
//         console.log(`Pedido: ${food}, valor $1000`);
//         break;
//     default:
//         console.log("no elegiste nada");
//         break;
// }

// let option = prompt(`Elija una opcion:
// 1: Garra
// 2: Batman
// 3: SpiderHead
// 4: Terraria
// `)

// switch (option) {
//     case "1":
//         console.log("Usted a elegido la pelicula Garra.");
//         console.log("Se estreno en el año 2022 y el deporte es el basquetball");
//         break;
//     case "2":
//         console.log("Usted a elegido la pelicula Batman.");
//         console.log("Se estreno en el año 2022 y se trata de un super heroe");
//         break;
//     case "3":
//         console.log("Usted a elegido la pelicula SpiderHead.");
//         break;
//     case "4":
//         console.log("Usted a elegido la pelicula Terraria.");
//     default:
//         console.log("Usted no a elegido ninguna pelicula de la lista. Porfavor si desea ver alguna, elijala.");
//         break;
// }

// let x = 8

// while (x <= 10) {
//     console.log(`El valor de X es ${x}`);
//     x++;    
// }
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


// let y = 0

// do{
//     console.log(`El valor de Y es ${y}`);
//     y++
// } while (y <= 10);

// let x = 25

// do {
//     console.log(x);
//     x++
// } while (x < 30);


// for (let i = 0; i < 50; i++) {
//     alert(`El valor de i es ${i}`);    
// }