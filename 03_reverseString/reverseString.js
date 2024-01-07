const reverseString = function(str) {
    const orgStr = str.split("");

    let reversedStr = "";
    while(orgStr.length > 0) {    
        reversedStr += orgStr.pop();
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
