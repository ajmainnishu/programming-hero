import itemPhoto1 from '../../../assets/images/items/home_icon_01.png'
import itemPhoto2 from '../../../assets/images/items/home_icon_02.png'
import itemPhoto3 from '../../../assets/images/items/home_icon_03.png'
import itemPhoto4 from '../../../assets/images/items/home_icon_04.png'
import itemPhoto5 from '../../../assets/images/items/home_icon_05.png'
import itemPhoto6 from '../../../assets/images/items/home_icon_06.png'

const Items = () => {
    return (
        <div>
            <div className='flex flex-wrap md:justify-between justify-center items-center w-10/12 mx-auto gap-6 md:gap-1'>
                <div className='flex flex-col items-center text-gray-500'>
                    <img className='' src={itemPhoto1} alt="" />
                    <p className='text-sm pt-2'>HOT DISHES</p>
                    <p className='text-2xl font-medium'>98</p>
                </div>
                <div className='flex flex-col items-center text-gray-500'>
                    <img src={itemPhoto2} alt="" />
                    <p className='text-sm pt-2'>DESERT</p>
                    <p className='text-2xl font-medium'>76</p>
                </div>
                <div className='flex flex-col items-center text-gray-500'>
                    <img src={itemPhoto3} alt="" />
                    <p className='text-sm pt-2'>VEGETARIAN</p>
                    <p className='text-2xl font-medium'>182</p>
                </div>
                <div className='flex flex-col items-center text-gray-500'>
                    <img src={itemPhoto4} alt="" />
                    <p className='text-sm pt-2'>FISH</p>
                    <p className='text-2xl font-medium'>63</p>
                </div>
                <div className='flex flex-col items-center text-gray-500'>
                    <img src={itemPhoto5} alt="" />
                    <p className='text-sm pt-2'>BREAKFAST</p>
                    <p className='text-2xl font-medium'>71</p>
                </div>
                <div className='flex flex-col items-center text-gray-500'>
                    <img src={itemPhoto6} alt="" />
                    <p className='text-sm pt-2'>DINNERS</p>
                    <p className='text-2xl font-medium'>41</p>
                </div>
            </div>
        </div>
    );
};

export default Items;