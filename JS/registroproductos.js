document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    loadImages();
});

document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productCategory = document.getElementById('product-category').value;
    const productImage = document.getElementById('product-image').value;
    const productCode = document.getElementById('product-code').value;
    const productPrice = document.getElementById('product-price').value;
    const productColor = document.getElementById('product-color').value;
    const productMaterial = document.getElementById('product-material').value;
    const productSize = document.getElementById('product-size').value;

    if (productName.length > 20) {
        alert('El nombre del producto no puede SUPERAR 20 caracteres.');
        return;
    }

    if (productName && productCategory && productImage && productPrice && productColor && productMaterial && productSize) {
        if (validateProductCode(productCode)) {
            const product = {
                name: productName,
                category: productCategory,
                image: productImage,
                code: productCode,
                price: productPrice,
                color: productColor,
                material: productMaterial,
                size: productSize
            };

            saveProduct(product);

            document.getElementById('product-form').reset();
            window.location.href = 'vistaproductos.html';
        } else {
            alert('El código del producto no cumple con los requisitos.');
            openGuidePage(); 

        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

function validateProductCode(code) {
   
    if (code.length < 8) {
        return false;
    }

    const hasLowercase = /[a-z]/.test(code);
    const hasUppercase = /[A-Z]/.test(code);
    if (!hasLowercase || !hasUppercase) {
        return false;
    }

    
    const numMatches = code.match(/\d/g);
    const numCount = numMatches ? numMatches.length : 0;
    if (numCount < 2) {
        return false;
    }

    return true;
}

function openGuidePage() {
    window.open('indicaciones.html', '_blank');
} 

function saveProduct(product) {
    let products = localStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
    } else {
        products = [];
    }
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}


function displayProducts() {
}

function loadImages() {
    const imageSelect = document.getElementById('product-image');
    const images = [
        'imagen1.png', 
        'imagen2.png', 
        'imagen3.png', 
        'imagen4.png', 
        'imagen5.png',
        'imagen6.png',
        'imagen7.png',
        'imagen8.png',
        'imagen9.png',
        'imagen10.png',    
    ];

    images.forEach(image => {
        const option = document.createElement('option');
        option.value = `/imagenes/${image}`; 
        option.textContent = image;
        imageSelect.appendChild(option);
    });
}
