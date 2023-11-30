
/**
 * HERENCIA 
 */
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

//PARA HEREDAR  USAMOS EXTENDS
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        //para acceder a atributos de otra clase usamos super
        super(nombre,saldo);
        this.telefono=telefono;
        this.categoria=categoria;
    }

    //para reescribir un metodo
    static Bienvenida(){
        return `Bienvenido al cajero de la empresa`
    }
}

console.log(Cliente.Bienvenida())

const empresa=new Empresa('Microsft',10000,54524324,'Tecnologia');
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.Bienvenida())