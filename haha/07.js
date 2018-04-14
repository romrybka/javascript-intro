// 0.7) Write a JavaScript function to convert radians to degrees. Sample console.log(radians_to_degrees(0.7853981633974483)); should returns 45.

function radiansToDegrees (val) {
  var res = val * ( 180 / 3.1459 );
  console.log(res);
}

radiansToDegrees(0.7853981633974483);