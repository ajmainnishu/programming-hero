import Banner from '../../../shared/Banner/Banner';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <div className='contactBanner-bg py-40 px-10 md:pt-60 md:pb-28 md:px-20 lg:px-72'>
            <Banner heading={'CONTACT US'} para={'Would you like to try a dish?'}></Banner>
        </div>
    );
};

export default ContactBanner;