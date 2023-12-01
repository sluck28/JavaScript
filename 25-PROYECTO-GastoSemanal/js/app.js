//PROYECTO GASTO SEMANAL CON CLASES
//variables
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//eventos
evenListeners();
function evenListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  formulario.addEventListener("submit", agregarGastos);
}

//clases
class Presupuesto {
  constructor(presupuesto) {
    //recibe los datos de l prompt y lo convierte en numero ya que es un string
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    //agregamos el gasto al arreglo
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
  }
  calcularRestante(){
    
  }

}

class UI {
  //para insertar el presupuesto
  insertarPresupuesto(cantidad) {
    /**
     * agregamos los valores del presupuesto
     * en los span del HTML
     */
    const { presupuesto, restante } = cantidad;
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    divMensaje.textContent = mensaje;

    //insertamos en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  agregarGastoLista(gastos) {
    this.borrarHTML();
    //iteramos sobre los gastos
    gastos.forEach((gasto) => {
      //iteramos sobre los gastos
      const { cantidad, nombre, id } = gasto;
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className='list-group-item d-flex justify-content-between align-items-center';
      //le ponemos el id a nuestro li
      nuevoGasto.dataset.id = id;
      nuevoGasto.innerHTML=`
        ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
      `
      //boton para borrar el gasto
      const btnBorrar=document.createElement('button');
      btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
      btnBorrar.textContent='borrar';
      nuevoGasto.appendChild(btnBorrar);
      //agregamos el li al hTML
      gastoListado.appendChild(nuevoGasto);
      
    });
  }

  borrarHTML(){
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }
}
//instanciar
const ui = new UI();
let presupuesto;
//funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto");
  /**
   * Validamos si esta vacio
   * si da en cancelar
   * si ingresa letras
   * si ingresa numeros negativos
   */
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario || presupuestoUsuario <= 0)
  ) {
    //recarga la ventana actual si no tiene datos
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);
  ui.insertarPresupuesto(presupuesto);
}

//para validar nuestro formulario
function agregarGastos(e) {
  e.preventDefault();
  //usamos value para obtener el valor ingresado dentro del input
  const nombre = document.querySelector("#gasto").value;
  //convertimos nuestra cantidad a numero ya que esta en string
  const cantidad = Number(document.querySelector("#cantidad").value);

  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("ambos campos son obligatorios", "error");
    //utilizamos el return para que no se ejecute lo demas del codigo
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("!Ingresa una cantidad valida!", "error");
    return;
  }

  /**
   * Agregamos el objeto donde se guardaran los gastos
   * esta es otr manera de crear un objeto
   * agregamos el id para que lo podamos eliminar
   */
  const gasto = { nombre, cantidad, id: Date.now() };
  presupuesto.nuevoGasto(gasto);
  ui.imprimirAlerta("Gasto agregado correctamente");
  //imprimimos los gastos
  const { gastos } = presupuesto;
  ui.agregarGastoLista(gastos);
  //reiniciamos el formulario
  formulario.reset();
}
