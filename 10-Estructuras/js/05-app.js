//Swtich para evaluar multiples condiciones

let metodoPago;



function pago(metodoPago) {
    switch(metodoPago){
        //case
        case 'efectivo':
            pagando();
            console.log('pagaste conefectivos');
            break;
        case 'tarjeta':
            pagando();
            console.log('pagaste con tarjeta');
            break;
        case 'cheque':
            pagando();
            console.log('pagaste con cheque');
            break ;
            default:
                console.log('metodo de pago no soportado');
                break;
    }
}

pago('tarjeta')


