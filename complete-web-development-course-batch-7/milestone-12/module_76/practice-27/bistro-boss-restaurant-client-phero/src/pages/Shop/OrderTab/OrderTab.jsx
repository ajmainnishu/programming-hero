const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items.map(item => <div key={item._id} className="card bg-[#F3F3F3] rounded-none">
                    {/* image */}
                    <figure><img src={item?.image} alt="food" className="w-full" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-[#151515] text-2xl font-semibold">{item?.name}</h2>
                        <p className="text-[#737373] text-base font-normal leading-6 text-justify">{item?.recipe}</p>
                        {/* button */}
                        <div className="card-actions mt-6 justify-center">
                            <button className="btn bg-[#E8E8E8] text-[#BB8506] text-xl font-medium border-b-2 border-b-[#BB8506] px-7 hover:bg-[#111827] hover:border-b-[#BB8506]">Add to Cart</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default OrderTab;