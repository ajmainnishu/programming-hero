import { Link } from "react-router-dom";
import MenuItems from "../../../shared/MenuItems/MenuItems";
import SectionCover from "../../../shared/SectionCover/SectionCover";

const FoodItem = ({ items, img, title }) => {
    return (
        <div className="space-y-28">
            {/* section cover */}
            {title && <SectionCover img={img} title={title}></SectionCover>}
            <div className="space-y-14">
                {/* mapping */}
                <div className="w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        items?.map(item => <MenuItems key={item._id} items={item}></MenuItems>)
                    }
                </div>
                {/* button */}
                <div className="text-center">
                    <Link to={`/shop/${title}`} className="btn bg-transparent border-0 text-[#1F2937] text-xl px-7 font-semibold border-b-2 border-[#1F2937]">order your favourite food</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;