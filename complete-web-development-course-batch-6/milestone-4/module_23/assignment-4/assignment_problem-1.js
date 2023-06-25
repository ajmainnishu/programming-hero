// radian to degree convert



function radianToDegree (radian) {
    if (typeof radian === 'number') {
        const pieValue = Math.PI;
        // degree formula
        const degree = 180 / pieValue;
        const degreeValue = parseFloat((radian * degree).toFixed(2));
        return degreeValue;
    }
    else {
        return 'Please provide a valid input';
    }
}