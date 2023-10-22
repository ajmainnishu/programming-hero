import logo from '../../../assets/images/logo/logo.png'

const Espresso = () => {
    return (
        <div>
            <img className='w-20 h-24' src={logo} alt="logo" />
            <h2 className='text-[#331A15] font-rancho text-5xl mt-6 drop-shadow-lg'>Espresso Emporium</h2>
            <p className='text-[#1B1A1A] leading-9 my-8'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
        </div>
    );
};

export default Espresso;