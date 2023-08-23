import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border: '2px solid salmon', margin: '20px'}}>
            <h3>This is Dial component</h3>
            <p>Steps here is: {props.steps}</p>
        </div>
    );
};

export default Knob;