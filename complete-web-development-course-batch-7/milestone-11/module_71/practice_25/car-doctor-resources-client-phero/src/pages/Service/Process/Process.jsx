import { Link } from 'react-router-dom';
import processPhoto from '../../../assets/banner/banner-2.jpg';
import { FaRegPlayCircle } from 'react-icons/fa';

const Process = () => {

    return (
        <div className='space-y-8'>
            <h3 className="text-[#151515] text-4xl font-bold">3 Simple Steps to Process</h3>
            <p className="capitalize font-normal text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text</p>
            {/* box container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* step 1 */}
                <div className="border border-[#E8E8E8] rounded-lg py-10 px-9 space-y-5 text-center">
                    <button className="btn btn-circle btn-lg bg-[#ff38111a]"><button className="btn btn-circle bg-[#FF3811] text-white text-xl font-bold">01</button></button>
                    <h4 className="font-bold uppercase text-xl text-[#151515]">Step One</h4>
                    <p className="capitalize text-[#737373] font-normal">It uses a dictionary of over 200 .</p>
                </div>
                {/* step 2 */}
                <div className="border border-[#E8E8E8] rounded-lg py-10 px-9 space-y-5 text-center">
                    <button className="btn btn-circle btn-lg bg-[#ff38111a]"><button className="btn btn-circle bg-[#FF3811] text-white text-xl font-bold">02</button></button>
                    <h4 className="font-bold uppercase text-xl text-[#151515]">Step Two</h4>
                    <p className="capitalize text-[#737373] font-normal">It uses a dictionary of over 200 .</p>
                </div>
                {/* step 3 */}
                <div className="border border-[#E8E8E8] rounded-lg py-10 px-9 space-y-5 text-center">
                    <button className="btn btn-circle btn-lg bg-[#ff38111a]"><button className="btn btn-circle bg-[#FF3811] text-white text-xl font-bold">03</button></button>
                    <h4 className="font-bold uppercase text-xl text-[#151515]">Step Three</h4>
                    <p className="capitalize text-[#737373] font-normal">It uses a dictionary of over 200 .</p>
                </div>
            </div>
            {/* photo */}
            <div className='relative'>
                <img src={processPhoto} alt="Process Photo" className='rounded-lg' />
                <Link to={`https://www.youtube.com/`} target='_blank'><FaRegPlayCircle className='text-[#FF3811] text-9xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer' /></Link>
            </div>
        </div>
    );
};

export default Process;