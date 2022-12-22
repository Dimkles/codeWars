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