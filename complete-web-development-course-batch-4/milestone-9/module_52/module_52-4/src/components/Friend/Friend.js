import React from 'react';





const Friend = (props) => {
    const {name, phone, website, address} = props.friend
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
        </div>
    );
};





export default Friend;