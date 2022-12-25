"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = exports.smash = exports.points = exports.longest = exports.number = exports.rps = exports.findNeedle = exports.Kata = exports.simpleMultiplication = exports.abbrevName = exports.makeNegative = exports.areYouPlayingBanjo = exports.boolToWord = exports.numberToString = exports.countSheep = exports.zeroFuel = exports.fakeBin = void 0;
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0)
            continue;
        sum += arr[i];
    }
    return sum;
}
const fakeBin = (x) => {
    const arr = x.split('');
    let result = '';
    arr.forEach((value) => value < '5' ? result += '0' : result += '1');
    return result;
};
exports.fakeBin = fakeBin;
const zeroFuel = (distance, mpg, fuelLeft) => {
    return mpg * fuelLeft / distance >= 1;
};
exports.zeroFuel = zeroFuel;
function countSheep(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
exports.countSheep = countSheep;
function numberToString(num) {
    return num.toString();
}
exports.numberToString = numberToString;
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = (bool) => {
    return bool ? 'Yes' : 'No';
};
exports.boolToWord = boolToWord;
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}
exports.areYouPlayingBanjo = areYouPlayingBanjo;
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
const makeNegative = (num) => {
    if (num > 0) {
        return -num;
    }
    else if (num < 0) {
        return num;
    }
    else {
        return num;
    }
};
exports.makeNegative = makeNegative;
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name) {
    const arr = name.split(' ');
    return `${arr[0][0]}.${arr[1][0]}`.toUpperCase();
}
exports.abbrevName = abbrevName;
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(num) {
    return num % 2 === 0 ? num * 8 : num * 9;
}
exports.simpleMultiplication = simpleMultiplication;
//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//   Examples
//   highAndLow("1 2 3 4 5");  // return "5 1"
//   highAndLow("1 2 -3 4 5"); // return "5 -3"
//   highAndLow("1 9 3 4 -5"); // return "9 -5"
//   Notes
//   All numbers are valid Int32, no need to validate them.
//   There will always be at least one number in the input string.
//   Output string must be two numbers separated by a single space, and highest number is first.
class Kata {
    static highAndLow(numbers) {
        const numbersArr = numbers.split(' ');
        let min = +numbersArr[0];
        let max = +numbersArr[0];
        numbersArr.forEach((item) => {
            if (+item < min)
                min = +item;
            if (+item > max)
                max = +item;
        });
        return `${max} ${min}`;
    }
}
exports.Kata = Kata;
function findNeedle(haystack) {
    return haystack.indexOf('needle').toString();
}
exports.findNeedle = findNeedle;
function rps(p1, p2) {
    const paper = 'paper';
    const rock = 'rock';
    const scissors = 'scissors';
    switch (p1) {
        case paper:
            switch (p2) {
                case rock:
                    return "Player 1 won!";
                case scissors:
                    return "Player 2 won!";
            }
            break;
        case scissors:
            switch (p2) {
                case paper:
                    return "Player 1 won!";
                case rock:
                    return "Player 2 won!";
            }
            break;
        case rock:
            switch (p2) {
                case scissors:
                    return "Player 1 won!";
                case paper:
                    return "Player 2 won!";
            }
            break;
    }
    return "Draw!";
}
exports.rps = rps;
const squareDigits = (num) => {
    return +num.toString().split('').map((item) => (+item) ** 2).join('');
};
function number(busStops) {
    let passengers = 0;
    busStops.forEach((item) => {
        passengers += item[0];
        passengers -= item[1];
    });
    return passengers;
}
exports.number = number;
const longest = (s1, s2) => {
    let unique = [...new Set(s1 + s2)];
    unique.sort((a, b) => a.localeCompare(b));
    const result = unique.join('');
    return result;
};
exports.longest = longest;
function points(games) {
    let points = 0;
    games.forEach((item) => {
        points += item[0] > item[2] ? 3 : item[0] === item[2] ? 1 : 0;
    });
    return points;
}
exports.points = points;
// points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) 10
function smash(words) {
    return words.join(' ');
}
exports.smash = smash;
;
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
function descendingOrder(n) {
    return +n.toString()
        .split('')
        .sort((a, b) => +b - +a)
        .join('');
}
exports.descendingOrder = descendingOrder;
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
