//para formatear fechas con moment js 

let diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));