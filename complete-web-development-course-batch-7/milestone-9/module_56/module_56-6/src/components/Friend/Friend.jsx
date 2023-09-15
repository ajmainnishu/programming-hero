import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><small>Ring Nai</small></p>}
        </div>
    );
};

export default Friend;