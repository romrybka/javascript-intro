// 0.6) Write a JavaScript program to construct the following pattern, using a nested for loop *{new line}* *{new line}* * *{new line}* * * *{new line}* * * * *.

var num = 5;

for ( var line = 0; line < num; line++ ) {
  var stars = '*';

  for ( var star = 0; star < line; star++ ) {
    stars += '*';
  }

  console.log(stars);
}