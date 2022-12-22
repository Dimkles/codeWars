"use strict";
exports.__esModule = true;
exports.fakeBin = void 0;
function positiveSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= 0)
            continue;
        sum += arr[i];
    }
    return sum;
}
var fakeBin = function (x) {
    // your code here
    var arr = x.split('');
    var result = '';
    arr.forEach(function (value) { return value < '5' ? result += '0' : result += '1'; });
    return result;
};
exports.fakeBin = fakeBin;
console.log((0, exports.fakeBin)('45385593107843568'));
