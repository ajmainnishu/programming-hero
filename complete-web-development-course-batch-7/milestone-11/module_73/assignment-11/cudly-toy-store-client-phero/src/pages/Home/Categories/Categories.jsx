import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Categories = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    // toys state
    const [toys, setToys] = useState([]);
    // toys fetch from server
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [toys])
    // filter tabs
    const cars = toys.filter(toy => toy.category == 'cars')
    const bikes = toys.filter(toy => toy.category == 'bikes')
    const trucks = toys.filter(toy => toy.category == 'trucks')
    // single toy details
    const handleSingleToy = id => {
        if(user) {
            // redirect singleToy page
            navigate(`/toy/${id}`)
        } else {
            // toast notification
            toast('You have to log in first to view details');
            // redirect singleToy page
            setTimeout(() => {
                navigate(`/toy/${id}`)
            }, 1500);
        }
    }

    return (
        <div>
            <h2 className='text-center text-5xl pb-20'>Shop Category</h2>
            <Tabs>
                {/* tabs */}
                <TabList>
                    <div className='text-center'>
                        <Tab>Cars</Tab>
                        <Tab>Bikes</Tab>
                        <Tab>Trucks</Tab>
                    </div>
                </TabList>
                {/* sub category */}
                <TabPanel>
                    {/* cars */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            cars.map(car => <div key={car._id} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={car.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{car.toy_name}</h2>
                                    <p>Price: ${car.price}</p>
                                    <p>Rating: {car.rating}</p>
                                    {/* button */}
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleSingleToy(car._id)} className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* bikes */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            bikes.map(bike => <div key={bike._id} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={bike.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{bike.toy_name}</h2>
                                    <p>Price: ${bike.price}</p>
                                    <p>Rating: {bike.rating}</p>
                                    {/* button */}
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleSingleToy(bike._id)} className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* trucks */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 pt-10'>
                        {
                            trucks.map(truck => <div key={truck._id} className='mx-auto card lg:w-96 bg-base-100 shadow-xl'>
                                <figure><img src={truck.toy_img} alt="cars image" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{truck.toy_name}</h2>
                                    <p>Price: ${truck.price}</p>
                                    <p>Rating: {truck.rating}</p>
                                    {/* button */}
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleSingleToy(truck._id)} className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            <ToastContainer />
        </div>
    );
};

export default Categories;