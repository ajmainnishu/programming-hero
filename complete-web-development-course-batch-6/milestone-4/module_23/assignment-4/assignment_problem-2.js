// javascript file extention check



function isJavaScript (checkFile) {
    // string input check
    if (typeof checkFile === 'string') {
        // js extention check
        if (checkFile.endsWith('.js') === true) {
            return true;
        }
        return false;
    }
    else {
        return 'Please provide a valid input';
    }
}