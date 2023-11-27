//heredar prototype
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

function persona(nombre,saldo,telefono) {
    //heradar 
    Cliente.call(this,nombre,saldo)
    this.telefono=telefono;
    
}

const Alfredo= new persona('Alfredo',9000,5583959563);
console.log(Alfredo);