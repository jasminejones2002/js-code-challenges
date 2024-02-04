/* Write a function that takes a string of random words and 
returns an object with the unique words as keys (ignoring case) 
and values of the number of times the word appears

Exmaple input/output: 

const str = "Gabba boo dah ugh fpp BOO gabba doo Boo"

console.log(convertToObjectWithCounts(str)) => { gabba: 2, boo: 3, dah: 1, ugh: 1, fpp: 1, doo: 1 }

*/

function randomWords(string) {
    const words = string.split(' ')
    const obj = {}

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (obj.hasOwnProperty(word)) {
            obj[word] += 1;
        } else {
            obj[word] = 1
        }
    }
    return obj
}

console.log(randomWords('Gabba boo dah ugh fpp BOO gabba doo Boo'))