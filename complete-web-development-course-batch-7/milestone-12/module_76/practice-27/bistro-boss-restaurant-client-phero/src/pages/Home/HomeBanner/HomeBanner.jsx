import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hBannerImg1 from "../../../assets/images/home/banner/home_banner-01.png";
import hBannerImg2 from "../../../assets/images/home/banner/home_banner-02.png";
import hBannerImg3 from "../../../assets/images/home/banner/home_banner-03.png";
import hBannerImg4 from "../../../assets/images/home/banner/home_banner-04.png";
import hBannerImg5 from "../../../assets/images/home/banner/home_banner-05.png";
import hBannerImg6 from "../../../assets/images/home/banner/home_banner-06.png";

const HomeBanner = () => {
    return (
        <div>
            <Carousel autoPlay className='text-center'>
                {/* image 1 */}
                <div>
                    <img src={hBannerImg1} alt="home banner image" />
                </div>
                {/* image 2 */}
                <div>
                    <img src={hBannerImg2} alt="home banner image" />
                </div>
                {/* image 3 */}
                <div>
                    <img src={hBannerImg3} alt="home banner image" />
                </div>
                {/* image 4 */}
                <div>
                    <img src={hBannerImg4} alt="home banner image" />
                </div>
                {/* image 5 */}
                <div>
                    <img src={hBannerImg5} alt="home banner image" />
                </div>
                {/* image 6 */}
                <div>
                    <img src={hBannerImg6} alt="home banner image" />
                </div>
            </Carousel>
        </div>
    );
};

export default HomeBanner;