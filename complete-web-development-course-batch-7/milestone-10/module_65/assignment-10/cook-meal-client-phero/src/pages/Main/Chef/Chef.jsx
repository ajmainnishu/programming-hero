import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Chef = ({ chef }) => {
    const { chef_name, chef_picture, likes, made_recipes, work_experience, id } = chef;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <LazyLoadImage effect="blur" className="lg:w-40 lg:h-60" src={chef_picture} alt="chef picture" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <hr />
                    <p>Years of Experience: {work_experience}</p>
                    <p>Numbers of Recipes: {made_recipes}</p>
                    <hr />
                    <div className="flex items-center ">
                        <p>Likes: {likes}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/chef-recipes/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;