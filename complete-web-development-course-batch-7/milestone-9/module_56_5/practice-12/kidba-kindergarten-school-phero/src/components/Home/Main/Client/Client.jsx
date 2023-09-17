import './Client.css'
import testimonial from '../../../../assets/home/main/client/testimonial-img.png'
import quote from '../../../../assets/home/main/client/quote.png'

const Client = () => {
    return (
        <div className='flex md:flex-row flex-col lg:px-32 px-10 items-center client py-28 text-white'>
            <img className='md:me-20' src={testimonial} alt="testimonial" />
            <div className='mt-10 md:mt-0'>
                <img src={quote} alt="quote" />
                <h3 className='text-4xl font-bold py-5'>Client Says?</h3>
                <p className='text-lg'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quo impedit nulla. Harum eius saepe suscipit ut numquam optio magni?"</p>
                <p className='inline-block pt-4 border-t-4 mt-7'>CAROLETEE</p>
            </div>
        </div>
    );
};

export default Client;