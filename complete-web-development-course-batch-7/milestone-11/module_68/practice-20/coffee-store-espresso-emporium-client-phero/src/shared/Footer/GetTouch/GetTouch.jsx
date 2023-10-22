import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const GetTouch = () => {
    return (
        <div>
            <h2 className='text-[#331A15] font-rancho text-5xl my-8 drop-shadow-lg'>Get in Touch</h2>
            <div className='flex items-center gap-x-6 text-xl mb-4'>
                <div className='text-bg[#331A15]'><FaPhoneAlt /></div>
                <div className='text-[#1B1A1A]'>+88 01700000000</div>
            </div>
            <div className='flex items-center gap-x-6 text-xl mb-4'>
                <div className='text-bg[#331A15]'><FaEnvelope /></div>
                <div className='text-[#1B1A1A]'>info@gmail.com</div>
            </div>
            <div className='flex items-center gap-x-6 text-xl'>
                <div className='text-bg[#331A15]'><FaMapMarkerAlt /></div>
                <div className='text-[#1B1A1A]'>Thakurgaon Road, Bangladesh</div>
            </div>
        </div>
    );
};

export default GetTouch;