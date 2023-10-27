import { useState } from "react";
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    // fetch data from server
    const loadingItems = useLoaderData();
    // located data to state hook
    const [items, setItems] = useState(loadingItems.slice(0, 6));
    // button disable
    const handleProducts = () => {
        setItems(loadingItems);
        document.getElementById('buttonDisabled').disabled = "disabled"
    }
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-12">
            <div className='space-y-5 text-center'>
                <h5 className='text-[#FF3811] text-xl font-bold'>Service</h5>
                <h2 className='text-[#151515] font-bold text-5xl'>Our Service Area</h2>
                <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don&apos;t look even slightly believable. </p>
            </div>
            {/* items box container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    items?.map(item => <div key={item?._id} className="px-5 py-6 border shadow rounded-lg">
                        <div className='bg-[#F3F3F3] rounded-lg '>
                            <img src={item?.img} alt="Items Photo" className='h-60 w-full mx-auto rounded-lg ' />
                        </div>
                        <div className='pt-5 pb-1.5 space-y-2.5'>
                            <h3 className='text-[#444444] text-2xl font-bold'>{item?.title}</h3>
                            <div className="flex items-center justify-between">
                                <p className='text-[#FF3811] text-xl font-semibold'>Price: ${item?.price}</p>
                                <Link to={`/services/${item?._id}`}><FaArrowRight className="text-[#FF3811]" /></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* button */}
            <div className='text-center' >
                <button onClick={handleProducts} id="buttonDisabled" className="btn btn-outline capitalize rounded-md text-[#FF3811] text-lg font-semibold px-5">More Products</button>
            </div>
        </div>
    );
};

export default Services;