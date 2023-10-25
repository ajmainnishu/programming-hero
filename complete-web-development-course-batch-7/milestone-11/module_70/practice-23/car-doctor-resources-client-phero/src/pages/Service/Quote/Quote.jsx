import logo from '../../../assets/logo/logo.svg';

const Quote = () => {
    return (
        <div className='bg-[#151515] rounded-lg text-center pt-12 pr-12 pl-12 pb-24 space-y-5'>
            {/* image part */}
            <img src={logo} alt="Website Logo" className='mx-auto' style={{ filter: 'brightness(300%)' }} />
            {/* title part */}
            <h3 className='text-xl font-bold text-white'>Need Help? We Are Here To Help You</h3>
            {/* discount part */}
            <div className='bg-white relative px-3 pt-5 pb-9 rounded-lg'>
                <p className='text-[#FF3811] font-bold text-xl'>Car Doctor <span className='text-[#151515]'>Special</span></p>
                <p className='text-[#737373] font-bold text-base'>Save up to <span className='text-[#FF3811]'>60% off</span></p>
                <p className='absolute py-4 px-8 bg-[#FF3811] text-white text-lg font-semibold rounded top-3/4 left-1/2 -translate-x-1/2'>Get A Quote</p>
            </div>
        </div>
    );
};

export default Quote;