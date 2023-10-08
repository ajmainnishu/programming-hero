import { Outlet } from "react-router-dom";
import Navigation from "../components/Home/Navigation/Navigation";
// import Places from "../components/Home/Places/Places";
import './Home.css'

const Home = () => {
    return (
        <div className="home-bg">
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;