import { FaRegFileAlt, FaArrowRight } from 'react-icons/fa';

const Download = () => {
    return (
        <div className="bg-[#151515] rounded-lg text-white space-y-6 p-10">
            <h4 className='text-2xl font-bold'>Download</h4>
            <div className='space-y-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2.5'>
                        <FaRegFileAlt className='text-3xl' />
                        <div>
                            <p className='text-lg font-semibold'>Our Brochure</p>
                            <p className='text-[#A2A2A2] font-normal text-base'>Download</p>
                        </div>
                    </div>
                    <p className='bg-[#FF3811] p-4 rounded'><FaArrowRight /></p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2.5'>
                        <FaRegFileAlt className='text-3xl' />
                        <div>
                            <p className='text-lg font-semibold'>Our Brochure</p>
                            <p className='text-[#A2A2A2] font-normal text-base'>Download</p>
                        </div>
                    </div>
                    <p className='bg-[#FF3811] p-4 rounded'><FaArrowRight /></p>
                </div>
            </div>
        </div>
    );
};

export default Download;