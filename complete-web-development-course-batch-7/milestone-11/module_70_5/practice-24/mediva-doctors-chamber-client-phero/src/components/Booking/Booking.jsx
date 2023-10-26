import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Booking = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState([]);
    // day picker state
    const [selected, setSelected] = useState(null);
    // footer
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked <span className='font-semibold'>{format(selected, 'PP')}</span>.</p>;
    }
    const day = selected?.getDate();
    const month = selected?.getMonth();
    const year = selected?.getFullYear();
    const pickDate = (day + '-' + (month + 1) + '-' + year);
    // get fetch id
    const data = useParams()
    // get data from server
    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${data.id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [data])
    const handlePay = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = pickDate;
        const doctorName = form.doctorName.value;
        const expert = form.expert.value
        const pay = { name, email, date, doctorName, expert };
        fetch('http://localhost:5000/doctorsPaid', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(pay)
        })
            .then(() => {
                // react toast
                toast("Paid Successfully");
                form.reset();
                // pay button
                document.getElementById('paidBtn').innerText = 'Paid'
                // navigate to home
                navigate('/')
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="bg-base-200">
            <form onSubmit={handlePay} className="w-9/12 mx-auto py-20">
                <div className="grid grid-cols-2 gap-5 items-center">
                    {/* input form */}
                    <div>
                        {/* name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" defaultValue={user?.displayName} required />
                        </div>
                        {/* email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                        </div>
                        {/* doctor name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Doctor Name</span>
                            </label>
                            <input type="text" name="doctorName" placeholder="Doctor Name" className="input input-bordered w-full" defaultValue={doctor.name} readOnly />
                        </div>
                        {/* doctor expert */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Expert</span>
                            </label>
                            <input type="text" name="expert" placeholder="expert" className="input input-bordered w-full" defaultValue={doctor.expert} readOnly />
                        </div>
                    </div>
                    {/* date */}
                    <div className="mx-auto">
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </div>
                {/* button */}
                <button id='paidBtn' className="btn btn-neutral mt-5 w-full">Pay</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Booking;