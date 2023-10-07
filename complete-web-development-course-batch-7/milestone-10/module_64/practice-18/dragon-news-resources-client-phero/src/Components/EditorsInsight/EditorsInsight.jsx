import sportsNewsPhoto1 from '../../assets/images/editor-insights/editorInsights-1.png';
import sportsNewsPhoto2 from '../../assets/images/editor-insights/editorInsights-2.png';
import sportsNewsPhoto3 from '../../assets/images/editor-insights/editorInsights-3.png';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { FaRegCalendar } from 'react-icons/fa';
import { Col } from 'react-bootstrap';

const EditorsInsight = () => {
    return (
        <div className='pt-4'>
            <h5>Editors Insight</h5>
            <div className='row pt-2'>
                <Col xs={4}>
                    <Image className='w-100' src={sportsNewsPhoto1} />
                    <p className='fw-semibold fs-5 mt-3 mb-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div className='mb-3'>
                        <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                    </div>
                </Col>
                <Col xs={4}>
                    <Image className='w-100' src={sportsNewsPhoto2} />
                    <p className='fw-semibold fs-5 mt-3 mb-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div>
                        <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                    </div>
                </Col>
                <Col xs={4}>
                    <Image className='w-100' src={sportsNewsPhoto3} />
                    <p className='fw-semibold fs-5 mt-3 mb-2'>21 The Most Stylish Wedding Guest Dresses For Spring</p>
                    <div>
                        <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                    </div>
                </Col>
            </div>
        </div>
    );
};

export default EditorsInsight;