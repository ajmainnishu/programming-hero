import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-10 my-20">
            <SectionTitle subHeading={'check it out'} heading={'Featured Item'}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="feature image" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem quod maxime ut tenetur aut perferendis reiciendis officiis laborum nihil aliquid deleniti provident quis, asperiores dolore? Cupiditate dolore quasi doloremque aspernatur nostrum necessitatibus ut perspiciatis quod qui numquam iste maiores iure earum, rerum perferendis. Debitis repudiandae sint ipsa beatae nulla?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;