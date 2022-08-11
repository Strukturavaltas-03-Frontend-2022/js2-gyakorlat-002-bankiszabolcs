const summarize = (...numbers) => {
  const newArr = numbers
    .filter((item) => Number.isInteger(item))
    .map((num) => (Number.isSafeInteger(num) ? num : BigInt(num)));
  if (newArr.some((item) => typeof item === "bigint"))
    return newArr.reduce((acc, item) => BigInt(acc) + BigInt(item));
  else return newArr.reduce((acc, item) => acc + item);
};

/* console.log(summarize(10, 10e10, 10e100)); */
export default summarize;
//let nums = numbers.filter((item) => typeof item === "number");
