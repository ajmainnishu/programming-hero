import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='md:px-10 lg:px-32 py-32 header-banner md:text-left text-center text-white'>
            <h4 className='text-4xl'>A New Approach to</h4>
            <h1 className='text-8xl font-bold py-7'>Study Of Kids</h1>
            <p className='text-2xl'>We provide best solutions for a Clean Environment If you need any <br /> help in cleaning or maintenance.</p>
            <div className='mt-14'>
                <button className='bg-gradient-to-r from-orange-700 to-orange-500 py-5 px-6 text-md font-semibold text-white me-6 hover:bg-orange-400 drop-shadow-lg hover:bg-gradient-to-l'>ADMISSION NOW</button>
                <button className='bg-gradient-to-r from-cyan-500 to-cyan-700 py-5 px-6 text-md font-semibold text-white hover:bg-cyan-400 drop-shadow-lg hover:bg-gradient-to-l'>OUR CLASSES</button>
            </div>
        </div>
    );
};

export default Header;