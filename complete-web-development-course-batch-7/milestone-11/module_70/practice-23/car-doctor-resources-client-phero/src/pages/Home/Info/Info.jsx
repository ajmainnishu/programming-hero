import timeLogo from '../../../assets/info/time.svg';
import messageLogo from '../../../assets/info/message.svg';
import locationLogo from '../../../assets/info/location.svg';

const Info = () => {
    return (
        <div className='lg:w-9/12 mx-auto bg-[#151515] rounded-xl px-16 py-24'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-14'>
                {/* item 1 */}
                <div className='flex items-center gap-5'>
                    <div>
                        <img src={timeLogo} alt="Time Logo" />
                    </div>
                    <div className='text-white'>
                        <p className='font-medium text-base'>We are open monday-friday</p>
                        <p className='font-bold text-2xl'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                {/* item 2 */}
                <div className='flex items-center gap-5'>
                    <div>
                        <img src={messageLogo} alt="Message Logo" />
                    </div>
                    <div className='text-white'>
                        <p className='font-medium text-base'>Have a question?</p>
                        <p className='font-bold text-2xl'>+2546 251 2658</p>
                    </div>
                </div>
                {/* item 3 */}
                <div className='flex items-center gap-5'>
                    <div>
                        <img src={locationLogo} alt="Location Logo" />
                    </div>
                    <div className='text-white'>
                        <p className='font-medium text-base'>Need a repair? our address</p>
                        <p className='font-bold text-2xl'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;