const stringInput = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

const arrayInput = stringInput
  .split("\n")
  .map((str) => str.split(" "))
  .flat()
  .filter(Boolean)
  .map((str) => Number.parseInt(str));

const leftInput = arrayInput.filter((_, i) => i % 2 === 0).sort();
const rightInput = arrayInput.filter((_, i) => i % 2 !== 0).sort();

const totalDistance = leftInput.reduce((p, n, i) => {
  const rightValue = rightInput[i];
  const leftValue = n;
  if (leftValue > rightValue) {
    p += n - rightValue;
  } else {
    p += rightValue - n;
  }

  return p;
}, 0);

console.log(totalDistance);
