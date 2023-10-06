import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const {title, image_url, details, category_id} = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/categories/${category_id}`}><Button variant="danger"><FaArrowLeft style={{fontSize: '12px'}} /> All news in this category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;