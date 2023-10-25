import customerPhoto1 from '../../../assets/customer/customer-1.png';
import customerPhoto2 from '../../../assets/customer/customer-2.png';
import customerQuote from '../../../assets/customer/quote.svg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Customer = () => {
    // customer box container top info
    const customerInfo = <div className='space-y-1'>
        <h4 className='text-[#444444] text-2xl font-bold'>Awlad Hossain</h4>
        <p className='text-[#737373] text-xl font-semibold'>Businessman</p>
    </div>
    // customer box container bottom info
    const customerDetails = <div className='space-y-5'>
        <p className='text-[#737373] font-normal text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
        <div className="rating space-x-1">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
        </div>
    </div>
    return (
        <div className='lg:w-9/12 mx-auto px-5 lg:px-0 space-y-12'>
            {/* customer top details */}
            <div className='space-y-5 text-center'>
                <h5 className='text-[#FF3811] text-xl font-bold'>Testimonial</h5>
                <h2 className='text-[#151515] font-bold text-5xl'>What Customer Says</h2>
                <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don&apos;t look even slightly believable. </p>
            </div>
            {/* customer box container */}
            <div className="carousel w-full lg:px-6">
                <div id="" className="carousel-item relative w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* customer 1 */}
                        <div className='border border-[#F3F3F3] rounded-lg py-12 pl-12 pr-5 space-y-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-x-2'>
                                    <img src={customerPhoto1} alt="customer 1" />
                                    {customerInfo}
                                </div>
                                <img src={customerQuote} alt="Customer Quote" className='md:mr-20' />
                            </div>
                            {customerDetails}
                        </div>
                        {/* customer 2 */}
                        <div className='border border-[#F3F3F3] rounded-lg py-12 pl-12 pr-5 space-y-5'>
                            <div className='flex justify-between'>
                                <div className='flex gap-x-2'>
                                    <img src={customerPhoto2} alt="customer 1" />
                                    {customerInfo}
                                </div>
                                <img src={customerQuote} alt="Customer Quote" className='md:mr-20' />
                            </div>
                            {customerDetails}
                        </div>
                    </div>
                    {/* arrow mark */}
                    <div className="absolute lg:flex justify-between transform -translate-y-1/2 -left-6 -right-6 top-1/2 hidden">
                        <a href="#slide5" className="btn btn-circle bg-[#F3F3F3] border-[#ffffff33]"><FaArrowLeft className='text-[#444444]' /></a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;