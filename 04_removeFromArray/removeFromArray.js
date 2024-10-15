const removeFromArray = function(arr, ...values) {
    // for (let i = 0; i < arr.length)
    //     for (const num of numbers) {
    for (const value of values) {
        arr = arr.filter((i) => i !== value);
    }
    return arr;
            
    //     }
    
};


// Do not edit below this line
module.exports = removeFromArray;
