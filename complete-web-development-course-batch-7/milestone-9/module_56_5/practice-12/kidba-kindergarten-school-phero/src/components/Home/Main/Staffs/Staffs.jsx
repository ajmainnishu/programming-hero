import { useLoaderData } from "react-router-dom";
import Staff from "../Staff/Staff";

const Staffs = () => {
    const staffs = useLoaderData();
    return (
        <div className="lg:px-32 px-10 text-center py-24">
            <h2 className="text-5xl font-bold pb-8 text-blue-900">Meet Our Staffs</h2>
            <p className="text-gray-500 lg:px-44 md:px-20 pb-16">Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {
                    staffs[1].staffs.map(staff => <Staff key={staff._id} staff={staff}></Staff>)
                }
            </div>
        </div>
    );
};

export default Staffs;