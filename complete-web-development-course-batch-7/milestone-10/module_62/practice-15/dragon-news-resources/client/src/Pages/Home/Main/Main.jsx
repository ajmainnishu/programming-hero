import LeftSide from './LeftSide/LeftSide';
import MiddleSide from './MiddleSide/MiddleSide';
import RightSide from './RightSide/RightSide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}><LeftSide></LeftSide></Col>
                    <Col lg={6}><MiddleSide></MiddleSide></Col>
                    <Col lg={3}><RightSide></RightSide></Col>
                </Row>
            </Container>
            
            
            
        </div>
    );
};

export default Main;