import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import slideImg1 from '../../../assets/images/home/foodCarousel/slide1.jpg';
import slideImg2 from '../../../assets/images/home/foodCarousel/slide2.jpg';
import slideImg3 from '../../../assets/images/home/foodCarousel/slide3.jpg';
import slideImg4 from '../../../assets/images/home/foodCarousel/slide4.jpg';
import { Link } from 'react-router-dom';

const FoodCarousel = () => {
    return (
        <div>
            {/* section title */}
            <SectionTitle title={'ORDER ONLINE'} subTitle={'From 11:00am to 10:00pm'}></SectionTitle>
            {/* food category items */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-12"
            >
                {/* slide 1 */}
                <SwiperSlide className='pb-12'>
                    <Link to={`/shop/salads`}>
                        <img src={slideImg1} alt="slider image" className='mx-auto w-full' />
                        <h3 className='font-cinzel font-normal md:text-2xl lg:text-3xl text-center pb-20 text-white absolute md:left-1/4 lg:left-1/3 bottom-0'>SALADS</h3>
                    </Link>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide className='pb-12'>
                    <Link to={`/shop/pizza`}>
                        <img src={slideImg2} alt="slider image" className='mx-auto w-full' />
                        <h3 className='font-cinzel font-normal md:text-2xl lg:text-3xl text-center pb-20 text-white absolute md:left-1/4 lg:left-1/3 bottom-0'>PIZZAS</h3>
                    </Link>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide className='pb-12'>
                    <Link to={`/shop/soups`}>
                        <img src={slideImg3} alt="slider image" className='mx-auto w-full' />
                        <h3 className='font-cinzel font-normal md:text-2xl lg:text-3xl text-center pb-20 text-white absolute md:left-1/4 lg:left-1/3 bottom-0'>SOUPS</h3>
                    </Link>
                </SwiperSlide>
                {/* slide 4 */}
                <SwiperSlide className='pb-12'>
                    <Link to={`/shop/desserts`}>
                        <img src={slideImg4} alt="slider image" className='mx-auto w-full' />
                        <h3 className='font-cinzel font-normal md:text-2xl lg:text-3xl text-center pb-20 text-white absolute md:left-1/4 lg:left-1/3 bottom-0'>DESSERTS</h3>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FoodCarousel;