import { Outlet } from "react-router-dom";
import Navigation from "../components/Home/Navigation/Navigation";

const Main = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Main;