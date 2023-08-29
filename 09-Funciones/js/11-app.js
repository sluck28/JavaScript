//PARAMETROS EN UNA FUNCION NORMAL
const lenguaje= function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}

lenguaje('Javascript');


//PARAMETROS Y ARGUMENTOS A UN ARROW FUNCTION

/**
 * Se le pasa los parametros dentrod de los parentesis  de nuestra arrow function
 * o
 * Se pueden pasarle los parametros sin los parentesis solo un parametro
 * 
 * en cambio si se quiere pasar mas de un parametro se utilizan los parenteisi
 */
const arrow = (tecnologia, año)=> `Aprendiendo ${tecnologia} en ${año}`;

const juego= nombre=>`Aprendiendo a jugar ${nombre}`;

console.log(arrow('lenguaje Laravel',2023));

console.log(juego('Counter strike 1.6'));