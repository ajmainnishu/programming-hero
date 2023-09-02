import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div>
            <h2>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                <span className='text-2xl'>/mon</span>
                </h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;