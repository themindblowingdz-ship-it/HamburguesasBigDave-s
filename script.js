// ===============================
// VARIABLES GLOBALES CON PERSISTENCIA
// ===============================

// Recupera el carrito guardado en localStorage.
// Si no existe nada guardado, inicia como arreglo vacío.
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Recupera el total guardado.
// Si no existe, inicia en 0.
let total = JSON.parse(localStorage.getItem("total")) || 0;


// ===============================
// FUNCIÓN: mostrarSeccion()
// ===============================
// Muestra una sección específica y oculta las demás.

function mostrarSeccion(seccionId){

    document.querySelectorAll(".seccion").forEach(sec=>{
        sec.classList.remove("visible");
    });

    document.getElementById(seccionId).classList.add("visible");
}


// ===============================
// FUNCIÓN: guardarEnNube()
// ===============================
// Guarda los datos actuales en localStorage.
// Esto simula almacenamiento en la nube.

function guardarEnNube(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", JSON.stringify(total));
}


// ===============================
// FUNCIÓN: agregarAlCarrito()
// ===============================
// Agrega un producto al carrito y actualiza total.

function agregarAlCarrito(nombre, precio){

    carrito.push({nombre, precio});
    total += precio;

    guardarEnNube();        // Guarda cambios
    actualizarCarrito();    // Refresca vista
}


// ===============================
// FUNCIÓN: actualizarCarrito()
// ===============================
// Renderiza dinámicamente el carrito en pantalla.

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";

    carrito.forEach(item=>{
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}


// ===============================
// FUNCIÓN: finalizarPago()
// ===============================
// Verifica si hay productos antes de mostrar confirmación.

function finalizarPago(){

    if(total === 0){
        alert("Tu carrito está vacío.");
        return;
    }

    document.getElementById("total-pagado").textContent = total;

    console.log("Simulación de envío a la nube...");

    mostrarSeccion("confirmacion");
}


// ===============================
// FUNCIÓN: reiniciarPedido()
// ===============================
// Limpia carrito, borra localStorage y regresa al inicio.

function reiniciarPedido(){

    carrito = [];
    total = 0;

    localStorage.removeItem("carrito");
    localStorage.removeItem("total");

    actualizarCarrito();
    mostrarSeccion("inicio");
}


// ===============================
// RESTAURAR DATOS AL CARGAR
// ===============================
// Cuando la página se abre o recarga,
// restaura automáticamente el carrito guardado.

document.addEventListener("DOMContentLoaded", ()=>{
    actualizarCarrito();
});
