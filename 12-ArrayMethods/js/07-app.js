//concact para unir 2 arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre'];
const meses3 = ['noviembre'];
//con concat
const resultado= meses.concat(meses2,meses3);
console.log(resultado);

//spread operator
const resultado2 = [...meses,...meses2,...meses3];
console.log(resultado2);
