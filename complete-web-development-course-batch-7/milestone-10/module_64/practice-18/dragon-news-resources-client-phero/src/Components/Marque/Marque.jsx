import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <Container>
            <div className='d-flex bg-light p-3 mt-3'>
                <button className='btn btn-danger rounded-0 px-3'>Latest</button>
                <Marquee speed={100} className='fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Marque;