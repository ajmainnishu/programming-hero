import instagramPhoto1 from '../../../../assets/images/followUs/cups-1.png';
import instagramPhoto2 from '../../../../assets/images/followUs/cups-2.png';
import instagramPhoto3 from '../../../../assets/images/followUs/cups-3.png';
import instagramPhoto4 from '../../../../assets/images/followUs/cups-4.png';
import instagramPhoto5 from '../../../../assets/images/followUs/cups-5.png';
import instagramPhoto6 from '../../../../assets/images/followUs/cups-6.png';
import instagramPhoto7 from '../../../../assets/images/followUs/cups-7.png';
import instagramPhoto8 from '../../../../assets/images/followUs/cups-8.png';

const FollowUs = () => {
    return (
        <div className='py-32'>
            <p className='text-center text-xl text-[#1B1A1A]'>Follow Us Now</p>
            <h2 className='text-[#331A15] font-rancho text-center text-6xl mb-12 mt-2'>Follow on Instagram</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-4/6 mx-auto'>
                <img className='w-full' src={instagramPhoto1} alt="photos" />
                <img className='w-full' src={instagramPhoto2} alt="photos" />
                <img className='w-full' src={instagramPhoto3} alt="photos" />
                <img className='w-full' src={instagramPhoto4} alt="photos" />
                <img className='w-full' src={instagramPhoto5} alt="photos" />
                <img className='w-full' src={instagramPhoto6} alt="photos" />
                <img className='w-full' src={instagramPhoto7} alt="photos" />
                <img className='w-full' src={instagramPhoto8} alt="photos" />
            </div>
        </div>
    );
};

export default FollowUs;