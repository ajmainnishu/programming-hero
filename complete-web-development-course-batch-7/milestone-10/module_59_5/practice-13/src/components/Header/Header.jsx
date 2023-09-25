import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="d-flex justify-content-evenly py-3 bg-light fw-bold fs-5">
            <Link className="text-decoration-none" to='/'>Login</Link>
            <Link className="text-decoration-none" to='/register'>Register</Link>
        </div>
    );
};

export default Header;