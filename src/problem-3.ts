function countWordOccurrences(sentence: string, word: string): number {
  
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

 
  const words = lowerCaseSentence.split(" ");

  
  const count = words.filter(w => w === lowerCaseWord).length;

  return count;
}