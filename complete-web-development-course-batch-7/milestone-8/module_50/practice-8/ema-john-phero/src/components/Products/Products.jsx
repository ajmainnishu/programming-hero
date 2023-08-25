import { useState } from 'react';
import './Products.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const btnAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='products-container'>
            <div className='products-items'>
                {
                    products.map(product => <Product product={product} key={product.id} btnAddtoCart={btnAddtoCart}></Product>)
                }
            </div>
            <div className='order-summary'>
                <p>Order Summary: {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;