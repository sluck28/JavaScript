//clases porgramacion orientada a objetos

//crear clases en javascript para el
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //para poner metodos
    mostrarInformacion(){
       return`El saldo de ${this.nombre} es de saldo ${this.saldo}`
    }
    //propiedades estaticas
    static Bienvenida(){
        return 'Bienvenido al cajero';
    }
}

const juan= new Cliente('juan',90000);
console.log(juan);  
//para acceder a nuestro metodo
console.log(juan.mostrarInformacion())
//para acceder a los metodos estaticos no necesitan una instanciacion si no desde la clase
console.log(Cliente.Bienvenida());

//class Expression

// const Cliente2 =class{
//     constructor(nombre,saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
// }

// const juan2= new Cliente2('juan',90000);
// console.log(juan2);