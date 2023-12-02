import { useForm } from "react-hook-form";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaCalendarAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import ContactLocation from "../../Contact/ContactLocation/ContactLocation";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const Reservation = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // button
    const onSubmit = data => {
        const { date, time, guest, name, phone, email } = data;
        const bookingData = { date, time, guest, name, phone, email, status: 'pending' }
        axiosSecure.post('/bookings', bookingData)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booked a table successfully",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }
    return (
        <div className="w-11/12 mx-auto space-y-16 pt-12 pb-36">
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | Reservation</title>
            </Helmet>
            <div className="space-y-16">
                {/* top section details */}
                <SectionTitle title={'BOOK A TABLE'} subTitle={'Reservation'}></SectionTitle>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 lg:w-10/12 mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* date */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] text-xl font-semibold">Date</span>
                            </label>
                            <input type="date" {...register("date", { required: true })} className="input input-bordered rounded" />
                            {errors.date && <span className='text-red-600 font-semibold'>Date field is required</span>}
                        </div>
                        {/* time */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] text-xl font-semibold">Time*</span>
                            </label>
                            <input type="time" {...register("time", { required: true })} className="input input-bordered rounded" />
                            {errors.time && <span className='text-red-600 font-semibold'>Time field is required</span>}
                        </div>
                        {/* guest */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Guest*</span>
                            </label>
                            <select {...register("guest", { required: true })} className="select rounded select-bordered text-xl font-normal">
                                <option value={'1'}>1 Person</option>
                                <option value={'2'}>2 Person</option>
                                <option value={'3'}>3 Person</option>
                                <option value={'4'}>4 Person</option>
                            </select>
                        </div>
                        {/* name */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] text-xl font-semibold">Name*</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered rounded" />
                            {errors.name && <span className='text-red-600 font-semibold'>Name field is required</span>}
                        </div>
                        {/* phone */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] text-xl font-semibold">Phone*</span>
                            </label>
                            <input type="number" {...register("phone", { required: true })} placeholder="Your Name" className="input input-bordered rounded" />
                            {errors.phone && <span className='text-red-600 font-semibold'>Phone field is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label pt-0 ps-0">
                                <span className="text-[#444444] text-xl font-semibold">Email*</span>
                            </label>
                            <input value={user?.email} type="email" {...register("email", { required: true })} placeholder="Your Name" className="input input-bordered rounded" readOnly />
                            {errors.email && <span className='text-red-600 font-semibold'>Email field is required</span>}
                        </div>
                    </div>
                    {/* button */}
                    <div className="text-center">
                        <button type="submit" className="btn capitalize text-white border-0  bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-xl font-bold px-7">Book A Table <FaCalendarAlt /></button>
                    </div>
                </form>
            </div>
            {/* location section */}
            <div>
                <ContactLocation></ContactLocation>
            </div>
        </div>
    );
};

export default Reservation;