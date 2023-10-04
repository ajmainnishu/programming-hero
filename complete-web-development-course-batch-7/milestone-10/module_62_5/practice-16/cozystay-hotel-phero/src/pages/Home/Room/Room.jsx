import React from 'react';
import './Room.css'
import { Link } from 'react-router-dom';

const Room = (props) => {
    const { id, img, title } = props.roomInfo;
    return (
        <div className='room'>
            <img className='w-100 room-img' src={img} alt="" />
            {/* room id passed roominfo pages by button */}
            <Link to={`/roominfo/${id}`} className='room-btn border-0 px-5 py-3 fs-5 text-decoration-none'>{title}</Link>
        </div>
    );
};

export default Room;