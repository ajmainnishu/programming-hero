import AppointmentNav from "../../shared/AppointmentNav/AppointmentNav";
import emptyPhoto from '../../assets/empty_page/empty.png'

const EmptyPage = () => {
    return (
        <div>
            {/* navigation */}
            <AppointmentNav></AppointmentNav>
            {/* image */}
            <div className="lg:w-9/12 mx-auto px-5 lg:px-0">
                <img src={emptyPhoto} alt="404 page" className="mx-auto mt-28 mb-72" />
            </div>
        </div>
    );
};

export default EmptyPage;