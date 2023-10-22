import { Link } from "react-router-dom";
import { FaCoffee } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Swal from 'sweetalert2';

const Products = () => {
    const [coffees, setCoffees] = useState([]);
    // fetch data loading
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [coffees])
    // coffee delete button
    const handleDelete = _id => {
        // modal
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure that you want to delete it?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // server fetch delete
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // modal
                            Swal.fire(
                                'Good Luck !!!',
                                'Deleted coffee details',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="mt-32 bg-[url('./src/assets/images/products/products-bg.png')] bg-contain bg-no-repeat bg-top">
            <p className='text-center text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h2 className='text-[#331A15] font-rancho text-center text-6xl mt-2'>Our Popular Products</h2>
            <Link to='/add-coffees' className="flex justify-center mt-4 mb-12"><button className="btn capitalize font-rancho text-2xl rounded-md py-2 px-5 bg-[#E3B577] border-2 border-[#331A15] hover:bg-[#F5F4F1] hover:border-[#331A15] text-white"><span className="drop-shadow-md">Add Coffee</span><FaCoffee className="text-xl text-[#331A15]" /></button></Link>
            <div className="w-4/6 mx-auto grid lg:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <Product key={coffee._id} coffee={coffee} handleDelete={handleDelete}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;