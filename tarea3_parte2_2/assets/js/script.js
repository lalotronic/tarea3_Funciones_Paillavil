//#####  TAREA2 PARTE2: ENRIQUE PAILLAVIL  #######//

    let color='yellow';
    const ele = document.getElementById("ele1")
    //aqui la funcion pintar ya no selecciona el directamente el elemento ele dentro de la funcion
    //este oscuro truco no esta en la guia ni en las diapos 
    function pintar(e){
        e.target.style.backgroundColor = color;
    }
    
    ele.addEventListener("click", pintar);


  