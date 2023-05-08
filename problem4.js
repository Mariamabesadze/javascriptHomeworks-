// 1. Write a JavaScript function that reverses a number
function reverseNumber(number) {
    return (
        parseFloat(
            number
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(number)
    )
}

console.log(reverseNumber(9876));

//   2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
function reverseWord(word) {
    let splitWord = word.split("");
    let reverseWord = splitWord.reverse();
    let joinWord = reverseWord.join("");
    return joinWord;
}


function checkPalindrome(word) {
    if (word === reverseWord(word)) {
        return word + " is a palindrome.";
    }
    else {
        return word + " isn't a palindrom.";
    }
}

console.log(checkPalindrome('car'));

// 3. Write a JavaScript function that generates all combinations of a string.

function combainString(str) {
    let lenStr = str.length;
    let result = [];
    let indexCurrent = 0;

    while (indexCurrent < lenStr) {
        let char = str.charAt(indexCurrent);
        let x;
        let arrTemp = [char];

        for (x in result) {
            arrTemp.push("" + result[x] + char);
        }
        result = result.concat(arrTemp);

        indexCurrent++;
    }

    return result;
}

console.log(combainString("davigale"));

// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.

function alphaSort(string) {
    let letters = string.split('');
    let sortedLetters = letters.sort();
    return sortedLetters.join('');

}
console.log(alphaSort('lobio'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function upperStrings(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');

}
console.log(upperStrings('i love sleeping'));

// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. 

function longestWord(string) {
    let words = string.split(' ');
    let wordsLength = words.length
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].length
    }
    return Math.max(...words);

}

console.log(longestWord('me wavedi hidroeleqtrosadgurze'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
const vowels = ['a', 'e', 'i', 'o', 'u']
function countVowels(string) {
    let count = 0;
    for (let letters of string.toLowerCase()) {
        if (vowels.includes(letters)) {
            count++
        }
    }
    return count
}

console.log(countVowels('simindis wnili minda'));

// 8. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

function primeNumber(number) {
    let isPrime = true
    if (number === 1) {
        return number + " doesn't conclude"
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            return number + " is a prime";
        } else {
            return number + " isn't a prime";

        }
    }
    else {
        return number + " isn't a prime number "
    }
}
console.log(primeNumber(17));

// 9. Write a JavaScript function that accepts an argument and returns the type.

function dataType(value) {

    return typeof value
}
console.log(dataType(true))



