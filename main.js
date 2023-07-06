// alert("hello world");

// Los valores con los que funciona son los siguientes:





// console.log(`-------------------------------------------------`);
// Crear una función para comenzar el juego.
// Tened en cuenta que a lo mejor es posible que quizás podáis llegar a necesitar en un caso muy muy extremo alguna otra variable.
// Haz una función para crear a tu personaje y dentro de ella crea un objeto con la siguiente estructura:

// · Hacer un random para coger una de las posiciones del array de nombres.
// · Filtrar el array de nombres a otro para que solo contenga el de la posición aleatoria.
// · Ese será el nombre que deberá aparecer.
 
// Podéis probar vuestros propios valores si queréis.

// Crear un objeto llamado habilidades con la siguiente estructura:
// let Object = {
//     health:3,
//     boost:2,
//     leech:50,
//     fireBall:24,
//     ironBody:8
//    }
let habilitys = {
    health:3,
    boost:2,
    leech:50,
    fireBall:24,
    ironBody:8
  }

// Crear un array con los nombres de tus compañeros (strings).
let Sharks = ["Santiago","Javier","Otniel","Morales","Oscar"]
// Crear un array con los nombres de los profesores (strings).
let fish = ["Ángel","Marcos","Pedro","Daniel","Millard"]

// mi otra Variable
// let anotherVar = ""

  function assasinSharkInit(){
    let sharksHungry = {} 
    function sharkAverage(hp,defens,strong){
      min = 0;
      max = 5;
      let  result = Math.random()*(max -min)+min;
      result = parseInt(result);
      let nombre = Sharks[result];

      sharksHungry = {
        name :nombre ,
        defensa :defens ,
        salud :hp ,
        strong :strong ,
      }
      
      return sharksHungry
    }
        
        let hp = 100;
        let strong = 20;
        let defens = 8;
    // let hp = prompt("introduce el valor de salud que desa darle a tu personaje");
    // let strong = prompt("introduce el valor de fuerza que desa darle a tu personaje");
    // let defens = prompt("introduce el valor defensa que desa darle a tu personaje");
    // let Jugador ="";
        
  
      sharkAverage(hp,defens,strong);
      // console.log(sharkAverage(hp,defens,strong));
      let tigerFish = {};
      function fishesBad(){
        min = 0;
        max = 5;
        let  result = Math.random()*(max -min)+min;
        result = parseInt(result);
        let nombre =  fish[result];        
        
        // let hp2 = prompt("introduce el valor de salud que desa darle a tu Enemigo");
        // let strong3 = prompt("introduce el valor de fuerza que desa darle a tu Enemigo");
        // let defens4 = prompt("introduce el valor defensa que desa darle a tu Enemigo");
        
        let hp2 = 100;
        let strong3 = 10;
        let defens2 = 15;

         tigerFish = {
          name : nombre ,
          defensa :defens2 ,
          salud : hp2 ,
          fuerza : strong3 ,
        }
        
        return tigerFish
      }      
      fishesBad();

      // profes()
      //van haber dos.    
      // function attackEnemy (){
      
      // 
      function attackfulTigerFish(sharkAverage,tigerFish){
                              //10             tiburon: 8    
        let resta = tigerFish.fuerza - sharkAverage.defensa;

       sharkAverage.salud=sharkAverage.salud -Math.abs(resta);
        


        console.log(sharkAverage);
        console.log(tigerFish);

        
      }
        
        attackfulTigerFish(sharksHungry,tigerFish)

          
        
        
        
      function atackfullShark(sharkAverage,tigerFish){

        let resta2 = sharkAverage.strong - tigerFish.defensa;
         tigerFish.salud = tigerFish.salud - resta2;

        console.log(sharkAverage);
        console.log(tigerFish);

        if(tigerFish.salud <= 0){

        }   


      }

      atackfullShark(sharksHungry,tigerFish);
      // let  attack = personaje.salud - Enemys.fuerza
      // console.log(attack);
      
    }
    assasinSharkInit();

    
    



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





