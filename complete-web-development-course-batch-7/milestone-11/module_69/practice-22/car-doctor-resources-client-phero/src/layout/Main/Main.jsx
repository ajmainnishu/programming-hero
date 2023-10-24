import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";
import Footer from "../../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;