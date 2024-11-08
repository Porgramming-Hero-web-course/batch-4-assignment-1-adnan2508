"use strict";
function countWordOccurrences(sentence, word) {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.split(" ");
    const count = words.filter(w => w === lowerCaseWord).length;
    return count;
}
