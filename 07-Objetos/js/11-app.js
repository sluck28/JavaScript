//usar la palabra reservada $this para acceder a los datos de una funcion

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 27,
    altura: 1.64,
    peso: 64,
    mostrarInfo: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

const persona2 = {
    nombre: 'Juana',
    apellido: 'Pérez',
    edad: 27,
    altura: 1.64,
    peso: 64,
    mostrarInfo: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}


persona.mostrarInfo()
persona2.mostrarInfo()