import sportsNewsPhoto1 from '../../assets/images/editor-insights/editorInsights-1.png';
import sportsNewsPhoto2 from '../../assets/images/editor-insights/editorInsights-2.png';
import sportsNewsPhoto3 from '../../assets/images/editor-insights/editorInsights-3.png';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import { FaRegCalendar } from 'react-icons/fa';

const SportsNews = () => {
    return (
        <div>
            <div>
                <Image src={sportsNewsPhoto1}  />
                <p className='fw-semibold fs-5 my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div className='mb-3'>
                    <span className='fw-semibold pe-3 text-muted'><small>Sports</small></span>
                    <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                </div>
            </div>
            <div className='mb-3'>
                <Image src={sportsNewsPhoto2}  />
                <p className='fw-semibold fs-5 my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div>
                    <span className='fw-semibold pe-3 text-muted'><small>Sports</small></span>
                    <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                </div>
            </div>
            <div className='mb-3'>
                <Image src={sportsNewsPhoto3}  />
                <p className='fw-semibold fs-5 my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div>
                    <span className='fw-semibold pe-3 text-muted'><small>Sports</small></span>
                    <span className='text-muted'><small><FaRegCalendar className='me-2' />{moment().format("ddd D, YYYY")}</small></span>
                </div>
            </div>
        </div>
    );
};

export default SportsNews;