import logo from '../../assets/images/logo/logo.png'
import Image from 'react-bootstrap/Image';
import moment from 'moment';

import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <div className='text-center mt-5 mb-4'>
                <Image src={logo} />
            </div>
            <p className='text-center text-muted'>Journalism Without Fear or Favour</p>
            <div className='d-flex justify-content-center fs-5 text-muted'>
                <p className='fw-semibold pe-1'>{moment().format("dddd,")}</p>
                <p>{moment().format("MMMM D, YYYY")}</p>
            </div>
        </Container>
    );
};

export default Banner;