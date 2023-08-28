import { useEffect, useState } from 'react';
import './Foods.css'
import Food from '../Food/Food';
import FoodNames from '../FoodNames/FoodNames';

const Foods = () => {
    const [foods, setFoods] = useState([])
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    }, [])
    const btnFoodName = (foodName) => {
        setNames(foodName)
    }
    return (
        <div className='product-container'>
            <div className='foods-container'>
                {
                    foods.map(food => <Food food={food} key={food.idMeal} btnFoodName={btnFoodName}></Food>)
                }
            </div>
            <div className='name-container'>
                <FoodNames names={names}></FoodNames>
            </div>
        </div>
    );
};

export default Foods;