import StarRatings from 'react-star-ratings';

const Hotel = ({ hotel }) => {
    const { name, bedroom, rating_number, bed, price, guest, rating_count, total_price, condition, cancel, img, bath } = hotel;
    return (
        <div>
            <div className="grid grid-cols-12 mb-11 gap-x-8">
                {/* left side */}
                <div className="col-span-4">
                    <img className="rounded-md w-full" src={img} alt="" />
                </div>
                {/* right side */}
                <div className="col-span-8 flex flex-col justify-between">
                    <h4 className="text-lg font-medium">{name}</h4>
                    <div className="flex gap-x-4 text-gray-400 font-normal">
                        <span>{guest}</span>
                        <span>{bedroom}</span>
                        <span>{bed}</span>
                        <span>{bath}</span>
                    </div>
                    <p className="font-normal text-gray-400">{condition}</p>
                    <p className="font-normal text-gray-400">{cancel}</p>
                    <div className="flex gap-x-6 items-center">
                        <div className="text-sm font-medium">
                            <StarRatings
                                rating={parseInt(rating_number)}
                                starRatedColor="rgba(249, 165, 26, 1)"
                                numberOfStars={1}
                                starDimension="1.25em"
                            />
                            {rating_number} <span>({rating_count})</span></div>
                        <p className="text-lg font-medium">${price}/<span className="font-thin">night</span></p>
                        <span className="text-gray-200">${total_price}total</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;