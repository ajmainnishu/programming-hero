import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <div className='flex items-center gap-x-5 text-4xl text-[#331A15]'>
            <Link to={'https://www.facebook.com/'} target='_blank'><FaFacebook /></Link>
            <Link to={'https://twitter.com/'} target='_blank'><FaTwitter /></Link>
            <Link to={'https://www.instagram.com/'} target='_blank'><FaInstagram /></Link>
            <Link to={'https://www.linkedin.com/'} target='_blank'><FaLinkedin /></Link>
        </div>
    );
};

export default SocialMedia;