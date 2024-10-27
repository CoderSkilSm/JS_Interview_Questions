//Map --> Create a new array by doing something with each item in an array

Map function example
Approach - 1
var numbers = [3,56,2,48,5]; 
function double(x){
    return x*2; 
}
newNumbers = numbers.map(double); 
console.log(newNumbers);

Approach - 2
var numbers = [3,56,2,48,5]; 
var newNumbers = []; 

function double(x){
    newNumbers.push(x*2); 
}

numbers.forEach(double); 
console.log(newNumbers); 

Approach - 3
var numbers = [3,56,2,48,5]; 
var newNumbers = numbers.map(function(x){
    return x*2; 
}); 
console.log(newNumbers); 

Approach - 4 
var numbers = [3,56,2,48,5]; 
var newNumbers = []; 
numbers.forEach(function(x){
    newNumbers.push(x*2); 
});

console.log(newNumbers);
