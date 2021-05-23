const arr = [1, 1, 2, 3, 5, 6, 6, 6, 11, 12, 13, 13, 13];

const withUniqueValue = (arr) => {
  const result = [];
  const check = [];
  arr.forEach((val, idx, arr) => {
    if (!arr.slice(idx + 1).include(val) && !check.include(val)) {
      result.push(val);
    } else {
      check.push(val);
    }
  });
  return result;
};

console.log(withUniqueValue(arr));
