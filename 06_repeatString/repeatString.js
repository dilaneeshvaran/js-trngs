const repeatString = function (s, x) {
  if (x < 0) {
    return "ERROR";
  }
  let res = "";
  for (let i = 0; i < x; i++) {
    res += s;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
