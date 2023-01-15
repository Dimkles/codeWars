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


export function findNeedle(haystack: any[]): string {
    return haystack.indexOf('needle').toString()
}


export function rps(p1: string, p2: string): string {

    const paper = 'paper'
    const rock = 'rock'
    const scissors = 'scissors'

    switch (p1) {
        case paper:
            switch (p2) {
                case rock:
                    return "Player 1 won!"
                case scissors:
                    return "Player 2 won!"
            }
            break
        case scissors:
            switch (p2) {
                case paper:
                    return "Player 1 won!"
                case rock:
                    return "Player 2 won!"
            }
            break
        case rock:
            switch (p2) {
                case scissors:
                    return "Player 1 won!"
                case paper:
                    return "Player 2 won!"
            }
            break
    }

    return "Draw!"
}


const squareDigits = (num: number): number => {
    return +num.toString().split('').map((item) => (+item) ** 2).join('')
}


export function number(busStops: [number, number][]): number {
    let passengers = 0
    busStops.forEach((item) => {
        passengers += item[0]
        passengers -= item[1]
    })
    return passengers
}

export const longest = (s1: string, s2: string): string => {
    let unique = [...new Set(s1 + s2)]
    unique.sort((a, b) => a.localeCompare(b))
    const result = unique.join('')
    return result
}


export function points(games: string[]): number {

    let points = 0

    games.forEach((item) => {
        points += item[0] > item[2] ? 3 : item[0] === item[2] ? 1 : 0
    })

    return points
}
// points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) 10



export function smash(words: string[]): string {
    return words.join(' ')
};
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



export function descendingOrder(n: number): number {
    return +n.toString()
        .split('')
        .sort((a, b) => +b - +a)
        .join('')
}
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


export const min = (list: number[]): number => {
    return Math.min(...list)
};

export const max = (list: number[]): number => {
    return Math.max(...list)
};
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

export function findShort(s: string): number {
    const arr = s.split(' ')
    let min = arr[0].length
    arr.forEach((item) => {
        if (item.length < min) min = item.length
    })

    return min; // your code here
}

// findShort("Lets all go on holiday somewhere very cold") -> 2


export const digitize = (n: number): number[] => {
    return n.toString().split('').reverse().map((i) => +i)
};

// 35231 => [1,3,2,5,3]
// 0 => [0]


export function getGrade(a: number, b: number, c: number): string {

    const average = Math.ceil((a + b + c) / 3)

    if (average >= 90 && average <= 100) return 'A'
    if (average >= 80 && average < 90) return 'B'
    if (average >= 70 && average < 80) return 'C'
    if (average >= 60 && average < 70) return 'D'
    return 'F'
    // your code here
}