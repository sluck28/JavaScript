//Delegation

const cardDiv=document.querySelector('.card');

cardDiv.addEventListener('click',e =>{
    
    if(e.target.classList.contains('titulo')){
        console.log('diste click en titulo');
    }
})