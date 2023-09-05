import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const foods = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 gap-10 w-4/6 mx-auto py-20 text-center'>
            {
                foods.meals.map(food => <Food key={food.idMeal} food={food}></Food>)
            }
        </div>
    );
};

export default Foods;