function repeatAString(str,num){
    if(num < 0) return ''; 
    return str.repeat(num); 
}
console.log(repeatAString("abc",3)); 
