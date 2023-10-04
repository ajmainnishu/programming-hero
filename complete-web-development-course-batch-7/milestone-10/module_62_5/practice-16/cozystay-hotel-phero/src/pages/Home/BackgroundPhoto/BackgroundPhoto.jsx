import React from 'react';
import './BackgroundPhoto.css'
import logo from '../../../assets/logo.png'

const BackgroundPhoto = () => {
    return (
        <div className='bg-photo text-center text-white'>
            <img src={logo} alt="website logo" />
            <p className='pt-5 fw-bold text-uppercase'>Voice From Our Guests</p>
            <h2>“Everything here was great: the staff, the room layout, the property amenities with indoor pool, and the quality of the food. But the high point is the view from the mountains.”</h2>
            <p className='pt-4 text-uppercase'><small>Anna Williams – TripAdvisor</small></p>
        </div>
    );
};

export default BackgroundPhoto;