//else if para revisar otra condicion que se cumpla

const dinero=300;
const totalApagar=500;
const tarjeta=true;

function pagar(dinero) {
    console.log(`pagando : ${totalApagar}`)
}

function sinDinero() {
    console.log(`sin dinero suficiente : $${dinero} por favor ingresa la cantidad de dinero a pagar: $${totalApagar}`);
}

function metodoCorrecto(tarjeta) 
{
    this.tarjeta=tarjeta;
}


if(dinero >= totalApagar)
{
    pagar(dinero);
}else if(tarjeta){
    console.log(`tarjeta`);
}
else{
    sinDinero();
}