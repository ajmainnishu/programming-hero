import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const ViewCoffee = () => {
    // title dynamice name
    useTitle('View Coffees');
    // fetch data load
    const coffee = useLoaderData();
    const { name, chef, photo, supplier, taste, category, details } = coffee;
    return (
        <div className='addcoffee-b bg-[url("./src/assets/images/addCoffee/addcoffee-bg.png")] bg-contain bg-no-repeat'>
            <div className="w-4/6 mx-auto pb-32 pt-12">
                {/* home page button */}
                <Link to='/' className="text-[#374151] font-rancho text-3xl mb-12 drop-shadow-lg flex items-center gap-x-4 hover:bg-[#D2B48C] hover:inline-flex"><FaArrowLeft className='text-xl' />Back To home</Link>
                <div className="grid lg:grid-cols-2 py-16 lg:px-44 px-10 bg-[#F4F3F0] rounded-md items-center">
                    <div>
                        <img className='w-full' src={photo ? photo : 'Not Available'} alt="coffee image" />
                    </div>
                    <div>
                        <h2 className='text-[#331A15] font-rancho text-4xl drop-shadow-lg mb-8'>Niceties</h2>
                        <div className='flex flex-col gap-y-4'>
                            <p className="text-[#1B1A1A] font-semibold text-xl">Name: <span className="text-[#5C5B5B] font-normal">{name ? name : 'Not Available'}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-xl">Chef: <span className="text-[#5C5B5B] font-normal">{chef ? chef : 'Not Available'}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-xl">Supplier: <span className="text-[#5C5B5B] font-normal">{supplier ? supplier : 'Not Available'}</span></p><p className="text-[#1B1A1A] font-semibold text-xl">Taste: <span className="text-[#5C5B5B] font-normal">{taste ? taste : 'Not Available'}</span></p><p className="text-[#1B1A1A] font-semibold text-xl">Category: <span className="text-[#5C5B5B] font-normal">{category ? category : 'Not Available'}</span></p>
                            <p className="text-[#1B1A1A] font-semibold text-xl">Details: <span className="text-[#5C5B5B] font-normal">{details ? details : 'Not Available'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;