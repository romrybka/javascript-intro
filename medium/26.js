// 2.6) Write a JavaScript program to calculate the factorial of a number. Sample f(5) should return 120.

function factorial (num) {
  if (num == 1) {
    return num;
  };

  return num * factorial( num - 1 );
}

console.log(factorial(5));

