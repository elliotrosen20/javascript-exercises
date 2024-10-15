const sumAll = function(first, last) {
    
    for (const arg of arguments) {
        if ((typeof arg) !== "number" || (arg < 0) || (Math.floor(arg) !== arg)){
            return "ERROR";
        }
    }

    let sum = 0;
    if (first > last){
        let temp = first;
        first = last;
        last = temp;
    }
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
