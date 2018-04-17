// 2.8) Write a JavaScript function to calculate the percentage (%) of a number. Sample console.log(percentage(1000, 47.12)); should returns 471.2.

function percentage(perc, numb) {
  return numb * (perc/100);
}

console.log(percentage(1000, 47.12));