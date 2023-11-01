import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../hooks/usetitle";

const AddToy = () => {
    // dynamic title
    useTitle('| Add Toy');
    const { user } = useContext(AuthContext);
    // login button
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sName = form.sName.value;
        const sEmail = form.sEmail.value;
        const tName = form.tName.value;
        const tPhoto = form.tPhoto.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value
        const details = form.details.value;
        const data = { sName, sEmail, tName, tPhoto, price, rating, quantity, category, details };
        // post data into server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // toast notification
                    toast('Toy add successfully');
                    form.reset();
                }
            })
    }
    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-20">
            <h2 className="text-center text-5xl mb-10">Add A Toy</h2>
            <div>
                <form onSubmit={handleAddToy} className="card-body grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* seller name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input defaultValue={user?.displayName} type="text" name="sName" placeholder="seller name" className="input input-bordered" required />
                    </div>
                    {/* seller email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input defaultValue={user?.email} type="email" name="sEmail" placeholder="seller email" className="input input-bordered" required />
                    </div>
                    {/* toy name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="tName" placeholder="toy name" className="input input-bordered" required />
                    </div>
                    {/* toy photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo</span>
                        </label>
                        <input type="text" name="tPhoto" placeholder="toy photo URL" className="input input-bordered" required />
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" step={'any'} placeholder="toy price" className="input input-bordered" required />
                    </div>
                    {/* rating */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" max={'5'} step={'any'} placeholder="toy rating up to 5" className="input input-bordered" required />
                    </div>
                    {/* quantity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="available quantity" className="input input-bordered" required />
                    </div>
                    {/* category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered w-full">
                            <option selected disabled>Pick Category</option>
                            <option value={'cars'}>Cars</option>
                            <option value={'bikes'}>Bikes</option>
                            <option value={'trucks'}>Trucks</option>
                        </select>
                    </div>
                    {/* textarea */}
                    <textarea name="details" className="textarea textarea-bordered" placeholder="Details" required></textarea>
                    {/* button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddToy;