import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import empty404 from '../../assets/images/404/404.gif';
import useTitle from "../../hooks/useTitle";

const Empty = () => {
    useTitle('404')
    return (
        <div className="py-16">
            <Link to='/' className="text-[#374151] font-rancho text-3xl mb-12 drop-shadow-lg flex justify-center items-center gap-x-4"><FaArrowLeft className='text-xl' />Back To home</Link>
            <img className="mx-auto" src={empty404} alt="" />
        </div>
    );
};

export default Empty;