function Cliente(nombre,saldo) {
    this.nombre=nombre;
    this.saldo=saldo;
}

const juan = new Cliente('juan',50000);

//CREANDO PROTOTYPES PARA UN CLIENTE

function formatearCliente(cliente) {
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo ${saldo}`
}

console.log(formatearCliente(juan));

//CREAMOS UNO PARA EMPRESA 
 
function Empresa(nombre,saldo,categoria) {
    this.nombre=nombre;
    this.saldo=saldo;
    this.categoria=categoria;
}

const Microsoft =new  Empresa ('Microsoft',100000,'Tecnologia');

function formatearEmpresa(empresa) {
    const {nombre,saldo,categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo:${saldo}, y pertenece a ala categoria de : ${categoria}`
}

console.log(formatearEmpresa(Microsoft));
