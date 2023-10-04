import React from 'react';
import luxuryOne from '../../../assets/luxury-1.jpg'
import luxuryTwo from '../../../assets/luxury-2.jpg'
import './LuxuryFurnished.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

const LuxuryFurnished = () => {
    return (
        <div className='py-5 bg-dark text-white'>
            <Container className='py-5 mb-5'>
                <Row>
                    <Col xs={6}>
                        <div className='luxury-img'>
                            <img className='w-75 rounded-4' src={luxuryOne} alt="" />
                            <img className='b w-50 rounded-4' src={luxuryTwo} alt="" />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className='pt-4 ps-3'>
                            <p className='text-uppercase'>Stay in the heart of New York</p>
                            <h2 className='text-uppercase display-4 fw-semibold'>Luxury furnished serviced apartments in Times Square </h2>
                            <p className='pt-4 text-'>Located in Times Square, CozyStay apartment hotel provide a peaceful, private retreat in the heart of one of the world’s most iconic cities. Experience a sophisticated blend of professional services and home comforts. We proudly offers a full range of complimentary amenities and services that provide you with everything you need for an inspiring stay.</p>
                            <Button variant="outline-light py-3 px-5 mt-3">Start Exploring</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LuxuryFurnished;