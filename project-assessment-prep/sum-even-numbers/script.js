/*
Create a function called sumEvenNumbers that takes an array of numbers as a parameter and returns the sum of all the even numbers in the array.

Your function should:
Iterate through the given numbers array using the filter method to check if each number is even. 
Then, sum the even numbers from the filtered array and return their sum.
Test your function with an example array.

Example:
const result = sumEvenNumbers(numbers);
console.log('Sum of even numbers:', result); --> The result should be 26.

BONUS: Use the reduce method to sum the even numbers from the array - try this after you have completed this exercise
*/

const numbers = [2, 5, 8, 10, 3, 6];

function sumEvenNumbers(numbers) {
    let sum = 0

    const filterNum = numbers.filter(number => {
        if (number % 2 == 0) {
            sum+= number
            return true
        }
        return false
    })
    return sum
}

const numbersTwo = [5, 10, 15, 20, 25, 30]
const result = sumEvenNumbers(numbersTwo)
console.log('Sum of even numbers: ', result)