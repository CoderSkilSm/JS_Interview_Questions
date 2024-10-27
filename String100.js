Approach -1 
const newArray = []; 
var count = 0; 
emojipedia.forEach(function(){
    newArray.push(emojipedia[count++].meaning.substring(0,101)); 
}); 
console.log(newArray); 

Approach - 2
 
var count = 0; 
const newArray = emojipedia.map(function(){
    return emojipedia[count++].meaning.substring(0,101); 
})
// console.log(newArray); 
