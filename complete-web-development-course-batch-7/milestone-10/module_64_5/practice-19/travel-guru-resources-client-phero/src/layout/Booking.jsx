import { Outlet } from "react-router-dom";
import Nav from "../components/Booking/Nav/Nav";


const Booking = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Booking;