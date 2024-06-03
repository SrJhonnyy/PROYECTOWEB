const productosf = [
    {
        nombre: "Martillo",
        categoria: "Herramientas",
        precio: 15.99,
        color: "Rojo",
        tamaño: "Mediano",
        material: "Acero",
        codigo: "Abc123XY",
        imagenUrl: "imagenes/imagen1.png"
    },
    {
        nombre: "Destornillador",
        categoria: "Herramientas",
        precio: 8.50,
        color: "Amarillo",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "Def456Zz",
        imagenUrl: "imagenes/imagen2.png"
    },
    {
        nombre: "Llave Inglesa",
        categoria: "Herramientas",
        precio: 12.50,
        color: "Plateado",
        tamaño: "Grande",
        material: "Acero",
        codigo: "CodE4567X",
        imagenUrl: "imagenes/imagen3.png"
    },
    {
        nombre: "Sierra",
        categoria: "Herramientas",
        precio: 20.75,
        color: "Negro",
        tamaño: "Grande",
        material: "Acero",
        codigo: "pRoDuct12Y",
        imagenUrl: "imagenes/imagen4.png"
    },
    {
        nombre: "Clavos",
        categoria: "Fijaciones",
        precio: 3.25,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "FerReta89W",
        imagenUrl: "imagenes/imagen5.png"
    },
    {
        nombre: "Tornillos",
        categoria: "Fijaciones",
        precio: 2.99,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Acero",
        codigo: "12AbCdEfX",
        imagenUrl: "imagenes/imagen6.png"
    },
    {
        nombre: "Bisagras",
        categoria: "Herrajes",
        precio: 8.50,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Hierro",
        codigo: "MaYusCul0Y",
        imagenUrl: "imagenes/imagen7.png"
    },
    {
        nombre: "Cinta Métrica",
        categoria: "Medición",
        precio: 6.75,
        color: "Amarillo",
        tamaño: "Grande",
        material: "Plástico",
        codigo: "TeSt1234X",
        imagenUrl: "imagenes/imagen8.png"
    },
    {
        nombre: "Pegamento",
        categoria: "Adhesivos",
        precio: 4.50,
        color: "Transparente",
        tamaño: "Pequeño",
        material: "Adhesivo",
        codigo: "987CdeFgY",
        imagenUrl: "imagenes/imagen9.png"
    },
    {
        nombre: "Pintura",
        categoria: "Pinturas",
        precio: 12.99,
        color: "Blanco",
        tamaño: "Grande",
        material: "Látex",
        codigo: "HoLa4567Z",
        imagenUrl: "imagenes/imagen10.png"
    },
    {
        nombre: "Brochas",
        categoria: "Pintura",
        precio: 3.99,
        color: "Negro",
        tamaño: "Pequeño",
        material: "Cerdas sintéticas",
        codigo: "1MiNuS123X",
        imagenUrl: "imagenes/imagen11.png"
    },
    {
        nombre: "Rodillos",
        categoria: "Pintura",
        precio: 7.25,
        color: "Azul",
        tamaño: "Mediano",
        material: "Plástico",
        codigo: "2AbCdEfGX",
        imagenUrl: "imagenes/imagen12.png"
    },
    {
        nombre: "Taladro",
        categoria: "Herramientas Eléctricas",
        precio: 49.99,
        color: "Negro",
        tamaño: "Grande",
        material: "Acero",
        codigo: "CoDigo45W",
        imagenUrl: "imagenes/imagen13.png"
    },
    {
        nombre: "Brocas",
        categoria: "Accesorios para Taladro",
        precio: 9.50,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "67EjEmPl0X",
        imagenUrl: "imagenes/imagen14.png"
    },
    {
        nombre: "Lijadora",
        categoria: "Herramientas Eléctricas",
        precio: 34.75,
        color: "Rojo",
        tamaño: "Mediano",
        material: "Plástico",
        codigo: "89PrOdUcY",
        imagenUrl: "imagenes/imagen15.png"
    },
    {
        nombre: "Cinta Adhesiva",
        categoria: "Adhesivos",
        precio: 1.99,
        color: "Transparente",
        tamaño: "Pequeño",
        material: "Plástico",
        codigo: "Ab123cDeZ",
        imagenUrl: "imagenes/imagen16.png"
    },
    {
        nombre: "Cruceta",
        categoria: "Herramientas",
        precio: 10.25,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Acero",
        codigo: "Prueba56X",
        imagenUrl: "imagenes/imagen17.png"
    },
    {
        nombre: "Cerraduras",
        categoria: "Cerrajería",
        precio: 15.50,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Hierro",
        codigo: "78CodEfgY",
        imagenUrl: "imagenes/imagen18.png"
    },
    {
        nombre: "Grapas",
        categoria: "Fijaciones",
        precio: 2.25,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "Ferre12tIaX",
        imagenUrl: "imagenes/imagen19.png"
    },
    {
        nombre: "Sargentos",
        categoria: "Sujeción",
        precio: 6.99,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Acero",
        codigo: "3TesTingY",
        imagenUrl: "imagenes/imagen20.png"
    },
    {
        nombre: "Escalera",
        categoria: "Accesorios",
        precio: 29.99,
        color: "Plateado",
        tamaño: "Grande",
        material: "Aluminio",
        codigo: "4MiNuSabcX",
        imagenUrl: "imagenes/imagen21.png"
    },
    {
        nombre: "Linterna",
        categoria: "Iluminación",
        precio: 8.75,
        color: "Negro",
        tamaño: "Pequeño",
        material: "Plástico",
        codigo: "6AbCdEFGY",
        imagenUrl: "imagenes/imagen22.png"
    },
    {
        nombre: "Guantes de Seguridad",
        categoria: "Protección",
        precio: 5.50,
        color: "Gris",
        tamaño: "Mediano",
        material: "Cuero",
        codigo: "pRoDuct99X",
        imagenUrl: "imagenes/imagen23.png"
    },
    {
        nombre: "Gafas de Seguridad",
        categoria: "Protección",
        precio: 7.25,
        color: "Transparente",
        tamaño: "Mediano",
        material: "Plástico",
        codigo: "TeSt0011Y",
        imagenUrl: "imagenes/imagen24.png"
    },
    {
        nombre: "Cajas de Herramientas",
        categoria: "Almacenamiento",
        precio: 25.99,
        color: "Rojo",
        tamaño: "Grande",
        material: "Plástico",
        codigo: "22HoLa33X",
        imagenUrl: "imagenes/imagen25.png"
    },
    {
        nombre: "Aceite Rodamiento",
        categoria: "Aceites",
        precio: 4.75,
        color: "Transparente",
        tamaño: "Pequeño",
        material: "Aceite mineral",
        codigo: "CdeFg444Y",
        imagenUrl: "imagenes/imagen26.png"
    },
    {
        nombre: "Cepillos Metálicos",
        categoria: "Limpieza",
        precio: 3.99,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "55PruebaX",
        imagenUrl: "imagenes/imagen27.png"
    },
    {
        nombre: "Escuadras",
        categoria: "Medición",
        precio: 2.50,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "66TeStiNgY",
        imagenUrl: "imagenes/imagen28.png"
    },
    {
        nombre: "Niveladora burbujas",
        categoria: "Medición",
        precio: 4.25,
        color: "Amarillo",
        tamaño: "Pequeño",
        material: "Plástico",
        codigo: "7MiNuSabcX",
        imagenUrl: "imagenes/imagen29.png"
    },
    {
        nombre: "Arandelas",
        categoria: "Fijaciones",
        precio: 1.50,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "89CoD456Y",
        imagenUrl: "imagenes/imagen30.png"
    },
    {
        nombre: "Cortafríos",
        categoria: "Herramientas",
        precio: 6.25,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Acero",
        codigo: "FeRrEtA01X",
        imagenUrl: "imagenes/imagen31.png"
    },
    {
        nombre: "Lima",
        categoria: "Herramientas",
        precio: 3.75,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Acero",
        codigo: "123TesTinGY",
        imagenUrl: "imagenes/imagen32.png"
    },
    {
        nombre: "Destornillador Eléctrico",
        categoria: "Herramientas Eléctricas",
        precio: 39.99,
        color: "Azul",
        tamaño: "Mediano",
        material: "Plástico",
        codigo: "45MiNuSABCX",
        imagenUrl: "imagenes/imagen33.png"
    },
    {
        nombre: "Bombillas",
        categoria: "Iluminación",
        precio: 2.50,
        color: "Blanco",
        tamaño: "Pequeño",
        material: "Vidrio",
        codigo: "CodE6789Y",
        imagenUrl: "imagenes/imagen34.png"
    },
    {
        nombre: "Diferencial Cadena",
        categoria: "Sujeción",
        precio: 8.99,
        color: "Plateado",
        tamaño: "Grande",
        material: "Hierro",
        codigo: "56FeRrEtAY",
        imagenUrl: "imagenes/imagen35.png"
    },
    {
        nombre: "Carretillas",
        categoria: "Transporte",
        precio: 42.50,
        color: "Verde",
        tamaño: "Grande",
        material: "Acero",
        codigo: "78TeStingX",
        imagenUrl: "imagenes/imagen36.png"
    },
    {
        nombre: "Chapas Metálicas",
        categoria: "Herrajes",
        precio: 5.75,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Hierro",
        codigo: "90MiNuSabcY",
        imagenUrl: "imagenes/imagen37.png"
    },
    {
        nombre: "Escalera Tijera",
        categoria: "Accesorios",
        precio: 34.99,
        color: "Plateado",
        tamaño: "Grande",
        material: "Aluminio",
        codigo: "CoD98765X",
        imagenUrl: "imagenes/imagen38.png"
    },
    {
        nombre: "Grifos",
        categoria: "Fontanería",
        precio: 18.75,
        color: "Plateado",
        tamaño: "Mediano",
        material: "Metal",
        codigo: "FerReta12Y",
        imagenUrl: "imagenes/imagen39.png"
    },
    {
        nombre: "Martillo Neumático",
        categoria: "Herramientas",
        precio: 129.99,
        color: "Gris",
        tamaño: "Grande",
        material: "Acero",
        codigo: "34TeStingX",
        imagenUrl: "imagenes/imagen40.png"
    },
    {
        nombre: "Pistola de Silicona",
        categoria: "Herramientas",
        precio: 12.25,
        color: "Rojo",
        tamaño: "Pequeño",
        material: "Plástico",
        codigo: "56PrOdUcTY",
        imagenUrl: "imagenes/imagen41.png"
    },
    {
        nombre: "Poleas",
        categoria: "Mecanismos",
        precio: 5.99,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Hierro",
        codigo: "78MiNuSabcX",
        imagenUrl: "imagenes/imagen42.png"
    },
    {
        nombre: "Regletas Eléctricas",
        categoria: "Electricidad",
        precio: 9.50,
        color: "Blanco",
        tamaño: "Mediano",
        material: "Plástico",
        codigo: "90CodE123Y",
        imagenUrl: "imagenes/imagen43.png"
    },
    {
        nombre: "Serruchos",
        categoria: "Herramientas",
        precio: 8.75,
        color: "Marrón",
        tamaño: "Mediano",
        material: "Madera",
        codigo: "CodE6789X",
        imagenUrl: "imagenes/imagen44.png"
    },
    {
        nombre: "Soplete",
        categoria: "Herramientas",
        precio: 22.99,
        color: "Azul",
        tamaño: "Mediano",
        material: "Metal",
        codigo: "56FeRrEtAZ",
        imagenUrl: "imagenes/imagen45.png"
    },
    {
        nombre: "Talocha",
        categoria: "Construcción",
        precio: 3.25,
        color: "Amarillo",
        tamaño: "Pequeño",
        material: "Plástico",
        codigo: "78TeStingX",
        imagenUrl: "imagenes/imagen46.png"
    },
    {
        nombre: "Tijeras aviacion",
        categoria: "Corte",
        precio: 6.50,
        color: "Negro",
        tamaño: "Mediano",
        material: "Acero inoxidable",
        codigo: "90MiNuSabcY",
        imagenUrl: "imagenes/imagen47.png"
    },
    {
        nombre: "Toalleros",
        categoria: "Accesorios de Baño",
        precio: 12.99,
        color: "Plateado",
        tamaño: "Pequeño",
        material: "Metal",
        codigo: "CoD98765X",
        imagenUrl: "imagenes/imagen48.png"
    },
    {
        nombre: "Codo Sanitario",
        categoria: "Fontanería",
        precio: 7.75,
        color: "amarillo",
        tamaño: "Mediano",
        material: "PVC",
        codigo: "FeRrEta01Y",
        imagenUrl: "imagenes/imagen49.png"
    },
    {
        nombre: "tubo pvc",
        categoria: "Fontanería",
        precio: 7.75,
        color: "verde",
        tamaño: "Mediano",
        material: "PVC",
        codigo: "34TeStingX",
        imagenUrl: "imagenes/imagen50.png"
    }
];

const itemsPerPage = 15;
let currentPage = 1;
const totalPages = Math.ceil(productosf.length / itemsPerPage);

const renderPage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = productosf.slice(start, end);
    const draggable = document.getElementById('draggable'); 
    draggable.innerHTML = "";
    for (let product of items) {
        draggable.innerHTML += `
            <div class="card">
                <div class="card__img">
                    <img src="${product.imagenUrl}" alt="${product.nombre}" />
                </div>
                <div class="card__description">
                    <p class="text__description">${product.nombre}</p>
                    <span class="price">Precio: ${product.precio}</span>
                    <p class="category">Categoría: ${product.categoria}</p>
                    <p class="code">Código: ${product.codigo}</p>
                    <p class="color">Color: ${product.color}</p>
                    <p class="material">Material: ${product.material}</p>
                    <p class="size">Tamaño: ${product.tamaño}</p>
                </div>
            </div>
        `;
    }
    renderPagination();
};

const renderPagination = () => {
    const pagination = document.getElementById('pagination'); 
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `<button onclick="goToPage(${i})">${i}</button>`;
    }
};

const goToPage = (page) => {
    currentPage = page;
    renderPage(page);
};

renderPage(currentPage);
