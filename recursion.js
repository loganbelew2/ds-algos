const findFactorialRecursive = (number) => {
    if (number == 2) {
        return 2
    }
    return number * findFactorialRecursive(number - 1)
}
// console.log(findFactorialRecursive(5))

const findFactorialIterative = (number) => {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer *= i
    }
    return answer
}
// console.log(findFactorialIterative(5))

// fibonacci sequence
// return the number of the input index
function fibonacciIterative(n) {
    let answer = 2;
    let prev = { 0: 0, 1: 1, 2: 2 };
    for (let i = 3; i <= n; i++) {
        prev[i] = prev[i - 1] + prev[i - 2];
        answer = + prev[i - 1];
    }
    return answer;
}
0, 1, 1, 2, 3
const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciIterative(12))
console.log(fibonacciRecursive(1))

function reverseString(str) {
    let reversedArr = [];
    //split into array
    const strToArr = str.split("");
    //reverse arrary
    let reverseArr = (array) => {
        //base case
        if (array.length <= 0) {
            return
        }
        reversedArr.push(array.pop())
        reverseArr(array)
    }
    reverseArr(strToArr)
    //join array to str
    return reversedArr.join("")
}

console.log(reverseString("yoyo master"))

function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}


reverseStringRecursive("yoyo master");