import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="picuture" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>By Now</button>
        </div>
    );
};

export default TShirt;