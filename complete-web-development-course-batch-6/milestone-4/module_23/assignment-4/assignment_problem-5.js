// two best friends similar check



function isBestFriend (objectOne, objectTwo) {
    if ((typeof objectOne === 'object') && (typeof objectTwo === 'object')) {
        if ((objectOne.name === objectTwo.friend) && (objectOne.friend === objectTwo.name)) {
            return true;
        }
        return false;
    }
    return 'Please provide a valid input';
}