import FollowUs from "./FollowUs/FollowUs";
import MainTop from "./MainTop/MainTop";
import Products from "./Products/Products";


const Main = () => {
    return (
        <div>
            <MainTop></MainTop>
            <Products></Products>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Main;