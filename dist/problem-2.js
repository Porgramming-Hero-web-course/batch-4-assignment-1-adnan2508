"use strict";
function removeDuplicates(numbers) {
    const uniqueNumbers = new Set();
    return numbers.filter((num) => {
        if (!uniqueNumbers.has(num)) {
            uniqueNumbers.add(num);
            return true;
        }
        return false;
    });
}
