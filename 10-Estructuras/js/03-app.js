//operadores menor que y mayor que

const dinero=700;

const totalApagar=300;

function pagar(dinero) {
    console.log(`pagando : ${totalApagar}`)
}

function sinDinero() {
    console.log(`sin dinero suficiente : $${dinero} por favor ingresa la cantidad de dinero a pagar: $${totalApagar}`);
}

if(dinero >= totalApagar)
{
    pagar(dinero);
}else{
    sinDinero();
}