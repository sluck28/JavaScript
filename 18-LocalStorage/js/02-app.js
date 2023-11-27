//como obtener los datos del localstoragen con getItem
const nombre =localStorage.getItem('nombre');
console.log(nombre);

//para imprimir el objeto del localstorage 
const productoJSON=localStorage.getItem('producto');
//conevertimos el objeto de string a un objeto
console.log(JSON.parse(productoJSON));

const mesesJSON=localStorage