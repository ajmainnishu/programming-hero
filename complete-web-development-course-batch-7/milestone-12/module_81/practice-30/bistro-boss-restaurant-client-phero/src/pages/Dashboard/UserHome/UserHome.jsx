import { Helmet } from "react-helmet-async";
import { FaStore, FaPhoneAlt, FaWallet, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import useUserHome from "../../../hooks/useUserHome/useUserHome";
import useAuth from "../../../hooks/useAuth/useAuth";
import userPhoto from '../../../assets/images/navigation/userprofile.png'

const UserHome = () => {
    const { user } = useAuth();
    const [userhome] = useUserHome();
    // const { menu, shop, contact, payment } = userhome;
    return (
        <div className="bg-[#f6f6f6] pt-12 pb-20 lg:pb-72">
            {/* website title dynamic */}
            <Helmet>
                <title>Bistro Boss | User Home</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                {/* heading */}
                <h2 className="text-[#151515] font-cinzel font-semibold text-[32px] break-words mb-6">HI, WELCOME BACK!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* menu */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] py-8">
                            <div>
                                <FaWallet className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{userhome?.menu?.length}</p>
                                <p className="text-2xl font-normal">Menu</p>
                            </div>
                        </div>
                    </div>
                    {/* shop */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-8">
                            <div>
                                <FaStore className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{userhome?.shop?.length}</p>
                                <p className="text-2xl font-normal">Shop</p>
                            </div>
                        </div>
                    </div>
                    {/* contact */}
                    <div className="stats rounded-lg shadow text-white">
                        <div className="flex items-center gap-x-6 justify-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] py-8">
                            <div>
                                <FaPhoneAlt className="w-[50px] h-[50px]" />
                            </div>
                            <div>
                                <p className="text-[40px] font-extrabold">{userhome?.contact?.length}</p>
                                <p className="text-2xl font-normal">Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto">
                {/* user info */}
                <div className="bg-[#FFEDD5] space-y-12 py-24 flex flex-col items-center justify-center md:border-r-4 md:border-[#D1A054]">
                    <img src={user?.photoURL ? user?.photoURL : userPhoto} alt="user photo" className="rounded-full w-[198px] h-[198px] mx-auto" />
                    <h2 className="text-[#151515] font-cinzel font-semibold text-3xl text-center">{user?.displayName ? user?.displayName : 'No Name'}</h2>
                </div>
                {/* user activities */}
                <div className="bg-[#FEF9C3] py-24 space-y-8 flex flex-col items-center justify-center">
                    <h2 className="text-[#151515] text-[40px] font-cinzel font-semibold break-words text-center">YOUR ACTIVITIES</h2>
                    <div className="space-y-2">
                        <div className="flex items-center text-[#0088FE] text-2xl font-cinzel font-semibold"><FaShoppingCart className="me-1" /> ORDERS: {userhome?.shop?.length}</div>
                        <div className="flex items-center text-[#FFBB28] text-2xl font-cinzel font-semibold"><FaCalendarAlt className="me-1" />BOOKINGS: {userhome?.contact?.length}</div>
                        <div className="flex items-center text-[#FF8042] text-2xl font-cinzel font-semibold"><FaWallet className="me-1" />PAYMENT: {userhome?.payment?.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;