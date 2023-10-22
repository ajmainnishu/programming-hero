import logo from '../assets/images/logo/logo.png';

const Logo = () => {
    return (
        <div className="bg-[url('./src/assets/images/logo/bg-logo.jpg')] py-4 bg-center bg-cover flex md:flex-row flex-col items-center justify-center gap-x-4">
            <img className='w-20 h-24' src={logo} alt="website logo" />
            <h1 className="text-6xl font-rancho text-white">Espresso Emporium</h1>
        </div>
    );
};

export default Logo;