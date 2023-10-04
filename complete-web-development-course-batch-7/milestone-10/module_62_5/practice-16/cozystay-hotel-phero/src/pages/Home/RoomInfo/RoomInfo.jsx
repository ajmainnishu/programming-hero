import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBed, FaDollarSign, FaPeopleArrows } from 'react-icons/fa';

const RoomInfo = () => {
    // room page button click id
    const id = useParams();
    // hotel api fetch
    const roomInfo = useLoaderData();
    // find specific hotel room
    const selectedItem = roomInfo.find(room => room.id === parseInt(id.id));
    return (
        <div className="bg-dark py-5">
            <Card style={{ width: '28rem', margin: '0 auto', backgroundColor: 'black', color: 'white' }}>
                <Card.Img variant="top" src={selectedItem.img} />
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-evenly align-items-center">
                        <p className="m-0 fs-5"><FaDollarSign /> {selectedItem.price}</p>
                        <p className="m-0 fs-5"><FaBed /> {selectedItem.bed}</p>
                        <p className="m-0 fs-5"><FaPeopleArrows /> {selectedItem.person}</p>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className="text-center">
                    <Card.Title className="fs-3">{selectedItem.title}</Card.Title>
                    <Card.Text>{selectedItem.body}</Card.Text>
                    <Button variant="secondary" className="fw-bold"><Link to='/book' className="text-decoration-none text-white px-5">Book</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RoomInfo;