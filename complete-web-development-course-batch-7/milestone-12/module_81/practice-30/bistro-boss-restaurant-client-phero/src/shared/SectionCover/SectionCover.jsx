import { Parallax } from 'react-parallax';

const SectionCover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="Food"
            strength={-200}
        >
            <div className="py-20 md:py-44">
                <div className="w-10/12 lg:w-8/12 mx-auto px-10 md:px-20 lg:px-32 py-10 md:py-28 text-center space-y-2 bg-[#15151599]">
                    <h3 className="font-cinzel text-white font-semibold text-[45px] uppercase">{title}</h3>
                    <p className="font-semibold text-white text-base leading-7">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCover;