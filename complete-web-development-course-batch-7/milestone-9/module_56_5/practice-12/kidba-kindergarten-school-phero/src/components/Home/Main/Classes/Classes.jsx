import { useLoaderData } from "react-router-dom";
import Class from "../Class/Class";

const Classes = () => {
    const classes = useLoaderData();
    return (
        <div className="lg:px-32 px-10 py-24">
            <h2 className="text-center text-5xl font-bold pb-8 text-blue-900">Our Popular Classes</h2>
            <p className="text-center text-gray-500 lg:px-44 md:px-20 pb-16">Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
                {
                    classes[0].classes.map(popularClass => <Class key={popularClass._id} popularClass={popularClass}></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;