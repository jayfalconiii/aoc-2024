const stringInput = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

const countOccuringSimilarity = (basis: number, numberArr: number[]) => {
  let count = 0;
  for (const num of numberArr) {
    num === basis && count++;
  }
  return count;
};

const arrayInput = stringInput
  .split("\n")
  .map((str) => str.split(" "))
  .flat()
  .filter(Boolean)
  .map((str) => Number.parseInt(str));

const leftInput = arrayInput.filter((_, i) => i % 2 === 0);
const rightInput = arrayInput.filter((_, i) => i % 2 !== 0);

let similarityScore = 0;
for (const selectedNumber of leftInput) {
  const count = countOccuringSimilarity(selectedNumber, rightInput);
  similarityScore += count * selectedNumber;
}

console.log("🚀 ~ similarityScore:", similarityScore);
