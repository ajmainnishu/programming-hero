import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from "../../shared/Footer/Footer";
import useTitle from "../../hooks/useTitle";

const Main = () => {
    // dynamic title
    useTitle('Home')
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;