//como recorrer un arreglo
const arreglo=['alfredo','juan','alvarado','rojas','erika'];
//para recorrer el arreglo
//length nos permite decir para saber cuanto mide el arreglo
console.log(arreglo.length);
//foor lop para recorrer un arreglo
//funcion que tiene 3 partes

/**
 * 1 donde va iniciar el recorrido
 * 2 cuantas veces se va a ejecutar el codigo en este caso la cantidad de veces del contenido del arreglo
 * 3 Y la incrementacion de uno en uno 
 */
for(let i=0;i<arreglo.length;i++){
    //nuestra variable i nos indica en que posicion del arreglo va
    console.log(arreglo[i]);//para que se vaya imprimiendo ponemos el nombre del arreglo en la posicion de  [i  ]
}

console.table(arreglo);