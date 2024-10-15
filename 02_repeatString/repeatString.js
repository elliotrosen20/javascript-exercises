const repeatString = function(phrase, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let str = '';
    for (i = 0; i < n; i++){
        str += phrase;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
