//#####  TAREA3 PARTE3: ENRIQUE PAILLAVIL 13-06-2023  #######//


let color='yellow';
const ele = document.getElementById("ele1")
function pintar(colorElegido ='green'){//aqui queda con color verde por defecto
    ele.style.backgroundColor = colorElegido;
}

ele.addEventListener("click", function(){


    pintar(color);//aqui si la llamo sin argumento pinta verde, pero como la llamo con color la pinta de color amarillo
});






