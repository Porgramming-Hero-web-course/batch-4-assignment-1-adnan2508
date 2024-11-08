function removeDuplicates(numbers: number[]): number[] {

  const uniqueNumbers = new Set<number>();


  return numbers.filter((num) => {
      if (!uniqueNumbers.has(num)) {
          uniqueNumbers.add(num);
          return true;
      }
      return false;
  });
}