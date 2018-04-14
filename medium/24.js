// 2.4) Write an function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. For i.e. the quick brown fox and respond with The Quick Brown Fox'.

function firstLetterEachWord (str) {
  var arr = str.split(" ");
  for ( var i = 0; i < arr.length; i++ ) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  
  var str = arr.join(" ");

  console.log(str);
}

var str = "the quick brown fox";
firstLetterEachWord(str);