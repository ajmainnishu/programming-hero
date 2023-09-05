import { useNavigate } from "react-router-dom";

const Food = ({food}) => {
    const {idMeal, strMeal, strMealThumb} = food;
    const navigate = useNavigate();
    const handleFoodNavigation = () => {
        navigate(`/mealdb/${idMeal}`)
    }
    return (
        <div className="border rounded-md">
            <img className="rounded-lg" src={strMealThumb} alt="foods" />
            <h2 className="text-2xl font-bold pb-8 pt-6">{strMeal}</h2>
            <button onClick={handleFoodNavigation} className="font-semibold py-2 px-4 bg-gray-600 text-white rounded-lg mb-5 hover:bg-slate-400">Show Details</button>
        </div>
    );
};

export default Food;