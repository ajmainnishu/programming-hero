import partsPhoto1 from '../../../assets/products/product-1.png';
import partsPhoto2 from '../../../assets/products/product-2.png';
import partsPhoto3 from '../../../assets/products/product-3.png';
import partsPhoto4 from '../../../assets/products/product-4.png';
import partsPhoto5 from '../../../assets/products/product-5.png';
import partsPhoto6 from '../../../assets/products/product-6.png';

const Products = () => {
    // box container info
    const boxInfo = <div className='text-center pt-5 pb-1.5 space-y-2.5'>
        <div className="rating space-x-1">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF912C]" />
        </div>
        <h3 className='text-[#444444] text-2xl font-bold'>Car Engine Plug</h3>
        <p className='text-[#FF3811] text-xl font-semibold'>$20.00</p>
    </div>
    return (
        <div className='lg:w-9/12 mx-auto px-5 lg:px-0 space-y-12'>
            {/* top details */}
            <div className='space-y-5 text-center'>
                <h5 className='text-[#FF3811] text-xl font-bold'>Popular Products</h5>
                <h2 className='text-[#151515] font-bold text-5xl'>Browse Our Products</h2>
                <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don&apos;t look even slightly believable. </p>
            </div>
            {/* items box container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* item 1 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg '>
                        <img src={partsPhoto1} alt="Parts Photo 1" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
                {/* item 2 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={partsPhoto2} alt="Parts Photo 2" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
                {/* item 3 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={partsPhoto3} alt="Parts Photo 3" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
                {/* item 4 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={partsPhoto4} alt="Parts Photo 4" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
                {/* item 5 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={partsPhoto5} alt="Parts Photo 5" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
                {/* item 6 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={partsPhoto6} alt="Parts Photo 6" className='h-52 py-8 mx-auto' />
                    </div>
                    {boxInfo}
                </div>
            </div>
            {/* button */}
            <div className='text-center'>
                <button className="btn btn-outline capitalize rounded-md text-[#FF3811] text-lg font-semibold px-5">More Products</button>
            </div>
        </div>
    );
};

export default Products;