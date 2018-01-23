// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A string of lowercase letters.

// Guaranteed constraints:
// 3 ≤ inputString.length ≤ 50.

// [output] boolean

function isBeautifulString(inputString) {
    // empty array with each element count.
    // Need to initialize array with ALL letters to begin with!
    var countObj = {};
    var countArr = [];
    for(var i = 97; i <= 122; i++) {
        countObj[String.fromCharCode(i)] = {
            count: 0,
            letter: String.fromCharCode(i)
        };
        
    // This pre-sorts the entire array.
        countArr.push(countObj[String.fromCharCode(i)]);
    }

    // Counting each element...
    for(var i = 0; i < inputString.length; i++) {
        countObj[inputString[i]].count += 1;
    }
    
    // Checking to see if every element passes the test.
    for(var i = 0; i < countArr.length - 1; i++) {
        if(countArr[i].count < countArr[i + 1].count) {
            return false;
        }
    }
    return true;
}