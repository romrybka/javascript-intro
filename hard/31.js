// 3.1) Write a recursion function that logs numbers from N to 0. Read about recursion function in javascript before implementing this. Do not use "for", function should call itself.

function logNumbers(n) {
  console.log(n)

  if (n === 0) { return; }

  return logNumbers(n - 1);
}

logNumbers(10);