import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb'





const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        // console.log('product api called')
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                // console.log('Product received')
                setDisplayProducts(data)
            })
    }, [])
    useEffect(() => {
        // console.log('L S called')
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                // console.log(key, savedCart[key])
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    // console.log(addedProduct)
                    storedCart.push(addedProduct)
                }
                // console.log(key, addedProduct)
            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length)
    }
    return (





        // [
            // <div className="search-container">
            //     <input type="text" name="" id="" placeholder="search product" onChange={handleSearch}/>
            // </div>
        //     <div className="shop-container">
        //         <div className="product-container">
        //             {
        //                 products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
        //             }
        //         </div>
        //         <div className="cart-container">
        //             <Cart cart={cart}></Cart>
        //         </div>
        //     </div>
        // ]





        // <div>
        // <div className="search-container">
        //         <input type="text" name="" id="" placeholder="search product" onChange={handleSearch}/>
        //     </div>
        //     <div className="shop-container">
        //         <div className="product-container">
        //             {
        //                 products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
        //             }
        //         </div>
        //         <div className="cart-container">
        //             <Cart cart={cart}></Cart>
        //         </div>
        //     </div>
        // </div>





        // <>
        //     <div className="search-container">
        //         <input type="text" name="" id="" placeholder="search product" onChange={handleSearch}/>
        //     </div>
        //     <div className="shop-container">
        //         <div className="product-container">
        //             {
        //                 displayProducts.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>)
        //             }
        //         </div>
        //         <div className="cart-container">
        //             <Cart cart={cart}></Cart>
        //         </div>
        //     </div>
        // </>





    );
};





export default Shop;