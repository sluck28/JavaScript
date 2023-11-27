//maneras de hacer un objeto

//se considera un objeto estatico
const cliente =
{
    nombre:'juan',
    saldo:5000
}
//todos los objetos tienen un prototype

const {nombre,saldo}=cliente;
console.log(`mi cliente es ${nombre} y su saldo es : ${saldo}`);

//en cambio podemos hacer un objeto reutilizable con muchos datos el object construtor

function Cliente(nombre,saldo) {
    this.nombre=nombre;
    this.saldo=saldo;
}

const juan = new Cliente('juan',50000);
console.log(juan.nombre);