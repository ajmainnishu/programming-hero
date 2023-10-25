import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Download from "../Download/Download";
import Process from "../Process/Process";
import Quote from "../Quote/Quote";
import { useState } from "react";
import SingleService from "./SingleService";
import AllServices from "./AllServices";
import useTitle from "../../../hooks/useTitle";


const Service = () => {
    // dynamic title
    useTitle('Service Details')
    // fetch single data
    const loadingServices = useLoaderData();
    // import single data into state hook
    const [services, setServices] = useState(loadingServices);
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            {/* top banner */}
            <Banner></Banner>
            <div className="md:flex gap-6">
                <div className=" md:w-7/12 lg:w-8/12 space-y-12">
                    {/* left side single data component */}
                    <SingleService services={services}></SingleService>
                    {/* left side 3 step process component */}
                    <Process></Process>
                </div>
                <div className="md:w-5/12 lg:w-4/12 space-y-8">
                    {/* right all data fetch component */}
                    <AllServices setServices={setServices}></AllServices>
                    {/* download component */}
                    <Download></Download>
                    {/* quote component */}
                    <Quote></Quote>
                    {/* price */}
                    <p className="text-[#151515] text-4xl font-bold">Price: ${services?.price}</p>
                    {/* checkout button */}
                    <Link to={`/checkout/${services?._id}`} className="btn btn-block capitalize text-lg text-white bg-[#FF3811] rounded">Proceed Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;