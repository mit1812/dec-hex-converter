const hexTable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

export const hexCalculator = (num) => {
  if (num < 0 || !num) return null;
  let remainders = [];
  while (num > 0) {
    remainders.push(num % 16);
    num = Math.floor(num / 16);
  }
  const hexReversedResult = remainders.map((val) => hexTable[val]);
  return hexReversedResult.reverse().join('');
};
