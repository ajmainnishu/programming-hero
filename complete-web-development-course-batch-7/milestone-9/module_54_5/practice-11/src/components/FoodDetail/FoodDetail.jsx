import { Link, useLoaderData, useNavigate } from "react-router-dom";

const FoodDetail = () => {
    const food = useLoaderData();
    const {strArea, strCategory, strInstructions, strMeal, strMealThumb, strYoutube} = food.meals[0];
    const navigate = useNavigate();
    const handleGoBackNavigation = () => {
        navigate(-1);
    }
    return (
        <div className="md:w-3/6 w-80 mx-auto text-center py-20">
            <img className="rounded-lg md:w-3/5 mx-auto" src={strMealThumb} alt="foods" />
            <h2 className="text-2xl font-bold pt-6">{strMeal}</h2>
            <p className="py-2 text-2xl"><span className="font-semibold">Area:</span> {strArea}</p>
            <p className="pb-2 text-2xl"><span className="font-semibold">Category:</span> {strCategory}</p>
            <p><span className="font-semibold">Instruction:</span> {strInstructions}</p>
            <div className="flex justify-evenly">
                <Link to={strYoutube} target="_black" className="bg-gray-400 font-semibold text-lg py-3 px-5 rounded-xl mt-5 inline-block">Go Youtube</Link>
                <button onClick={handleGoBackNavigation} className="bg-gray-400 font-semibold text-lg text-white py-3 px-5 rounded-xl mt-5 inline-block">Go Back</button>
            </div>
        </div>
    );
};

export default FoodDetail;