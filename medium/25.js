// 2.5) Write a JavaScript function to find the first not repeated character. For i.e. input 'abacddbec', should return 'e'.

function firstNonRepeatedChar (str) {
  for ( var i = 0; i < str.length; i++ ) {
    if ( str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return(str[i])
    }
  }
}

var str = "abacddbec";
console.log(firstNonRepeatedChar(str));