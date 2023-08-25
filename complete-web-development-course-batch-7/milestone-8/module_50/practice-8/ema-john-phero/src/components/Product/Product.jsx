import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const btnAddtoCart = props.btnAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-item'>
                <div>
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                </div>
                <div className='item-end'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Rating: {ratings} star</small></p>
                </div>
            </div>
            <button onClick={() => btnAddtoCart(props.product)}>Add to Cart 
            <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;