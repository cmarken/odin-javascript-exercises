const repeatString = function(str, nrOfTimes) {
    if (nrOfTimes < 0) return "ERROR";
    
    let repeatedStr = "";
    for (let i = 1; i <= nrOfTimes; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
