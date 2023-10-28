import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const Registration = () => {
    // website title dynamic
    useTitle('Register -');
    // register button
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const description = form.description.value;
        const organize = form.organize.value;
        const register = { name, email, date, description, organize }
        // register post data
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(register)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    // sweetalert
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Register Done',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    form.reset();
                }

            })
            .catch(error => {
                // toastify
                toast(error.message);
            })
    }
    return (
        <div className='pt-11 pb-44 space-y-7 bg-[#F8FAFC]'>
            <Link to={`/`} className=''>
                <img src={logo} className="w-[197px] h-[60px] mx-auto" alt="website logo" />
            </Link>
            <div className='space-y-12 pt-9 px-10 md:px-14 pb-16 border border-[#ABABAB] rounded md:w-[570px] md:mx-auto mx-5 bg-white'>
                <h2 className='text-2xl font-bold text-black'>Register as a Volunteer</h2>
                <form onSubmit={handleRegister} className="card-bod space-y-9">
                    {/* full name */}
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" required />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" required />
                    </div>
                    {/* date */}
                    <div className="form-control">
                        <input type="date" name="date" placeholder="Date" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" required />
                    </div>
                    {/* description */}
                    <div className="form-control">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" />
                    </div>
                    {/* organize */}
                    <div className="form-control">
                        <input type="text" name="organize" placeholder="Organize books at the library" className="input input-bordered border-t-0 border-e-0 border-s-0 border-b-[#C5C5C5] rounded-none ps-0 placeholder:text-black focus:outline-none placeholder:font-medium" required />
                    </div>
                    {/* button */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#3F90FC] text-white border-none capitalize font-medium text-base rounded-none">Registration</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;