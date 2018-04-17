// 3.4) Write a JavaScript program to find duplicate values in a JavaScript array.

var arr = [9, "nastya", 111, 2, 3, 4, 9, 4, 5, 7, "roman", 9, "petro", "nastya",];

function findDuplicate (arr) {
  var obj = {}

  arr.forEach(function(key) {
    if (key in obj) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  })

  for (var key in obj) {
    if (obj[key] >= 2) {
      console.log(key);
    }
  }

  console.log(obj);

}

findDuplicate(arr);
