import './Banner.css'

const Banner = () => {
    return (
        <div className='service-banner rounded-lg w-9/12 mx-auto'>
            <h2 className='font-bold text-5xl pb-20 pt-32 pl-24 text-white'>Service Details</h2>
            <div className='text-center'>
                <button className="btn capitalize px-11 bg-[#FF3811] rounded-tr-[700px] rounded-tl-[700px] rounded-br-none rounded-bl-none border-none text-white">Home/Service Details</button>
            </div>
        </div>
    );
};

export default Banner;