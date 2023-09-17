import { useLoaderData } from "react-router-dom";
import './Partner.css'

const Partner = () => {
    const pictures = useLoaderData();
    return (
        <div className="flex lg:flex-nowrap flex-wrap justify-center gap-6 lg:px-32 px-10 py-28">
            {
                pictures[2].pictures.map(pic => <div key={pic._id}><img className="partner" src={pic.img} alt="partner picture" /></div>)
            }
        </div>
    );
};

export default Partner;