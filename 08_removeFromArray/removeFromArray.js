const removeFromArray = function (arr, ...del) {
  if (!Array.isArray(arr) || arr.length === 0 || del == null || del == NaN) {
    return arr;
  }

  return arr.filter((item) => !del.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
