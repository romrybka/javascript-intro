// 2.2) Write a function that returns reversed string. For i.e. input "hello world" should return "dlrow olleh".

function reverseStr (srt) {
  return str.split("").reverse().join("");
}

var str = "hello world";
console.log(reverseStr(str));