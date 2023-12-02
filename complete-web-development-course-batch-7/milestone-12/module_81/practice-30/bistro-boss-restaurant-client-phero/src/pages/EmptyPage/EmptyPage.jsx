import { Link } from 'react-router-dom';
import emptyImg from '../../assets/images/empty/404.gif';
import { FaHome } from "react-icons/fa";

const EmptyPage = () => {
    return (
        <div>
            <img className='mx-auto py-20' src={emptyImg} alt="" />
            <div className="text-center mb-32">
                <Link to={`/`} className="btn capitalize text-white border-0  bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none text-xl font-bold px-7">Back To Home <FaHome /></Link>
            </div>
        </div>
    );
};

export default EmptyPage;