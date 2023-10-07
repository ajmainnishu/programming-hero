import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';
import Image from 'react-bootstrap/Image';
import moment from 'moment';

const CategoryNews = () => {
    // categories news data fetch from local server
    const categoryNews = useLoaderData();
    return (
        <div>
            <h5 className="mb-3">Dragon News</h5>
            {
                categoryNews.map(cn => <div key={cn._id}>
                    <Card className="mb-4">
                        <Card.Header className='d-flex align-items-center justify-content-between py-3'>
                            <div className='d-flex align-items-center gap-2'>
                                <div>
                                    <Image style={{ height: '40px' }} src={cn.author.img} roundedCircle />
                                </div>
                                <div>
                                    <p className='mb-0 fw-semibold text-muted'>{cn.author.name}</p>
                                    <p className='mb-0 text-muted'><small>{moment(cn.author.published_date).format('YYYY-MM-DD')}</small></p>
                                </div>
                            </div>
                            <div className='text-muted'>
                                <FaRegBookmark className='me-2' />
                                <FaShareAlt />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{cn.title}</Card.Title>
                            <Card.Img variant="top" src={cn.image_url} />
                            <Card.Text className='mb-1 mt-4'>
                                {cn.details.length < 270 ? <>{cn.details}</> : <>{cn.details.slice(0, 270)}...<Link to={`/news/${cn._id}`} className='text-decoration-none fw-semibold d-block' style={{ color: '#FF8C47' }}>Read More</Link></>}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between text-muted bg-white py-3">
                            <div className='d-flex align-items-center'>
                                <div className='mb-2 me-2'><StarRatings
                                    rating={cn.rating.number}
                                    starRatedColor="rgba(255, 140, 71, 1)"
                                    starDimension="20px"
                                    numberOfStars={5}
                                    starSpacing="2px"

                                /></div>
                                <p className='mb-0'>{cn.rating.number}</p>
                            </div>
                            <div>
                                <FaEye className='me-2' />
                                {cn.total_view}
                            </div>
                        </Card.Footer>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default CategoryNews;