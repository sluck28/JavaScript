const busqueda=document.querySelector('.busqueda');

// busqueda.addEventListener('keyup',()=>{
//     console.log('escribiendo');
// })

// busqueda.addEventListener('keydown',()=>{
//     console.log('escribiendo.. key down');
// })

busqueda.addEventListener('copy',()=>{
    console.log('copy');
})

busqueda.addEventListener('cut',()=>{
    console.log('cut');
});

busqueda.addEventListener('paste',()=>{
    console.log('paste');
}) 

busqueda.addEventListener('input',(e)=>{
    console.log(e.target.value);
});