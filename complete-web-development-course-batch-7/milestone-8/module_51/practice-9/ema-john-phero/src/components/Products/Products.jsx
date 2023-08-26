import { useState } from 'react';
import './Products.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../Utilities/fakedb';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    const btnAddtoCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (exists) {
            exists.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='products-container'>
            <div className='products-items'>
                {
                    products.map(product => <Product product={product} key={product.id} btnAddtoCart={btnAddtoCart}></Product>)
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;