import icons1 from '../../../../assets/images/mainTop/1.png'
import icons2 from '../../../../assets/images/mainTop/2.png'
import icons3 from '../../../../assets/images/mainTop/3.png'
import icons4 from '../../../../assets/images/mainTop/4.png'

const MainTop = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10 w-4/6 mx-auto py-14'>
                <div>
                    <img src={icons1} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl mt-4 mb-2'>Awesome Aroma</h2>
                    <p className='leading-6'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src={icons2} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl mt-4 mb-2'>High Quality</h2>
                    <p className='leading-6'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src={icons3} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl mt-4 mb-2'>Pure Grades</h2>
                    <p className='leading-6'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src={icons4} alt="" />
                    <h2 className='text-[#331A15] font-rancho text-4xl mt-4 mb-2'>Proper Roasting</h2>
                    <p className='leading-6'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default MainTop;