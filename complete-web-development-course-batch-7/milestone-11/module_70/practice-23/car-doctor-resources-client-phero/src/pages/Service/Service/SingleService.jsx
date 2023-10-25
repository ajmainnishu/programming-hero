const SingleService = ({ services }) => {
    const { img, title, description, facility } = services;
    
    return (
        <div className="space-y-12">
            <img src={img} alt="parts item" className="w-full rounded-lg" />
            <div className="space-y-8">
                {/* top details */}
                <h3 className="text-[#151515] font-bold text-4xl capitalize">{title}</h3>
                <p className="text-[#737373] font-normal capitalize">{description.slice(0, 300)}</p>
                {/* box container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        facility.map((singleFac, index) => <div key={index} className="border-t-2 border-[#FF3811] p-10 bg-[#F3F3F3] rounded-lg">
                            <h5 className="text-[#444444] text-xl font-bold">{singleFac?.name}</h5>
                            <p className="text-[#737373] font-normal capitalize">{singleFac?.details}</p>
                        </div>)
                    }
                </div>
                {/* bottom para */}
                <p className="text-[#737373] font-normal capitalize">{description?.slice(300)}</p>
            </div>
        </div>
    );
};

export default SingleService;