const addLocalStorage = (code) => {
    const foodCart = getFoodCartFromLS();
    const quantity = foodCart[code];
    if (quantity) {
        const newQuantity = quantity + 1;
        foodCart[code] = newQuantity;
    } else {
        foodCart[code] = 1;
    }
    localStorage.setItem('food-cart', JSON.stringify(foodCart));
}

const getFoodCartFromLS = () => {
    let foodCart = {};
    const storeCart = localStorage.getItem('food-cart');
    if (storeCart) {
        foodCart = JSON.parse(storeCart);
    }
    return foodCart;
}

export {
    getFoodCartFromLS,
    addLocalStorage
}