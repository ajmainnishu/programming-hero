import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>{angti}</p>
        </div>
    );
};

export default Special;