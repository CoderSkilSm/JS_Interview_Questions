Checking the palindrom string

function isPallindrome(str){
    const reversedString = str.split('').reverse().join(''); 
    return reversedString === str;
}

console.log("output:" + isPallindrome("aaaa")); 
console.log("output:" + isPallindrome("hello"));
