const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value =  '';
    return inputValue;
}
const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    displayProducts(product, quantity)
    localStorage.setItem(product, quantity);
}
const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}