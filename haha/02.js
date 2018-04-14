// 0.2) Write a function that implements Pythagorean theorem.

function pythagorean (a, b, c) {
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    console.log ('triangle is right')
  } else {
    console.log ("triangle is'n right")
  }
}

pythagorean(3, 4, 5); // 9 + 16 = 25
pythagorean(4, 5, 6); //16 + 25 != 36
