const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const clearBtn = document.getElementById('clear-btn');

productForm.addEventListener('submit', addProduct);
clearBtn.addEventListener('click', clearForm);
productList.addEventListener('click', deleteProduct);

function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  if (!name || !price || !image) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const productItem = `
    <div class="product">
      <img src="${image}" alt="${name}">
      <div>
        <h3>${name}</h3>
        <p>$${price}</p>
      </div>
      <button class="delete-btn">Borrar<i class="fas fa-trash-alt delete-icon"></i></button>
    </div>
    
  `;

  productList.innerHTML += productItem;

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('image').value = '';
}

function clearForm() {
  document.getElementById('product-form').reset();
}

function deleteProduct(event) {
  if (event.target.classList.contains('delete-btn')) {
    const product = event.target.parentElement;
    productList.removeChild(product);
  }
}


