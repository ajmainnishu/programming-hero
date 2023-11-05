import { Helmet } from "react-helmet-async";
import ShopBanner from "./ShopBanner/ShopBanner";
import ShopItems from "./ShopItems/ShopItems";

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <ShopBanner></ShopBanner>
            <ShopItems></ShopItems>
        </div>
    );
};

export default Shop;