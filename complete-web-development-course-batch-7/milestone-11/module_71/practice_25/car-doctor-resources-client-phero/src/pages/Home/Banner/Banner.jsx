import bannerImg1 from '../../../assets/banner/banner-1.jpg';
import bannerImg2 from '../../../assets/banner/banner-2.jpg';
import bannerImg3 from '../../../assets/banner/banner-3.jpg';
import bannerImg4 from '../../../assets/banner/banner-4.jpg';
import bannerImg5 from '../../../assets/banner/banner-5.jpg';
import bannerImg6 from '../../../assets/banner/banner-6.jpg';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Banner = () => {
    // banner info
    const bannerInfo = <div className='absolute rounded flex items-center h-full w-full bg-gradient-to-tr left-0 bottom-0 from-[#151515] to-[rgba(21, 21, 21, 0)]'>
        <div className='lg:w-1/2 md:w-2/3 md:pl-24 text-center md:text-left px-5 space-y-7 text-white'>
            <h2 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h2>
            <p className='text-lg capitalize font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
                <button className="btn bg-[#FF3811] border-0 capitalize text-white text-lg font-semibold rounded px-5">Discover More</button>
                <button className="btn btn-outline capitalize text-white text-lg font-semibold rounded px-5">Latest Project</button>
            </div>
        </div>
    </div>
    return (
        <div className='lg:w-9/12 mx-auto'>
            <div className="carousel h-screen">
                {/* slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerImg5} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide6" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
                {/* slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerImg1} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide1" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
                {/* slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerImg2} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide2" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
                {/* slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bannerImg3} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide3" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
                {/* slide 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={bannerImg4} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide4" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
                {/* slide 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={bannerImg6} className="w-full rounded-xl" />
                    {bannerInfo}
                    <div className="absolute flex right-12 gap-5 bottom-12">
                        <a href="#slide5" className="btn btn-circle bg-[#ffffff33] border-[#ffffff33]"><FaArrowLeft className='text-white' /></a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811]"><FaArrowRight className='text-white' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;