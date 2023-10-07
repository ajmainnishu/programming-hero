import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const SingleNews = () => {
    // single news data fetch from local server
    const news = useLoaderData();
    return (
        <div>
            <h5 className="mb-3">Dragon News</h5>
            <div>
                <Card>
                    <Card.Img variant="top" className="pt-3 pe-3 ps-3" src={news.image_url} />
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text className="text-muted mb-4">{news.details}</Card.Text>
                        <Link to={`/category/${news.category_id}`}><Button variant="danger" className="px-4"><FaArrowLeft className="me-2" />All news in this category</Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default SingleNews;