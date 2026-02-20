let carrito = [];
let total = 0;

function mostrarSeccion(seccionId){
    document.querySelectorAll(".seccion").forEach(sec=>{
        sec.classList.remove("visible");
    });
    document.getElementById(seccionId).classList.add("visible");
}

function agregarAlCarrito(nombre, precio){
    carrito.push({nombre, precio});
    total += precio;
    actualizarCarrito();
}

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

function finalizarPago(){
    if(total === 0){
        alert("Tu carrito está vacío.");
        return;
    }

    document.getElementById("total-pagado").textContent = total;

    mostrarSeccion("confirmacion");
}

function reiniciarPedido(){
    carrito = [];
    total = 0;
    actualizarCarrito();
    mostrarSeccion("inicio");
}