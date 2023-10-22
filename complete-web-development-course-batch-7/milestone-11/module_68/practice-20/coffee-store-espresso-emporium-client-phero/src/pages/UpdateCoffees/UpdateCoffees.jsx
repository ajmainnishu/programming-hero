import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateCoffees = () => {
    // title dynamic
    useTitle('View Coffees');
    // fetch data loading
    const coffee = useLoaderData();
    const { _id, name, chef, price, photo, supplier, taste, category, details } = coffee;
    // update button
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const user = { name, chef, supplier, taste, category, details, photo, price };
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // modal
                    Swal.fire(
                        'Update Coffee',
                        'Your coffees data update successfully',
                        'success'
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className='addcoffee-b bg-[url("./src/assets/images/addCoffee/addcoffee-bg.png")] bg-contain bg-no-repeat'>
            <div className="w-4/6 mx-auto pb-32 pt-12">
                <Link to='/' className="text-[#374151] font-rancho text-3xl mb-12 drop-shadow-lg flex items-center gap-x-4 hover:bg-[#D2B48C] hover:inline-flex"><FaArrowLeft className='text-xl' />Back To home</Link>
                <div className="py-16 lg:px-28 sm:px-10 px-6 bg-[#F4F3F0] rounded-md">
                    <h2 className="text-[#374151] font-rancho text-5xl drop-shadow-lg text-center">Update Existing Coffee Details</h2>
                    <p className="text-lg text-center text-[#1B1A1A] opacity-70 sm:px-20 py-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleUpdate}>
                        <div className="flex lg:flex-row flex-col gap-6 items-center mb-6">
                            {/* name */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" defaultValue={name} />
                            </div>
                            {/* chef */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Chef</span>
                                </label>
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" defaultValue={chef} />
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 items-center mb-6">
                            {/* supplier */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" defaultValue={supplier} />
                            </div>
                            {/* taste */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" defaultValue={taste} />
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 items-center mb-6">
                            {/* category */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" defaultValue={category} />
                            </div>
                            {/* details */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" defaultValue={details} />
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-6 items-center mb-6">
                            {/* photo url */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" defaultValue={photo} />
                            </div>
                            {/* price */}
                            <div className="form-control w-full">
                                <label className="pb-4">
                                    <span className="text-xl font-semibold opacity-80">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full" defaultValue={price} />
                            </div>
                        </div>
                        {/* button */}
                        <div className="text-center">
                            <button className="font-rancho text-[#331A15] text-2xl w-full py-3.5 border-2 border-[#331A15] rounded-md bg-[#D2B48C]">Update Coffee Details</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffees;