const removeFromArray = function (arr, del) {
  let size = arr.length;
  let idxDel;
  for (let i = 0; i < size; i++) {
    if (arr[i] == del) {
      idxDel = i;
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;
