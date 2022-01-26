//Ingreso de informacion y guardada en variable
const valor01 = document.getElementById ( "valor1" );
const valor02 = document.getElementById ( "valor2" );

//Ojetos guardados en variable
const btnSumar = document.getElementById ( "btn-sumar"  );
const btnRestar = document.getElementById ( "btn-restar" );

//Resultado de operacion
const resultado = document.querySelector ( ".resultado" );

//Operaciones 
btnSumar.addEventListener ( "click" , () => {
    let suma = +valor01.value + +valor02.value;
    resultado.textContent = `${ suma }`
});
btnRestar.addEventListener ( "click" , () => {
    let resta = +valor01.value - +valor02.value;
    if( resta < 0 ) {
        resultado.textContent = " 0 "
        return
    }
    resultado.textContent = ` ${ resta } `
});