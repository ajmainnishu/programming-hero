import { Link, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaBars, FaShoppingBag, FaEnvelope, FaDumpster, FaUsers, FaBook, FaUtensils, FaListUl } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin/useAdmin";

const Dashboard = () => {
    // admin check
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* button */}
                    <div className="text-center">
                        <label htmlFor="my-drawer-2" className="btn bg-[#D1A054] drawer-button lg:hidden rounded my-10">Open drawer</label>
                    </div>
                    {/* outlet */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 space-y-2.5 w-80 min-h-full bg-[#D1A054] text-base-content">
                        {/* website logo */}
                        <li className="mb-14">
                            <Link to={`/`} className="flex flex-col items-start hover:bg-transparent">
                                <span className="font-[cinzel] font-[900] md:text-2xl text-xl text-[#151515]">BISTRO BOSS</span>
                                <span className="font-[cinzel] font-bold md:text-lg">RESTAURANT</span>
                            </Link>
                        </li>
                        {/* user */}
                        {
                            isAdmin ? <>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`adminhome`} className="hover:text-white hover:font-bold"><FaHome className="text-2xl" />ADMIN HOME</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`additems`} className="hover:text-white hover:font-bold"><FaUtensils className="text-2xl" />ADD ITEMS</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`manageitems`} className="hover:text-white hover:font-bold"><FaListUl className="text-2xl" />MANAGE ITEMS</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`managebookings`} className="hover:text-white hover:font-bold"><FaBook className="text-2xl" />MANAGE BOOKINGS</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`allusers`} className="hover:text-white hover:font-bold"><FaUsers className="text-2xl" />ALL USERS</Link></li>
                            </> : <>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`userhome`} className="hover:text-white hover:font-bold"><FaHome className="text-2xl" />USER HOME</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`reservation`} className="hover:text-white hover:font-bold"><FaCalendarAlt className="text-2xl" />RESERVATION</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`paymenthistory`} className="hover:text-white hover:font-bold"><FaWallet className="text-2xl" />PAYMENT HISTORY</Link></li>
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`mycart`} className="hover:text-white hover:font-bold"><FaShoppingCart className="text-2xl" />MY CART</Link></li>
                                {/* <li className="text-[#151515] font-cinzel text-base font-medium"><Link className="hover:text-white hover:font-bold"><FaDumpster className="text-2xl" />ADD REVIEW</Link></li> */}
                                <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`mybookings`} className="hover:text-white hover:font-bold"><FaCalendarAlt className="text-2xl" />MY BOOKING</Link></li>
                            </>
                        }
                        <div className="divider py-4"></div>
                        <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`/`} className="hover:text-white hover:font-bold"><FaHome className="text-2xl" />HOME</Link></li>
                        <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`/menu`} className="hover:text-white hover:font-bold"><FaBars className="text-2xl" />MENU</Link></li>
                        <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`/shop/salads`} className="hover:text-white hover:font-bold"><FaShoppingBag className="text-2xl" />SHOP</Link></li>
                        <li className="text-[#151515] font-cinzel text-base font-medium"><Link to={`/contact`} className="hover:text-white hover:font-bold"><FaEnvelope className="text-2xl" />CONTACT</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;