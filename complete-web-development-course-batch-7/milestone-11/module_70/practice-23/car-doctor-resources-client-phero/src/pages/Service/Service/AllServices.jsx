import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const AllServices = ({setServices}) => {
    const [items, setItems] = useState([]);
    // all data fetch
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="bg-[#F3F3F3] p-10 rounded-lg space-y-5 mt-10 md:mt-0">
            <h2 className="text-[#151515] font-bold text-2xl">Services</h2>
            <div className="space-y-5">
                {
                    items?.map(item => <Link onClick={() => setServices(item)}  key={item?._id} className="flex capitalize items-center justify-between p-4 bg-white rounded hover:bg-[#FF3811] hover:text-white">
                        <p className="text-[#151515] font-semibold hover:text-white">{item?.title}</p>
                        <FaArrowRight className="text-[#FF3811] hover:text-white" />
                    </Link>)
                }
            </div>
        </div>
    );
};

export default AllServices;