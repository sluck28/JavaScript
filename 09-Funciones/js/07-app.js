//COMUNICARSE ENTRE FUNCIONES

iniciarApp();

function iniciarApp() {
    console.log("iniciar aplicaciones");
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Segunda aplicacion');
    //Podemos mandar a lamar funciones dentro de las funciones aun asi tengan parametros
    usuarioAutenticado('Alfredo');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario.. espere..');
    console.log(`usuario ${usuario} autenticado correctamente`);
}