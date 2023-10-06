import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './MiddleSideContent.css';
import moment from 'moment';
import { FaRegBookmark, FaShareAlt, FaEye } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';

const MiddleSideContent = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news;
    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex align-items-center'>
                <div className='d-flex flex-grow-1 align-items-center'>
                    <div>
                        <Image className='author-img' src={author?.img} roundedCircle />
                    </div>
                    <div className='ps-3'>
                        <p className='mb-0 fw-semibold text-muted'>{author?.name}</p>
                        <p className='mb-0 text-muted '><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2 text-muted' />
                    <FaShareAlt className='text-muted' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='pb-2 text-muted fw-bold'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='text-muted pt-4'>
                    {details.length < 275 ? <>{details}</> : <>{details.slice(0, 275)}...<br /><Link to={`/news/${_id}`} className='text-decoration-none fw-semibold link-color'>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted bg-white d-flex align-items-center">


                <div className='d-flex align-items-center flex-grow-1 pb-2'>
                    <div>
                        <StarRatings
                            rating={rating.number}
                            starRatedColor="rgba(255, 140, 71, 1)"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="1px"
                        />
                    </div>
                    <div>
                        <p className='mb-0 pt-1 ps-2'>{rating.number}</p>
                    </div>
                </div>
                <div>
                    <FaEye /><p className='d-inline ps-2'>{total_view}</p>
                </div>




                <div>

                </div>
                <div>

                </div>
            </Card.Footer>
        </Card>

    );
};

export default MiddleSideContent;