import Banner from "../Components/Banner/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSide from "../Components/RightSide/RightSide";
import { Outlet } from "react-router-dom";

const News = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Row className="mt-5">
                    <Col xs={9}><Outlet></Outlet></Col>
                    <Col xs={3}><RightSide></RightSide></Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;