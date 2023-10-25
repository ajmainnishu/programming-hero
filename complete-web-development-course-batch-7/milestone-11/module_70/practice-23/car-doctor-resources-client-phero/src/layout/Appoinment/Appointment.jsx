import { Outlet } from "react-router-dom";
import AppointmentNav from "../../shared/AppointmentNav/AppointmentNav";
import Footer from "../../shared/Footer/Footer";


const Appointment = () => {
    return (
        <div>
            <AppointmentNav></AppointmentNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;