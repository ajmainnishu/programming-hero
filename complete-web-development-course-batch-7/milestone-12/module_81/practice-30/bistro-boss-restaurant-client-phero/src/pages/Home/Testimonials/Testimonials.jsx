import { useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    // reviews state
    const [reviews, setReviews] = useState([]);
    // fetch data from local
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="space-y-12">
            {/* section title */}
            <SectionTitle title={'TESTIMONIALS'} subTitle={'What Our Clients Say'}></SectionTitle>
            <div className="text-center">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id} className="px-16">
                            {/* rating */}
                            <div><Rating value={review.rating} style={{width: '250px'}} readOnly className="mx-auto" /></div>
                            {/* image */}
                            <p className="flex justify-center pt-12 pb-10"><FaQuoteLeft className="text-8xl" /></p>
                            {/* info */}
                            <p className="text-[#444444] text-xl font-normal leading-9">{review.details}</p>
                            <h3 className="text-[#CD9003] text-[32px] font-medium">{review.name}</h3>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;