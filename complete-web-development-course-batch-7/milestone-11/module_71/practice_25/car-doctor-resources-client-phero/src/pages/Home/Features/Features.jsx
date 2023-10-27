import featuresLogo1 from '../../../assets/features/group.svg';
import featuresLogo2 from '../../../assets/features/Group-38729.svg';
import featuresLogo3 from '../../../assets/features/person.svg';
import featuresLogo4 from '../../../assets/features/Wrench.svg';
import featuresLogo5 from '../../../assets/features/check.svg';
import featuresLogo6 from '../../../assets/features/deliveryt.svg';

const Features = () => {
    
return (
    <div className='lg:w-9/12 mx-auto px-5 lg:px-0 space-y-12'>
        {/* top details */}
        <div className='space-y-5 text-center'>
            <h5 className='text-[#FF3811] text-xl font-bold'>Core Features</h5>
            <h2 className='text-[#151515] font-bold text-5xl'>Why Choose Us</h2>
            <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don&apos;t look even slightly believable. </p>
        </div>
        {/* features box container */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {/* features 1 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5'>
                <img src={featuresLogo1} alt="" className='mx-auto' />
                <p className='text-[#444444] text-lg font-bold'>Expert Team</p>
            </div>
            {/* features 2 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5 bg-[#FF3811]'>
                <img src={featuresLogo2} alt="" className='mx-auto' />
                <p className='text-lg font-bold text-white'>Timely Delivery</p>
            </div>
            {/* features 3 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5'>
                <img src={featuresLogo3} alt="" className='mx-auto' />
                <p className='text-[#444444] text-lg font-bold'>24/7 Support</p>
            </div>
            {/* features 4 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5'>
                <img src={featuresLogo4} alt="" className='mx-auto' />
                <p className='text-[#444444] text-lg font-bold'>Best Equipment</p>
            </div>
            {/* features 5 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5'>
                <img src={featuresLogo5} alt="" className='mx-auto' />
                <p className='text-[#444444] text-lg font-bold'>100% Guaranty</p>
            </div>
            {/* features 6 */}
            <div className='p-7 border border-[#E8E8E8] rounded-lg text-center space-y-5'>
                <img src={featuresLogo6} alt="" className='mx-auto' />
                <p className='text-[#444444] text-lg font-bold'>Timely Delivery</p>
            </div>
        </div>
    </div>
);
};

export default Features;