import { useLoaderData } from "react-router-dom";
import Room from "../Room/Room";
import { Container } from "react-bootstrap";


const Rooms = () => {
    // hotel api fetch
    const roomsInfo = useLoaderData();
    return (
        <div className="text-white bg-dark text-center py-5">
            <Container>
                <p className="text-uppercase pt-5">Extraordinary Accommodations</p>
                <h2 className="display-5 fw-semibold pt-3">Choose Your Room Type</h2>
                <div className="row row-cols-3 py-5">
                    {
                        roomsInfo.map(roomInfo => <Room key={roomInfo.id} roomInfo={roomInfo}></Room>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Rooms;