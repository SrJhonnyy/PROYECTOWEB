function filtrarProductos() {
    const nombreABuscar = document.getElementById("nombreProducto").value.toLowerCase();
    const categoriaSeleccionada = document.getElementById("selectCategoria").value;
    const tamañoSeleccionado = document.getElementById("selectTamaño").value;

    document.getElementById("loading-message").textContent = "Cargando...";

    const obtenerDatos = new Promise((resolve, reject) => {
       
        setTimeout(() => {
            const productosFiltrados = productosf.filter(producto => {
                const cumpleNombre = producto.nombre.toLowerCase().includes(nombreABuscar);
                const cumpleCategoria = categoriaSeleccionada === "" || producto.categoria === categoriaSeleccionada;
                const cumpleTamaño = tamañoSeleccionado === "" || producto.tamaño === tamañoSeleccionado;
                return cumpleNombre && cumpleCategoria && cumpleTamaño;
            });

            resolve(productosFiltrados);
        }, 2000); 
    });

    obtenerDatos.then(productosFiltrados => {
        document.getElementById("loading-message").textContent = "";

        
        mostrarResultados(productosFiltrados);
    });
}

function mostrarResultados(productos) {
    const resultadoTabla = document.getElementById("productTable").getElementsByTagName('tbody')[0];
    resultadoTabla.innerHTML = ""; 

    if (productos.length === 0) {
        const newRow = resultadoTabla.insertRow();
        const cell = newRow.insertCell();
        cell.colSpan = 8; 
        cell.textContent = "No se encontraron productos con esos criterios.";
    } else {
        productos.forEach(producto => {
            const newRow = resultadoTabla.insertRow();
            newRow.classList.add("producto");

            newRow.insertCell().textContent = producto.nombre;
            newRow.insertCell().textContent = producto.categoria;
            newRow.insertCell().textContent = `$${producto.precio.toFixed(2)}`;
            newRow.insertCell().textContent = producto.color;
            newRow.insertCell().textContent = producto.tamaño;
            newRow.insertCell().textContent = producto.material;
            newRow.insertCell().textContent = producto.codigo;

            const imagenCell = newRow.insertCell();
            const imagen = document.createElement("img");
            imagen.src = producto.imagenUrl;
            imagen.alt = producto.nombre; 
            imagen.classList.add("imagenProducto"); 
            imagenCell.appendChild(imagen);
        });
    }
}

function limpiarFiltro() {
    document.getElementById("nombreProducto").value = "";
    document.getElementById("selectCategoria").value = "";
    document.getElementById("selectTamaño").value = "";

    currentPage = 1;

    filtrarProductos();
}

function cargarOpcionesCategoria() {
    const selectCategoria = document.getElementById("selectCategoria");

    const categoriasUnicas = [...new Set(productosf.map(producto => producto.categoria))];

    categoriasUnicas.forEach(categoria => {
        const option = document.createElement("option");
        option.textContent = categoria;
        option.value = categoria;
        selectCategoria.appendChild(option);
    });
}

cargarOpcionesCategoria();
