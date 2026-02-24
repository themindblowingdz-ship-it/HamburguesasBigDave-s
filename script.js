// ===============================
// VARIABLES GLOBALES
// ===============================

// Arreglo que almacena los productos agregados al carrito.
// Cada elemento será un objeto con nombre y precio.
let carrito = [];

// Variable numérica que almacena el total acumulado del pedido.
let total = 0;


// ===============================
// FUNCIÓN: mostrarSeccion()
// ===============================
// Recibe el id de la sección que se desea mostrar.
// Oculta todas las secciones y luego muestra únicamente la seleccionada.

function mostrarSeccion(seccionId){

    // Selecciona todas las secciones que tengan la clase "seccion"
    // y elimina la clase "visible" para ocultarlas.
    document.querySelectorAll(".seccion").forEach(sec=>{
        sec.classList.remove("visible");
    });

    // Agrega la clase "visible" únicamente a la sección
    // cuyo id coincide con el parámetro recibido.
    document.getElementById(seccionId).classList.add("visible");
}


// ===============================
// FUNCIÓN: agregarAlCarrito()
// ===============================
// Recibe el nombre y precio del producto seleccionado.
// Lo agrega al arreglo carrito y actualiza el total.

function agregarAlCarrito(nombre, precio){

    // Agrega un objeto con nombre y precio al arreglo carrito.
    carrito.push({nombre, precio});

    // Suma el precio del producto al total acumulado.
    total += precio;

    // Llama a la función que actualiza visualmente el carrito en el HTML.
    actualizarCarrito();
}


// ===============================
// FUNCIÓN: actualizarCarrito()
// ===============================
// Actualiza dinámicamente la lista del carrito en el DOM
// y muestra el total acumulado.

function actualizarCarrito(){

    // Obtiene el elemento <ul> donde se muestran los productos.
    const lista = document.getElementById("lista-carrito");

    // Limpia la lista para evitar duplicados al volver a renderizar.
    lista.innerHTML = "";

    // Recorre el arreglo carrito y crea un <li> por cada producto.
    carrito.forEach(item=>{

        // Crea un nuevo elemento de lista.
        const li = document.createElement("li");

        // Asigna el texto con nombre y precio del producto.
        li.textContent = `${item.nombre} - $${item.precio}`;

        // Agrega el elemento <li> al <ul>.
        lista.appendChild(li);
    });

    // Actualiza el contenido del elemento que muestra el total.
    document.getElementById("total").textContent = total;
}


// ===============================
// FUNCIÓN: finalizarPago()
// ===============================
// Verifica si el carrito tiene productos.
// Si está vacío, muestra alerta.
// Si no, muestra la sección de confirmación.

function finalizarPago(){

    // Condición que verifica si el total es 0.
    if(total === 0){

        // Muestra una alerta si el carrito está vacío.
        alert("Tu carrito está vacío.");
        return; // Detiene la ejecución de la función.
    }

    // Muestra el total pagado en la sección de confirmación.
    document.getElementById("total-pagado").textContent = total;

    // Cambia la vista a la sección de confirmación.
    mostrarSeccion("confirmacion");
}


// ===============================
// FUNCIÓN: reiniciarPedido()
// ===============================
// Limpia el carrito y reinicia el total a 0.
// Regresa al usuario a la sección de inicio.

function reiniciarPedido(){

    // Vacía el arreglo carrito.
    carrito = [];

    // Reinicia el total.
    total = 0;

    // Actualiza visualmente el carrito.
    actualizarCarrito();

    // Regresa a la sección principal.
    mostrarSeccion("inicio");
}
