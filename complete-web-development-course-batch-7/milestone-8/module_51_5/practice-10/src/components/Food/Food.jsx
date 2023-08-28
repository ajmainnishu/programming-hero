import './Food.css'

const Food = (props) => {
    const {strMeal, strMealThumb, strArea, strCategory} = props.food
    const btnFoodName = props.btnFoodName;
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>Area: {strArea}</p>
            <p>Category: {strCategory}</p>
            <button onClick={() => btnFoodName(strMeal)}>Show</button>
        </div>
    );
};

export default Food;