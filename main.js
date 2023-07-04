// alert("hello world");

// Los valores con los que funciona son los siguientes:

// Jugador
// hp - 100
// str - 20
// def - 8
// Enemigo
// hp - 100
// str - 10
// def - 15
let Jugador;
let hp = 100;
let str = 20;
let def = 8;

let Enemigo
let hp2 = 100;
let str2 = 10;
let def2 = 15;

// Podéis probar vuestros propios valores si queréis.

// Crear un objeto llamado habilidades con la siguiente estructura:
// {
//     health:3,
//     boost:2,
//     leech:50,
//     fireBall:24,
//     ironBody:8
//    }
let Object = {
    health:3,
    boost:2,
    leech:50,
    fireBall:24,
    ironBody:8
   }

// Crear un array con los nombres de tus compañeros (strings).
let myFriends = ["Santiago","Javier","Otniel","Morales","Oscar"]
// Crear un array con los nombres de los profesores (strings).

// console.log(`-------------------------------------------------`);
// Crear una función para comenzar el juego.

// Haz una función para crear a tu personaje y dentro de ella crea un objeto con la siguiente estructura:

// · Hacer un random para coger una de las posiciones del array de nombres.
// · Filtrar el array de nombres a otro para que solo contenga el de la posición aleatoria.
// · Ese será el nombre que deberá aparecer.


// function Shark(){

// }
// Math.random;

// Name: value
// Pedir los datos por un prompt()
// hp: value
// str: value
// def: value
// haz un log con ese objeto.

// Repite los dos pasos anteriores para crear el objeto del enemigo. Recuerda usar el array de nombres del enemigo.


// console.log(`----------------------------------------------`);

//(1) Crea una función para el ataque del enemigo.
//(2) Dentro de la función haz que a la vida de tu personaje se le reste el ataque del enemigo menos la defensa del personaje.
// (3) Repite los pasos anteriores para crear la función de ataque de tu personaje, pero esta vez debe bajarle la vida al enemigo.

// console.log(`----------------------------------------------`);
// Haz que en la función del ataque de tu personaje compruebe si el enemigo todavía tiene vida (hp).

// Si aún le queda vida, poner la lógica de la resta de la vida y llamar a la función de ataque.

// Si no tiene vida (hp), comprobar si está en la segunda fase o no, y si no está en la segunda fase entonces:
// duplica la vida del enemigo, debes mostrar por consola como aumenta su vida de 1 en 1.
// multiplica su ataque por 1.75
// saca un alert para advertir al jugador de que el enemigo ha empezado su segunda fase, y que tendrá la opción de elegir entre obtener el triple de vida o un boost de fuerza y defensa

// Haz el código necesario para que el jugador escriba una de las opciones health o boost.
// Comprueba si el string que ha puesto el jugador está dentro del objeto habilidades y si no es ninguna de las palabras anteriores, que salga un mensaje diciendole que lo ha usado mal.


// la lógica de estas habilidades será seleccionar la key del objeto de habilidades y multiplicar su valor por la propiedad del personaje hp o str y def.


// Al tener el enemigo toda la vida recuperada, vuelve a atacar (llamar a la función de ataque del enemigo).

// Si yas está en la segunda fase, entonces poned un alet que diga que has derrotado a las fuerzas del mal.

// La función de ataque del enemigo deberá comprobar si al jugador le queda vida:
// Si le queda vida, poned la resta de su vida y llamad a la función de ataque del jugador.
// Si no le queda vida y el enemigo no está en segunda fase, mostrar por consola ("Has perdido").
// Si no le queda vida y el enemigo está en segunda fase, mostrar un alert que diga que te han derrotado pero que aún puedes usar una última habilidad.

// Poner un prompt para recoger el nombre de la habilidad.

// Comprobar que lo que ha escrito existe dentro del objeto de habilidades.

// Si está, reducirle la vida al enemigo el porcentaje del número que haya en el valor de la habilidad y sumarle eso mismo a la vida de vuestro personaje.

// Si no está, hacer un alert que diga que no existe es habilidad.
// Llamar a la función de ataque del jugador.






