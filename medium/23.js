// 2.3) Write a JavaScript function that generates all combinations of a string. For i.e. input dog, should respond with d,do,dog,o,og,g.


/*
var arr = [];
for (var i = 0; i <= 100; i++){
    arr[i] = i;
}

arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
});

function binary_Search(arr, i) {
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('finish', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length  > 1) {
        return binary_Search(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length  > 1) {
        return binary_Search(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }

}
var result = binary_Search(arr, 27);
*/