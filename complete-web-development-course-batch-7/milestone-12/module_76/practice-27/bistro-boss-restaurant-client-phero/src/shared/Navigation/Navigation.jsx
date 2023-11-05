import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import userImg from '../../assets/images/navigation/userprofile.png';
import cartImg from '../../assets/images/navigation/cart.png';

const Navigation = () => {
    // pages link
    const nav = <>
        <li><Link to={`/`} className="font-extrabold text-xl hover:text-[#EEFF25]">HOME</Link></li>
        <li><Link to={`/contact`} className="font-extrabold text-xl hover:text-[#EEFF25]">CONTACT US</Link></li>
        <li><Link className="font-extrabold text-xl hover:text-[#EEFF25]">DASHBOARD</Link></li>
        <li><Link to={`/menu`} className="font-extrabold text-xl hover:text-[#EEFF25]">OUR MENU</Link></li>
        <li><Link to={`/shop/salads`} className="font-extrabold text-xl hover:text-[#EEFF25] pe-0">OUR SHOP</Link></li>
    </>
    const { user, userLogOut } = useContext(AuthContext);
    // log out button
    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                // sweet alert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Out Successfully',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch(error => toast(error.message))
    }
    return (
        <div className="navbar justify-between fixed z-10 text-white bg-[#15151580] md:pt-8 md:pb-6 md:ps-14 md:pe-9">
            <div>
                {/* small device pages link */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#15151580] rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                {/* website logo */}
                <Link to={`/`} className="flex flex-col">
                    <span className="font-[cinzel] font-[900] md:text-3xl text-xl">BISTRO BOSS</span>
                    <span className="font-[cinzel] font-bold md:text-2xl text-lg">RESTAURANT</span>
                </Link>
            </div>
            <div>
                <div className="hidden lg:flex">
                    {/* big device pages link */}
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div>
                    {/* button */}
                    <ul className="menu menu-horizontal px-1 items-center ps-0">
                        <img src={cartImg} alt="cart image" className="w-[62px] hidden md:block" />
                        {/* login button */}
                        {!user && <li><Link to={`/login`} className="font-extrabold text-xl hover:text-[#EEFF25]">LOGIN</Link></li>}
                        {/* log out button */}
                        {user && <li><button onClick={handleLogOut} className="font-extrabold text-xl hover:text-[#EEFF25]">SIGN OUT</button></li>}
                        {/* user image */}
                        {user && <label className="btn btn-circle avatar hidden md:block">
                            <div className="rounded-full">
                                <img src={user?.photoURL ? user.photoURL : userImg} />
                            </div>
                        </label>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;