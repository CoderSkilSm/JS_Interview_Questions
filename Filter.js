Filter  ---> Create a new array by keeping the items that return true
Approach - 1 
var numbers = [3,55,2,48,5]; 
const newNumbers = numbers.filter(function(num){
    return num > 10; 
})
console.log(newNumbers); 
Approach - 2 
var numbers = [3,55,2,48,5];
const newNumbers = []; 
numbers.forEach(function(num){
    if(num > 10){
        newNumbers.push(num); 
    }
}); 
console.log(newNumbers);
