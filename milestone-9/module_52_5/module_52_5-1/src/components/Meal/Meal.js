import React from 'react';





const Meal = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.meal
    return (
        <div>
            <img style={{width: '200px'}} src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button>Show Details</button>
        </div>
    );
};





export default Meal;