//Formulario llamado y gurdado en variable
const formulario = document.getElementById ( "formulario" );
const nombre = document.getElementById ( "nombre" );
const asunto = document.getElementById ( "asunto" );
const mensaje = document.getElementById ( "mensaje" );

const errorNombre = document.querySelector ( ".nombre__error" );
const errorAsunto = document.querySelector ( ".asunto__error" );
const errorMensaje = document.querySelector ( ".mensaje__error" );
const resultado = document.querySelector ( ".resultado" );

//Damos un evento al formulario
formulario.addEventListener ( "submit" , (e) => {
  e.preventDefault ();

  //Respuestas por omision
  if ( !nombre.value.trim () ) {
    errorNombre.innerHTML = "El nombre es requerido 😡";
    return;
  }

  if ( !asunto.value.trim () ) {
    errorAsunto.innerHTML = " El asunto es requerido 😡";
    return;
  }
  
  if ( !mensaje.value.trim () ) {
    errorMensaje.innerHTML = "El mensaje es requerido 😡";
    return;
  }

  //Parametros
  const regExpLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;

  //Respuesta segun parametro
  if ( !regExpLetras.test ( nombre.value ) ) {
    errorNombre.innerHTML = "Solo se permiten letras 😡";
    return;
  }

  if ( !regExpLetras.test ( asunto.value ) ) {
    errorAsunto.innerHTML = "Solo se permiten letras 😡";
    return;
  }

  if ( !regExpLetras.test ( mensaje.value ) ) {
    errorMensaje.innerHTML = "Solo se permiten letras 😡";
    return;
  }

//Respuesta esperada
  resultado.innerHTML = "El mensaje fue enviado con exito!!! 😎"
});
