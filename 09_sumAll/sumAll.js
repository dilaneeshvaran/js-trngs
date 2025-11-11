const sumAll = function (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    end < 0 ||
    start < 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  )
    return "ERROR";

  let res = 0;

  if (start < end) {
    for (let i = start; i <= end; i++) {
      res += i;
    }
  } else {
    for (let i = end; i <= start; i++) {
      res += i;
    }
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
