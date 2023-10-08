import { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, [])
    return (
        <div className="w-10/12 mx-auto my-20">
            <h2 className="text-center mb-20 text-6xl font-semibold">Our Chefs</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default Chefs;