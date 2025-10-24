const reverseString = function (s) {
  let len = s.length - 1;
  let res = "";
  if (s == "" || s == NaN || len <= 0) return "";
  for (let i = len; i >= 0; i--) {
    res += s[i];
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
