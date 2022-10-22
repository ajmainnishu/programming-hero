import React from 'react';
import { NavLink } from 'react-router-dom';





const Header = () => {
    const style = {
        color: 'purple',
        fontSize: '20px'
    }
    return (
        <div>
            <NavLink to="/home" activeClassName="selected">Home</NavLink>
            <NavLink to="/friends" activeStyle={{color: 'green'}}>Friends</NavLink>
            <NavLink to="/about" activeStyle={style}>About</NavLink>
            <NavLink to="/about/culture">Culture</NavLink>
        </div>
    );
};





export default Header;