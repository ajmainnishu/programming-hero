// import React from 'react';
// import Cosmetic from '../Cosmetic/Cosmetic';

// const Cosmetics = () => {
//     const cosmetics = [
//         {
//           "id": "64ccad42787f89427e811b7f",
//           "price": 179,
//           "name": "Fleming Frank"
//         },
//         {
//           "id": "64ccad4275b1286b500b7f45",
//           "price": 194,
//           "name": "Lana Adams"
//         },
//         {
//           "id": "64ccad425707e056e6899603",
//           "price": 58,
//           "name": "Alvarez Sloan"
//         },
//         {
//           "id": "64ccad42be39be5578584ce7",
//           "price": 368,
//           "name": "Bradley Martin"
//         },
//         {
//           "id": "64ccad4227aa869229a9e6dc",
//           "price": 391,
//           "name": "Gayle Sharp"
//         }
//     ]
//     return (
//         <div>
//             <h1>Welcome to my cosmetics store</h1>
//             {
//                 cosmetics.map(cosmetic => <Cosmetic 
//                     key={cosmetic.id} 
//                     cosmetic={cosmetic}
//                     ></Cosmetic>)
//             }
//         </div>
//     );
// };

// export default Cosmetics;




import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([]);
   useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
   })
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id} 
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;