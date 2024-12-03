const stringInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

const isUnsafe = (
  currItem: number,
  nextItem: number,
  prevThreshold: number | undefined
) => {
  const currentThreshold = nextItem - currItem;
  const isStagnant = currItem === nextItem;
  const isWithinThreshold =
    currentThreshold <= 0 ? currentThreshold >= -3 : currentThreshold <= 3;
  const isUnstable = !!prevThreshold && currentThreshold * prevThreshold < 0;

  return isStagnant || !isWithinThreshold || isUnstable;
};

const isSafe = (selectedRow: number[]): boolean => {
  for (let i = 0, prevThreshold; i < selectedRow.length - 1; i++) {
    const currItem = selectedRow[i];
    const nextItem = selectedRow[i + 1];

    if (isUnsafe(currItem, nextItem, prevThreshold)) return false;

    prevThreshold = nextItem - currItem;
  }
  return true;
};

const isSafeWithTolerate = (selectedRow: number[]): boolean => {
  for (let i = 0, prevThreshold; i < selectedRow.length - 1; i++) {
    const currItem = selectedRow[i];
    const nextItem = selectedRow[i + 1];

    if (isUnsafe(currItem, nextItem, prevThreshold)) {
      for (let j = 0; j < selectedRow.length; j++) {
        const clonedArr = structuredClone(selectedRow);
        clonedArr.splice(j, 1);

        if (isSafe(clonedArr)) return true;
      }
      return false;
    }

    prevThreshold = nextItem - currItem;
  }
  return true;
};

const inputArr = stringInput
  .split("\n")
  .map((str) =>
    str
      .split(" ")
      .filter(Boolean)
      .map((str) => Number.parseInt(str))
  )
  .filter((arr) => arr.length);

let safeCount = 0;
for (const selectedRow of inputArr) {
  if (isSafeWithTolerate(selectedRow)) safeCount++;
}

console.log(safeCount);
