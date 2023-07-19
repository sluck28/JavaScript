//object key
const videojuego=
{
    nombre: "Videojuego",
    precio: 100000,
    descuento: 0.15
}
//nos retorna un arreglo con los keys del objeto
//para saber si la consulta fue correcta
console.log(Object.keys(videojuego));

//OBJECT VALUES
//retorna los valores
console.log(Object.values(videojuego));

//OBJECT ENTRIES
console.log(Object.entries(videojuego));
