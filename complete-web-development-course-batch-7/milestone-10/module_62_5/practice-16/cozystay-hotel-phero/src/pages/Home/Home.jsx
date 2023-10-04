import BackgroundPhoto from "./BackgroundPhoto/BackgroundPhoto";
import LuxuryFurnished from "./LuxuryFurnished/LuxuryFurnished";
import Rooms from "./Rooms/Rooms";

const Home = () => {
    return (
        <div>
            <LuxuryFurnished></LuxuryFurnished>
            <BackgroundPhoto></BackgroundPhoto>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;