import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Customer from "../Customer/Customer";
import Features from "../Features/Features";
import Info from "../Info/Info";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Info></Info>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <Customer></Customer>
        </div>
    );
};

export default Home;