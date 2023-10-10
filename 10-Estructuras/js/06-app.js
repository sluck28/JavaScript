//operador && para evaular mas de 2 condiciones en un if

const usuario=false;
const puedePagar=true;

if(usuario && puedePagar){
    console.log(`el usuario si puede comprar`);
    //manera de negar una condicion
}else if(!usuario){
    console.log('inicia sesion o crea una cuenta');
}else if(!puedePagar){
    console.log('no tienes fondos insuficientes')
}

else{
    console.log('no puedes comprar el usuario')
}

