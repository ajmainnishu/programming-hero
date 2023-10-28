import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const AddEvent = () => {
    // website title dynamic
    useTitle('Add Event -');
    // hex color code generator
    let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    // submit button
    const handleVolunteer = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const img = form.photo.value;
        const time = form.date.value;
        const description = form.description.value;
        const color = hexColor;
        const volunteerInfo = { title, img, time, description, color };
        fetch('http://localhost:5000/volunteers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(volunteerInfo)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // sweetalert
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            }).catch(error => {
                // toastify
                toast(error.message);
            })
    }
    return (
        <div>
            <h2 className="text-[#0C0C0C] text-xl font-roboto font-medium py-7 ps-9">Add event</h2>
            <div className="bg-[#F4F7FC] ps-8 pt-12 pe-14 pb-20">
                <form onSubmit={handleVolunteer}>
                    <div className="p-8 bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-5">
                        {/* title */}
                        <div className="form-control">
                            <label className="label ps-0">
                                <span className="text-[#232323] text-base font-roboto font-medium">Event Title</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter title" className="input input-bordered rounded placeholder:text-[#C9C9C9] font-roboto font-normal text-base border-[#C9C9C9]" required />
                        </div>
                        {/* date */}
                        <div className="form-control">
                            <label className="label ps-0">
                                <span className="text-[#232323] text-base font-roboto font-medium">Event Date</span>
                            </label>
                            <input type="date" name="date" placeholder="date" className="input input-bordered rounded placeholder:text-[#C9C9C9] font-roboto font-normal text-base border-[#C9C9C9]" required />
                        </div>
                        {/* description */}
                        <div className="form-control">
                            <label className="label ps-0">
                                <span className="text-[#232323] text-base font-roboto font-medium">Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered rounded placeholder:text-[#C9C9C9] font-roboto font-normal text-base border-[#C9C9C9] resize-none" placeholder="Enter Description" rows='5'></textarea>
                        </div>
                        {/* photo */}
                        <div className="form-control">
                            <label className="label ps-0">
                                <span className="text-[#232323] text-base font-roboto font-medium">Banner</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered rounded placeholder:text-[#C9C9C9] font-roboto font-normal text-base border-[#C9C9C9]" required />
                        </div>
                    </div>
                    {/* button */}
                    <div className="text-end">
                        <button className="btn capitalize text-white font-roboto font-normal text-base bg-[#0084FF] border-0 rounded px-7 mt-4">Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddEvent;