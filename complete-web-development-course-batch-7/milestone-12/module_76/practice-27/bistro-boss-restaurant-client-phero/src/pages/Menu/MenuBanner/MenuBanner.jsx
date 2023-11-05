import Banner from '../../../shared/Banner/Banner';
import './MenuBanner.css';

const MenuBanner = () => {
    return (
        <div className='menuBanner-bg py-40 px-10 md:pt-60 md:pb-28 md:px-20 lg:px-72'>
            <Banner heading={'our menu'} para={'Would you like to try a dish?'}></Banner>
        </div>
    );
};

export default MenuBanner;