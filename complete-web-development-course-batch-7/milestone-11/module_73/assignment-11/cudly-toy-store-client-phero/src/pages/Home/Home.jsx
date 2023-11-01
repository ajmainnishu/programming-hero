import useTitle from "../../hooks/usetitle";
import Banner from "./Banner/Banner";
import BuyKids from "./BuyKids/BuyKids";
import Categories from "./Categories/Categories";
import Gallery from "./Gallery/Gallery";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
    // dynamic title
    useTitle('');
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <div className="w-11/12 md:w-10/12 mx-auto space-y-20 pb-20">
                <Gallery></Gallery>
                <Categories></Categories>
                <BuyKids></BuyKids>
                <Sponsor></Sponsor>
            </div>
        </div>
    );
};

export default Home;