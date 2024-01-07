const repeatString = function(str, nrOfTimes) {
    let repeatedStr = "";
    for (let i = 1; i <= nrOfTimes; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
