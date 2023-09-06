const cartProductLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();
	return products;
    console.log(products);
}

export default cartProductLoader;