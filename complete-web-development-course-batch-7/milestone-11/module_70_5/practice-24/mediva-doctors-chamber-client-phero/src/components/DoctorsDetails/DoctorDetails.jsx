import { Link, useLoaderData } from "react-router-dom";

const DoctorDetails = () => {
    // fetch data
    const doctors = useLoaderData();
    return (
        <div className="lg:w-9/12 w-11/12 mx-auto mb-20">
            <h2 className="text-center text-5xl py-10">Doctors Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    doctors?.map(doctor => <div key={doctor._id} className="p-5 rounded-lg shadow">
                        <img src={doctor.img} alt="" className="rounded-lg mb-5" />
                        <div className="flex justify-between items-center">
                            <p>{doctor.name}</p>
                            <p className="p-2 bg-green-400 text-white rounded-md">{doctor.expert}</p>
                        </div>
                        <p>{doctor.time}</p>
                        <p>{doctor.place}</p>
                        <div className="flex justify-between items-center">
                            <p>${doctor.Price}</p>
                            <Link to={`/doctors/${doctor._id}`} className="btn">Book Now</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default DoctorDetails;