import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSide from "../Components/RightSide/RightSide";
import LeftSide from "../Components/LeftSide/LeftSide";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Navigation from "../Components/Navigation/Navigation";
import Marquee from '../Components/Marque/Marque';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquee></Marquee>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col xs={3}><LeftSide></LeftSide></Col>
                    <Col xs={6}><Outlet></Outlet></Col>
                    <Col xs={3}><RightSide></RightSide></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;