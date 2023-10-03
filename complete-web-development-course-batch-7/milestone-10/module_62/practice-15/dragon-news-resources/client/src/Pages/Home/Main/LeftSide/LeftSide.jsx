import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    // category state hook
    const [categories, setCategories] = useState([]);
    // local express server fetch
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(data => console.log(data))
    }, [])
    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div className='ps-4 pt-3'>
                {
                    categories.map(category => <p key={category.id}><Link to={`/categories/${category.id}`} className='text-decoration-none text-muted'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;