import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaPhoneVolume, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ContactLocation = () => {
    return (
        <div className="space-y-12">
            <SectionTitle title={'OUR LOCATION'} subTitle={'Visit Us'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* item 1 */}
                <div>
                    <div className="bg-[#D1A054] py-6">
                        <FaPhoneVolume className="text-white text-3xl mx-auto" />
                    </div>
                    <div className="border border-t-0 border-[#E8E8E8] px-7 pb-7 text-center">
                        <div className="bg-[#F3F3F3] space-y-3 h-[190px] flex flex-col justify-center">
                            <p className="text-[#151515] text-2xl font-medium">PHONE</p>
                            <p className="text-[#444444] font-normal">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                {/* item 2 */}
                <div>
                    <div className="bg-[#D1A054] py-6">
                        <FaMapMarkerAlt className="text-white text-3xl mx-auto" />
                    </div>
                    <div className="border border-t-0 border-[#E8E8E8] px-7 pb-7 text-center">
                        <div className="bg-[#F3F3F3] space-y-3 h-[190px] flex flex-col justify-center">
                            <p className="text-[#151515] text-2xl font-medium">ADDRESS</p>
                            <p className="text-[#444444] font-normal">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>
                {/* item 3 */}
                <div>
                    <div className="bg-[#D1A054] py-6">
                        <FaClock className="text-white text-3xl mx-auto" />
                    </div>
                    <div className="border border-t-0 border-[#E8E8E8] px-7 pb-7 text-center">
                        <div className="bg-[#F3F3F3] space-y-3 h-[190px] flex flex-col justify-center">
                            <p className="text-[#151515] text-2xl font-medium">WORKING HOURS</p>
                            <div>
                                <p className="text-[#444444] font-normal">Mon - Fri: 08:00 - 22:00</p>
                                <p className="text-[#444444] font-normal">Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLocation;