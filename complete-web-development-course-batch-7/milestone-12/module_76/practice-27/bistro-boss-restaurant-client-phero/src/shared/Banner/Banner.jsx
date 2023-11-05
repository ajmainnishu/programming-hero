const Banner = ({ heading, para }) => {
    return (
        <div className="text-white text-center py-14 md:py-36 bg-[#15151599]">
            <h2 className="text-5xl md:text-[88px] font-cinzel font-bold uppercase">{heading}</h2>
            <p className="text-xl font-cinzel uppercase font-semibold">{para}</p>
        </div>
    );
};

export default Banner;