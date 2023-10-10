//para detener la funcion de un if


function pago(dinero) {
       if(dinero >500){
        console.log("puedes pagar")
        return
       }

       if(dinero<300){
        console.log("No pagar")
        return
       }
}

pago(700);