Count the number of vowels in the string
function countVowels(str){
    let count = 0; 
    const vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            count++; 
        }
    }
    return count; 
}
console.log(countVowels("Hello")); 
console.log(countVowels("World")); 
