import Banner from '../../../shared/Banner/Banner';
import './ShopBanner.css';

const ShopBanner = () => {
    return (
        <div className='shopBanner-bg py-40 px-10 md:pt-60 md:pb-28 md:px-20 lg:px-72'>
            <Banner heading={'OUR SHOP'} para={'Would you like to try a dish?'}></Banner>
        </div>
    );
};

export default ShopBanner;