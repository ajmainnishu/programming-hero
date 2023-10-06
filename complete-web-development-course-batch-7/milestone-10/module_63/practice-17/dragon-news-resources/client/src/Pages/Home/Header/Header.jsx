import React from 'react';
import Banner from './Banner/Banner';
import Navigation from './Nav/Navigation';

const Header = () => {
    return (
        <div>
            <Banner></Banner>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;