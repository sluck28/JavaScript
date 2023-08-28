//DECLARACION DE UNA FUNCION

//Las funciones tienden a separar el codigo en pequeñas funciones
//Si mandamos a llamar a la funcion antes de declararla de esta forma si funcionara
sumar();
function sumar(){
    console.log(2+2);
}
//las funciones son reutilizables
//manera de llamar una funcion

//DIFERENCIA DE ESTOS 2 TIPOS DE FUNCIONES

//2da forma expresion de funcion
//En cambio en esta no funcionanara
sumar2();
const sumar2 = function(){
    console.log(5+5);
}
