// 1.1) Write a function that returns only pair numbers. For i.e. input [1,5,23,4,2,5,6] should return [4,2,6].

function onlyPairNumbers (arr) {
  var pairNumArr = [];
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] % 2 === 0) {
      pairNumArr.push(arr[i]);
    }
  }
  return pairNumArr; 
}

var arr = [1,5,23,4,2,5,6];
var pairNum = onlyPairNumbers(arr);
console.log(pairNum);