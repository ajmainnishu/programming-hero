import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../../hooks/useTitle";

const Events = () => {
    // website title dynamic
    useTitle('Events -');
    // events get fetch state
    const [events, setEvents] = useState([]);
    // get event fetch data from server
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [events])
    // cancel button and delete from server
    const handleEventDelete = id => {
        // sweetalert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/events/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Cancel!',
                                'Your file has been cancel.',
                                'success'
                            )
                        }
                    })
                    .catch(error => {
                        // toastify
                        toast(error.message);
                    })
            }

        })
    }
    return (
        <div className="w-11/12 md:w-9/12 mx-auto pt-3 pb-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                {/* events mapping */}
                {
                    events.map(event => <div key={event._id} className="grid grid-cols-5 md:space-x-6 space-y-6 md:space-y-0 p-6 bg-white rounded-xl" style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }}>
                        {/* image */}
                        <div className="col-span-5 md:col-span-2">
                            <img src={event.img} alt="image" />
                        </div>
                        {/* info */}
                        <div className="col-span-5 md:col-span-3 flex flex-col justify-between">
                            <div className="space-y-3">
                                <h3 className="text-[#0B0B0B] text-2xl font-bold font-avenir">{event.title}</h3>
                                <p className="font-semibold text-xl">{event.date}</p>
                            </div>
                            {/* button */}
                            <div className="text-end">
                                <button onClick={() => handleEventDelete(event._id)} className="btn capitalize text-[#787878] text-base font-medium bg-[#E3E3E3] px-10 border-0 rounded-md">Cancel</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Events;