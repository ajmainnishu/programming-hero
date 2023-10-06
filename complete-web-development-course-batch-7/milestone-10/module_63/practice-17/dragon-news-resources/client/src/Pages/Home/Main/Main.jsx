import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}><LeftSide></LeftSide></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><RightSide></RightSide></Col>
                </Row>
            </Container>
            
            
            
        </div>
    );
};

export default Main;