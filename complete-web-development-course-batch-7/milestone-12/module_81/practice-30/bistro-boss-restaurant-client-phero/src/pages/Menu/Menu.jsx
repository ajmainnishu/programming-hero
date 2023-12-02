import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import FoodItems from "./FoodItems/FoodItems";

const Menu = () => {
    return (
        <div className="mb-8">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuBanner></MenuBanner>
            <FoodItems></FoodItems>
        </div>
    );
};

export default Menu;