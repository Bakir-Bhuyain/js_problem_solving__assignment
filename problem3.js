function deleteInvalids(arr) {
  if (!Array.isArray(arr)) {
    return "Error Message Here";
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      newArr.push(arr[i]);
      // newArr= arr.push();
    }
  }
  return newArr;
}
const array = deleteInvalids([NaN, 1, 12, 0, -1, undefined]);
console.log(array);
