//condicion or revisa una condicion o la otra

const efectivo=300;
const credito=400;
const disponible =efectivo+credito;
const totalApagar=600;

if(efectivo > totalApagar || credito>totalApagar || disponible>totalApagar){
    console.log('si podemos pagar');
}else{
    console.log('no puedes pagar')
}