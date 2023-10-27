import aboutPersonPhoto from '../../../assets/about_us/person.jpg';
import aboutPartsPhoto from '../../../assets/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className='lg:w-9/12 mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-14 lg:pr-0 lg:pl-0 lg:pt-0">
                    {/* image part */}
                    <div className='lg:w-1/2 relative'>
                        <img src={aboutPersonPhoto} className="w-3/4 rounded-lg" alt="Person Image" />
                        <img src={aboutPartsPhoto} className="absolute right-5 top-1/2 w-2/4 rounded-lg border-8 border-white" alt="Parts Image" />
                    </div>
                    {/* details part */}
                    <div className='lg:w-1/2'>
                        <h4 className="text-[#FF3811] font-bold text-xl mb-5">About Us</h4>
                        <h2 className="text-5xl font-bold text-[#151515] mb-7">We are qualified & of experience in this field</h2>
                        <p className="font-normal capitalize text-[#737373] mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                        <p className="font-normal capitalize text-[#737373] mb-7">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                        <button className="btn bg-[#FF3811] border-0 rounded-md text-white capitalize px-6 text-lg">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;