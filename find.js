// find --> find the first item that matches from an array, it does not loop through the array, when it finds the first items, it stops otherwise not
var numbers = [3,56,2,48,5]; 
const newNumbers = numbers.find(function(num){
    return num > 10; 
});
console.log(newNumbers);
