import React from 'react';
import { add } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;