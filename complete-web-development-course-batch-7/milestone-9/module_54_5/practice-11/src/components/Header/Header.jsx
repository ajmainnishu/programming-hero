import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-evenly py-5 bg-gray-600 text-white">
            <Link className="font-bold text-2xl" to='/'>Home</Link>
            <Link className="font-bold text-2xl" to='/about'>About</Link>
            <Link className="font-bold text-2xl" to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;