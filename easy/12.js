// 1.2) Write a function that returns min and max numbers. For i.e. input [1,92,-5,25] should return {max:92, min:-5}.

function minMaxNumber(arr) {
  var resArr = {};
  resArr.max = Math.max(...arr);
  resArr.min = Math.min(...arr);
  return resArr;
}

var arr = [1,92,-5,25]
console.log(minMaxNumber(arr));