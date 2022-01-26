//Objeto guardado en variable
const caja = document.getElementById ( "caja" )
const btn01 = document.getElementById ( "btn-1" )
const btn02 = document.getElementById ( "btn-2" )
const btn03 = document.getElementById ( "btn-3" )
const btn04 = document.getElementById ( "btn-4" )
const btn05 = document.getElementById ( "btn-5" )
const btn06 = document.getElementById ( "btn-6" )

//Damos una accion al parametro
btn01.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#e53e3e"
})
btn02.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#dd6b20"
})
btn03.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#faf089"
})
btn04.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#48bb78"
})
btn05.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#81e6d9"
})
btn06.addEventListener ( "click" , () => {
    caja.style.backgroundColor = "#d53f8c"
})