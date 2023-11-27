//varibles
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//event listeners
eventListeners();

function eventListeners() {
  formulario.addEventListener("submit", agregarTweets);
  //cuando el documento este listo
  document.addEventListener('DOMContentLoaded',()=>{
    //carga nuestros tweets ingresados en forma de areglo
    tweets=JSON.parse(localStorage.getItem('tweets')) || [];
    
    crearHTML();
  })
}

//funciones

function agregarTweets(e) {
  e.preventDefault();
  //texarea donde el usuario escribe y obtenemos el valor de ese contenido
  const tweet = document.querySelector("#tweet").value;

  if (tweet === "") {
    agregarError("El tweet no puede ir vacio");
    return;
  }

  const tweetOBJ = {
    //agregamos un identificador a nuestro tweet ya que nos servira para eliminar los tweets
    id: Date.now(),
    tweet
  };
  //añadir al arreglo de tweets
  tweets = [...tweets, tweetOBJ];
  console.log(tweets);
  //una vez agregado mostramos el HTML
  crearHTML();

  //reiniciar el formulario
  formulario.reset();
}

function agregarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //insertamos en el contenido
  const contenido = document.querySelector("#contenido");

  contenido.appendChild(mensajeError);
  //agregamos un tiempo para que el mensaje de error se elimine

  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function crearHTML() {

  limpiarHMTL();
  //si hay tweet creara el html

  //agregar un boton de eliminar
  if(tweets.length>0){
    tweets.forEach(tweet=>{
      const botonElminar=document.createElement('a');
      botonElminar.classList.add('borrar-tweet');
      botonElminar.innerText="X";

      //añadimos la funcion eliminar
      botonElminar.onclick=()=>{
        borrarTweet(tweet.id);
      }


      //creamos el HTML
      const li=document.createElement('li');

      //añadimos el texto

      li.innerText= tweet.tweet;
      //añadimos en el HTML 
      li.appendChild(botonElminar);
      listaTweets.appendChild(li);




    });
  }
  sincronizarStorage();
}

  //eliminar un tweet 
  function borrarTweet(id) {
    //para filtrar los tweets y los elimine
    tweets=tweets.filter(tweet => tweet.id !==id);
    crearHTML();
  }

//limpiamos el HTML
function limpiarHMTL() {
 while (listaTweets.firstChild) {
     listaTweets.removeChild(listaTweets.firstChild);
 }  
}

//funcion para guardar los tweets en el localstorage
function sincronizarStorage()
{
  //para guardar arreglo en el local storage
  //cuando se agrega un tweet
  localStorage.setItem('tweets',JSON.stringify(tweets));  

 
}