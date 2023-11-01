import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    // fetch single data from server
    const loadingData = useLoaderData();
    const { toy_img, toy_name, seller_name, seller_email, price, rating, quantity, details } = loadingData;
    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toy_img} alt="toy image" className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold">{toy_name}</h1>
                        <p>Seller Name: {seller_name}</p>
                        <p>Seller Email: {seller_email}</p>
                        <p>Price: $ {price}</p>
                        <p>Rating: {rating}</p>
                        <p>Available Quantity: {quantity}</p>
                        <p>Details: {details}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleToy;