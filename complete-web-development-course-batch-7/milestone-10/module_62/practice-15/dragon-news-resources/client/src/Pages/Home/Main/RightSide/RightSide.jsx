import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import qzone1 from '../../../../assets/qZone1.png';
import qzone2 from '../../../../assets/qZone2.png';
import qzone3 from '../../../../assets/qZone3.png';
import './RightSide.css'


const RightSide = () => {
    return (
        <div>
            {/* login with part */}
            <div>
                <h4>Login With</h4>
                <Link className='text-decoration-none d-block border d-flex justify-content-center align-items-center py-1 rounded mb-2 mt-3'><FaGoogle />&nbsp; Login with Google</Link>
                <Link className='text-decoration-none d-block border d-flex justify-content-center align-items-center py-1 rounded text-black'><FaGithub />&nbsp; Login with Github</Link>
            </div>
            {/* find use on part */}
            <div className='mt-5 mb-4'>
                <h4 className='mb-3 text-muted'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='d-flex align-items-center'><FaFacebook />&nbsp;&nbsp;<span className='text-muted'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center'><FaTwitter />&nbsp;&nbsp;<span className='text-muted'>Twitter</span></ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center'><FaInstagram />&nbsp;&nbsp;<span className='text-muted'>Instagram</span></ListGroup.Item>
                </ListGroup>
            </div>
            {/* q-zone part */}
            <div className='bg-light px-2 py-3 rounded'>
                <h4 className='mb-3 text-muted'>Q-Zone</h4>
                <div>
                    <img className='w-100' src={qzone1} alt="" />
                    <img className='w-100' src={qzone2} alt="" />
                    <img className='w-100' src={qzone3} alt="" />
                </div>
            </div>
            {/* amazing newspaper part */}
            <div className='text-center amazing-news text-white py-5 px-5 rounded mb-3'>
                <h3>Create an Amazing Newspaper</h3>
                <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Link className='text-decoration-none text-white nav-btn-color d-inline-block'>Learn More</Link>
            </div>
        </div>
    );
};

export default RightSide;