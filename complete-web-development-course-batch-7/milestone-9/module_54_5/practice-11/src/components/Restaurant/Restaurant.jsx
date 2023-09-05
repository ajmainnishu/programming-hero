import { Link } from "react-router-dom";

const Restaurant = () => {
    return (
        <div>
            <h1 className="text-center text-7xl font-bold pt-28 text-gray-700">Restaurant Meal DB</h1>
            <div className="flex md:justify-evenly md:flex-row flex-col py-40">
                <Link to='/mealdb' className="py-4 px-8 bg-sky-300 rounded-md font-semibold text-4xl shadow-lg">Show Foods</Link>
                <Link to='/mealdb' className="py-4 px-8 bg-purple-300 rounded-md font-semibold text-4xl shadow-lg"><button>Show Foods</button></Link>
            </div>
        </div>
    );
};

export default Restaurant;