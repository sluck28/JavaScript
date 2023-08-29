//AÑADIR FUNCIONES A OBJETOS

const reproductor={
    //asi podemos agregar a un atributo de un objeto una funcion
    reproducir: function reproducir(cancion) {
        console.log(`Reproduciendo cancion ${cancion}`);
    },
    pausar: function pausar() {
        console.log('Pausando el reproductor')
    },
    borrar: function (cancion) {
        console.log(`Se esta borrando la cancion llamada ${cancion}`)
    },
    playlist: function creandoPlaylist(nombre) {
        console.log(`Se esta creando la playlist ${nombre}`)
    }
    
}

//asi podemos llamar nuestra funcion de nuestro objeto
reproductor.reproducir('EnterSandman');
reproductor.pausar()
reproductor.borrar('EnterSandman');
reproductor.playlist('Metallica');
reproductor.playlist('Phonk');


//podemos agrear mas atributos a nuestro objeto 

// reproductor.borrar=function borrar(cancion) {
//     console.log(`Borrando la cancacion ${cancion}`);
// }


