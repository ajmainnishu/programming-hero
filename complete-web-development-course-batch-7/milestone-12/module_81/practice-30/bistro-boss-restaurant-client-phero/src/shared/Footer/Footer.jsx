import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* footer top */}
            <div className="grid grid-cols-1 md:grid-cols-2 text-white">
                {/* left side */}
                <div className="bg-[#1F2937] text-center py-14 md:py-24">
                    <h5 className="text-[32px] font-medium">CONTACT US</h5>
                    <p className="text-xl font-medium leading-9 mt-6">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-xl font-medium leading-9">+88 123456789</p>
                    <p className="text-xl font-medium leading-9">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-xl font-medium leading-9">Sat - Sun: 10:00 - 23:00</p>
                </div>
                {/* right side */}
                <div className="bg-[#111827] text-center py-14 md:py-24">
                    <h6 className="text-[32px] font-medium">Follow US</h6>
                    <p className="text-xl font-medium mt-6 mb-8">Join us on social media</p>
                    <div className='flex space-x-8 justify-center'>
                        <Link to={'https://www.facebook.com/'} target='_blank'><FaFacebookF className='text-3xl' /></Link>
                        <Link to={'https://www.instagram.com/'} target='_blank'><FaInstagram className='text-3xl' /></Link>
                        <Link to={'https://twitter.com/'} target='_blank'><FaTwitter className='text-3xl' /></Link>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <p className='text-center bg-[#151515] text-white py-4 font-medium text-xl'>Copyright © BistroBoss. All rights reserved.</p>
        </footer>
    );
};

export default Footer;