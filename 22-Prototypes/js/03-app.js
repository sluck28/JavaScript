//CREANDO UN PROTOTYPE
function Cliente(nombre,saldo) {
    this.nombre=nombre;
    this.saldo=saldo;
}
//agregar mas funciones de cliente
Cliente.prototype.tipoCliente = function(){
    //podemos acceder a los datos de mi object constructor con this
    let tipo;

    if(this.saldo>10000){
        tipo='Gold';
    }else if(this.saldo >5000){
        tipo='Silver';
    }else{
        tipo='Bronce';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    //podemos acceder a otros prototypes dentro de otros
    return `Nombre ${this.nombre} , Saldo ${this.saldo} , Cliente ${this.tipoCliente()}`;
}
//para retirar saldo de un prototype
Cliente.prototype.retirarSaldo= function (retira) {
    this.saldo-=retira;
}

//INSTANCIARLO
const pedro=new Cliente('Pedro',6000);
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(1000)
console.log(pedro.nombreClienteSaldo());
// console.log(pedro);
// console.log(pedro.tipoCliente());