Reduce function ---> Accumulate a value by doing something to each item in an array 
Approach - 1
var numbers = [3,56,2,48,5]; 
var newNumbers = numbers.reduce(function(accumulator,currentNumber){
    return accumulator + currentNumber; 
})

console.log(newNumbers); 
