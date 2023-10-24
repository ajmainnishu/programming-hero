import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer lg:py-32 py-16 lg:px-36 px-20 bg-[#151515] text-base-content mt-32">
            {/* item 1 */}
            <aside className='space-y-4 '>
                <img src={logo} alt="Website footer logo" style={{ filter: 'brightness(300%)' }} />
                <p className='text-[#E8E8E8] text-base font-normal'>Edwin Diaz is a software and web <br className='md:block hidden' /> technologies engineer, a life coach <br className='md:block hidden' /> trainer who is also a serial .</p>
                <div className="space-x-3">
                    <Link to={`https://www.google.com/`} target='_blank' className='btn btn-circle bg-gray-700 text-white btn-sm border-0'><FaGoogle /></Link>
                    <Link to={`https://twitter.com/`} target='_blank' className='btn btn-circle bg-gray-700 text-white btn-sm border-0'><FaTwitter /></Link>
                    <Link to={`https://www.instagram.com/`} target='_blank' className='btn btn-circle bg-gray-700 text-white btn-sm border-0'><FaInstagram /></Link>
                    <Link to={`https://www.linkedin.com/`} target='_blank' className='btn btn-circle bg-gray-700 text-white btn-sm border-0'><FaLinkedinIn /></Link>
                </div>
            </aside>
            {/* item 2 */}
            <nav>
                <header className="text-white font-semibold text-xl capitalize mb-9">About</header>
                <Link to={`/`} className="link link-hover text-[#F3F3F3]">Home</Link>
                <Link className="link link-hover text-[#F3F3F3]">Service</Link>
                <Link className="link link-hover text-[#F3F3F3]">Contact</Link>
            </nav>
            {/* item 2 */}
            <nav>
                <header className="text-white font-semibold text-xl capitalize mb-9">Company</header>
                <Link className="link link-hover text-[#F3F3F3]">Why Car Doctor</Link>
                <Link className="link link-hover text-[#F3F3F3]">About</Link>
            </nav>
            {/* item 3 */}
            <nav>
                <header className="text-white font-semibold text-xl capitalize mb-9">Support</header>
                <Link className="link link-hover text-[#F3F3F3]">Support Center</Link>
                <Link className="link link-hover text-[#F3F3F3]">Feedback</Link>
                <Link className="link link-hover text-[#F3F3F3]">Accessibility</Link>
            </nav>
        </footer>
    );
};

export default Footer;