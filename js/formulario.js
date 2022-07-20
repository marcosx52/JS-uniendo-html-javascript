// crear Array para consultas
let consultas = [];

let formulario;

let inputNombre;
let inputEmail;
let inputMensaje;

//Constructor para consultas - para utilizar adelante y guardar en el Array cada consulta
/*
class consulta {
    constructor(nombre, email, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;        
    }
}
*/

//Funcion para obtener informacion del HTML

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("nombre");
    inputEmail = document.getElementById("email");
    inputMensaje = document.getElementById("mensaje");
}
inicializarElementos()


//EVENTO PARA OBTENER LOS VALORES DEL FORMULARIO EN LA CONSOLA

formulario.onsubmit = (event) => {
    event.preventDefault();

    console.log(inputNombre.value, inputEmail.value, inputMensaje.value)
        
    
    //RESOLVER!!
    //PROBLEMA PARA GENERAR EL RESET DEL FORMULARIO//

    
}


// PASAR LUEGO ESTA INFORMACION A LA LOCALSTORAGE! 
