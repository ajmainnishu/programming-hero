// import { createContext } from "react";
// import Aunty from "../Aunty/Aunty";
// import Father from "../Father/Father";
// import Uncle from "../Uncle/Uncle";
// import './Grandpa.css'

// export const RingContext = createContext('gold');

// const Grandpa = () => {
//     return (
//         <div className="grandpa">
//             <h2>Grandpa</h2>
//            <RingContext.Provider value='golden Ring'>
//                 <section className="flex">
//                     <Father></Father>
//                     <Uncle></Uncle>
//                     <Aunty></Aunty>
//                 </section>
//            </RingContext.Provider>
//         </div>
//     );
// };

// export default Grandpa;




import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0);
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Has Monery: {money}</p>
           <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden Ring'>
                        <section className="flex">
                            <Father></Father>
                            <Uncle></Uncle>
                            <Aunty></Aunty>
                        </section>
                </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;