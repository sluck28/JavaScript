//DESTRUCTURING PARA ARREGLOS

//Destructuring en arreglos
const numeros=[1,2,3,5,6];
//podemos llamarlo como sea en un destructuring de arreglos
const [primero,segundo]=numeros;
console.log('posicion [1]',primero,'posicion [2]',segundo);


//para acceder a alguna posicion en especifico del arreglo pondremos , para decir que no se quiere acceder
const [ , , tercero]=numeros;
console.log('posicion [3]',tercero);
