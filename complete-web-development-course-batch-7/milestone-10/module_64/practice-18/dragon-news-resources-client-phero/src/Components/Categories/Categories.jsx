import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    // home page all categories data fetch
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h5 className="mb-3">All Category</h5>
            <div className="mb-4">
                {
                    categories.map(category => <Link to={`/category/${category.id}`} key={category.id}><button className="w-100 btn btn-outline-secondary py-3 text-start ps-5 fs-5 border-0">{category.name}</button></Link>)
                }
            </div>
        </div>
    );
};

export default Categories;