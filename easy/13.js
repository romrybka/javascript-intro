// 1.3) Write a function that returns average number of values. Do not use Math. For i.e. [1,4,2] should return [2.33].

function averageVal (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++ ) {
    sum += arr[i];
  }
  return sum / arr.length;
}

var arr = [1,4,2];
console.log(averageVal(arr));