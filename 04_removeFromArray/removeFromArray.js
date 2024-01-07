const removeFromArray = function(array, ...toBeRemovedList) {
    for (const toBeFilteredOut of toBeRemovedList) {
        array = array.filter(item => item != toBeFilteredOut);
    }
/*    const newArray = array.filter(item => {
        for (const toBeFilteredOut of toBeRemovedList) {
            if (item != toBeFilteredOut)
                return true;
        }
        return false;
    });*/

    return array;
};  

// Do not edit below this line
module.exports = removeFromArray;
