import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 text-center my-20">
            <Link to='https://twitter.com/i/flow/login' target='_blank' className="bg-sky-300 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaTwitter />Twitter</Link>
            <Link to='https://www.facebook.com/' target='_blank' className="bg-blue-500 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaFacebookF />Facebook</Link>
            <Link to='https://www.instagram.com/' target='_blank' className="bg-gray-400 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaInstagram />Instagram</Link>
            <Link to='https://www.youtube.com/' target='_blank' className="bg-red-500 py-12 text-lg font-medium flex justify-center items-center gap-4 text-white"><FaYoutube />Youtube</Link>
        </div>
    );
};

export default SocialMedia;