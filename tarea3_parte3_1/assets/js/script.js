//#####  TAREA3 PARTE3: ENRIQUE PAILLAVIL 12-06-2023  #######//
const ele1 = document.getElementById("div1")
const ele2 = document.getElementById("div2")
const ele3 = document.getElementById("div3")
const ele4 = document.getElementById("div4")

let color='black';//se deja en una variable el color pos si es necesario cambiarlo mas adelantee....
const pintar1 = (colorElegido) => ele1.style.backgroundColor = colorElegido//usamos un color de argumento de la funcion con variable colorElegido
const pintar2 = (colorElegido) => ele2.style.backgroundColor = colorElegido
const pintar3 = (colorElegido) => ele3.style.backgroundColor = colorElegido
const pintar4 = (colorElegido) => ele4.style.backgroundColor = colorElegido

ele1.addEventListener("click", function(){
    pintar1(color);
});
ele2.addEventListener("click", function(){
    pintar2(color);
});
ele3.addEventListener("click", function(){
    pintar3(color);
});
ele4.addEventListener("click", function(){
    pintar4(color);
});




