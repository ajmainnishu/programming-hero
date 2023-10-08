import { useLoaderData } from "react-router-dom";
import ChefRecipe from "../ChefRecipe/ChefRecipe";

const ChefRecipes = () => {
    const chefRecipes = useLoaderData();
    const { chef_picture, chef_name, work_experience, made_recipes, likes, bio, cook } = chefRecipes;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img className="max-w-sm rounded-lg shadow-xl mx-auto mt-10" src={chef_picture} alt="" />
                        <h1 className="text-5xl font-bold pt-3">{chef_name}</h1>
                        <p className="pt-6 font-medium">Years of Experience: {work_experience}</p>
                        <p className="pt-3 font-medium">Numbers of Recipes: {made_recipes}</p>
                        <p className="pt-3 font-medium">Likes: {likes}</p>
                        <p className="py-3 mb-10">Description: {bio}</p>
                    </div>
                </div>
            </div>


            <div className="w-10/12 mx-auto">
                <h2 className="mt-20 pb-6 text-center font-semibold text-5xl">Chef Recipes</h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-10">
                    {
                        cook.map((food, index) => <ChefRecipe key={index} food={food}></ChefRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;