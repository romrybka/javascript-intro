// 2.1) Write a function that reverse a number. For i.e. input 32243 should returns 34223.

function reverseNum (num) {
  // short path:
  var str = num + "";
  return +str.split("").reverse().join("");

  // long path:
  // var str = num + "";
  // var arr = str.split("");
  // var reverseArr = arr.reverse();
  // str = reverseArr.join("");
  // return +str;
}

var num = 12345;
reverseNum(num);

console.log(typeof reverseNum(num));
console.log(reverseNum(num));