import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Sister</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
        </div>
    );
};

export default Sister;