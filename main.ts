function positiveSum(arr: number[]): number {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue
        sum += arr[i]
    }
    return sum;
}

export const fakeBin = (x: string): string => {
    const arr = x.split('')
    let result = ''
    arr.forEach((value) => value < '5' ? result += '0' : result += '1')

    return result
};

export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    return mpg * fuelLeft / distance >= 1

};

export function countSheep(num: number): string {

    let result = ''

    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`
    }

    return result;
}

export function numberToString(num: number): string {
    return num.toString()
}

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
export const boolToWord = (bool: boolean): string => {
    return bool ? 'Yes' : 'No'
};

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

export function areYouPlayingBanjo(name: string): string {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


export const makeNegative = (num: number): number => {
    if (num > 0) {
        return -num
    } else if (num < 0) {
        return num
    } else {
        return num
    }
};


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

export function abbrevName(name: string): string {
    const arr = name.split(' ')
    return `${arr[0][0]}.${arr[1][0]}`.toUpperCase()
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

export function simpleMultiplication(num: number): number {
    return num % 2 === 0 ? num * 8 : num * 9
}


//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//   Examples
//   highAndLow("1 2 3 4 5");  // return "5 1"
//   highAndLow("1 2 -3 4 5"); // return "5 -3"
//   highAndLow("1 9 3 4 -5"); // return "9 -5"
//   Notes
//   All numbers are valid Int32, no need to validate them.
//   There will always be at least one number in the input string.
//   Output string must be two numbers separated by a single space, and highest number is first.

export class Kata {
    static highAndLow(numbers: string): string {
        const numbersArr = numbers.split(' ')
        let min = +numbersArr[0]
        let max = +numbersArr[0]
        numbersArr.forEach((item) => {
            if (+item < min) min = +item
            if (+item > max) max = +item
        })
        return `${max} ${min}`
    }
}