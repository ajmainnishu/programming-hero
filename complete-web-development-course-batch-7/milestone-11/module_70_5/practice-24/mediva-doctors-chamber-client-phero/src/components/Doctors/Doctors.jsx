import { ToastContainer, toast } from 'react-toastify';

const Doctors = () => {
    const handleAddDoctors = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const expert = form.expert.value;
        const place = form.place.value;
        const time = form.time.value;
        const doctors = { name, photo, price, expert, place, time };
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(doctors)
        })
            .then(() => {
                toast("Submit Successfully");
                form.reset();
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="bg-base-200">
            <form onSubmit={handleAddDoctors} className="w-11/12 lg:w-9/12 mx-auto py-20">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo URL" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Expert</span>
                        </label>
                        <input type="text" name="expert" placeholder="expert" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Place</span>
                        </label>
                        <input type="text" name="place" placeholder="place" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <input type="text" name="time" placeholder="time" className="input input-bordered w-full" required />
                    </div>
                </div>
                <button className="btn btn-neutral mt-5 w-full">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Doctors;