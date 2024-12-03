const strInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const parseMultipliers = (str: string) => {
  let totalProductPart1 = 0;
  str.replaceAll(/mul\((\d+),(\d+)\)/g, (_, grp1, grp2) => {
    const firstNum = Number.parseInt(grp1);
    const secondNum = Number.parseInt(grp2);

    totalProductPart1 += firstNum * secondNum;
    return "";
  });
  return totalProductPart1;
};

const result1 = parseMultipliers(strInput);
console.log(result1);

const matches2 = strInput
  .split(/(?=don't\(\))|(?=do\(\))/)
  .filter((str) => !str.includes("don't"))
  .join();
const result2 = parseMultipliers(matches2);
console.log(result2);
