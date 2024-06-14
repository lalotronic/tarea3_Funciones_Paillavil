//#########################################################################
//#####  TAREA3 ejercicio teclado : ENRIQUE PAILLAVIL 12-06-2023   ########
//#### se incorporan ambos requerimeintos con las teclas a-s-d y q-w-e ####
//#########################################################################
let color='yelow';

const contenedor = document.getElementById("contenedor");
// Agregamos un evento para escuchar las teclas presionadas
document.addEventListener("keydown", function(event) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === "a" || event.key === "A") {
    // Si es "A" o "a", llamamos a la función agregarElemento
    color='pink'
    cambiarColor(color);
    } else if (event.key === "s" || event.key === "S") {
    // Si es "D" o "d", llamamos a la función eliminarElemento
    color='orange'
    cambiarColor(color);
    }
     else if (event.key === "d" || event.key === "D") {
    // Si es "D" o "d", llamamos a la función eliminarElemento
    color='skyblue'
    cambiarColor(color);}
    //###############################################################
    //incorporamos la otra parte del ejercicio que solicita la     #
    //la creacion de un div a partir de presionar otras teclas      #
    //###############################################################
    else if (event.key === "q" || event.key === "Q") {
        // Si es "D" o "d", llamamos a la función eliminarElemento
        color='purple'
        agregarElemento(color);
        
    }
    else if (event.key === "w" || event.key === "W") {
        // Si es "D" o "d", llamamos a la función eliminarElemento
        color='gray'
        agregarElemento(color);
        
    }
    else if (event.key === "e" || event.key === "E") {
        // Si es "D" o "d", llamamos a la función eliminarElemento
        color='brown'
        agregarElemento(color);
        

    }});


//funcion que cambia de color el div contenedor
    function cambiarColor(colorElegido) {
        // Obtenemos el elemento contenedor por su ID
        contenedor.style.backgroundColor = colorElegido;
        }

// como hacemos una funcion que pueda crear elementos div dentro del body 
        function agregarElemento(color) {
            const nuevoDiv = document.createElement('div');
            nuevoDiv.style.width = '200px';
            nuevoDiv.style.height = '200px';
            nuevoDiv.style.backgroundColor = color;
            nuevoDiv.style.border = '2px solid black';
            nuevoDiv.style.marginTop = '3px'
            document.body.appendChild(nuevoDiv);
          

    }