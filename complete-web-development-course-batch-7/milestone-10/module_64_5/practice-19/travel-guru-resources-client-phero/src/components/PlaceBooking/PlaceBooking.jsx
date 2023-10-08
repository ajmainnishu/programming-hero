import { Link, useLoaderData } from "react-router-dom";


const PlaceBooking = () => {
    // data load
    const placeBook = useLoaderData();
    return (
        <div className="w-5/6 mx-auto py-40">
            <div className="grid grid-cols-12">
                <div className="col-span-6 pr-11">
                    <h2 style={{fontFamily: 'Bebas Neue'}} className="text-white uppercase text-8xl font-normal">{placeBook.place_name}</h2>
                    <p className="text-white pt-5 font-normal">{placeBook.place_details}</p>
                </div>
                <div className="col-span-6 flex justify-end">
                    <form className="bg-white py-7 px-6 rounded-md w-9/12">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-400 font-medium">Origin</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered rounded-md" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-gray-400 font-medium pt-3">Destination</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered rounded-md" required />
                        </div>

                        <div className="flex flex-row justify-between form-control pb-7">
                            <div className="text-gray-400">
                                <label className="label">
                                    <span className="label-text text-gray-400 font-medium pt-3">From</span>
                                </label>
                                <input type="date" className="input input-bordered rounded-md" required />
                            </div>
                            <div className="text-gray-400">
                                <label className="label">
                                    <span className="label-text font-medium text-gray-400 pt-3">To</span>
                                </label>
                                <input type="date" className="input input-bordered rounded-md" required />
                            </div>
                        </div>
                        {/* button */}
                        <Link to={`/booking/${placeBook.id}`} style={{backgroundColor: '#F9A51A'}} className="btn capitalize w-full font-medium rounded-md border-0">Start Booking</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceBooking;