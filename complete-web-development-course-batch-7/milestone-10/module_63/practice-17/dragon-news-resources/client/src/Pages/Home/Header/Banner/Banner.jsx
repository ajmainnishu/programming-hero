import logo from '../../../../assets/logo.png';
import moment from 'moment';
import './Banner.css';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className='text-center pt-5'>
                <img src={logo} alt="" />
                <p className='pt-3 mb-2 text-muted'>Journalism Without Fear or Favour</p>
                {/* time date */}
                <p className='fw-semibold text-muted'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <Container>
                <div className='p-3 bg-light rounded'>
                    <div className='d-flex align-items-center mb-0'><button className='nav-btn-color'>Latest</button>
                    <Marquee className='fw-semibold' speed={150}>Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Marquee>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;