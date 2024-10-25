function findLongestWord(str){
     const words = str.split(' '); 
     let longest = 0; 
    for(let word of words){
        if(word.length > longest){
             longest = word.length; 
         }
     }
     return longest; 
 }

 console.log(findLongestWord("The quicky brown color")); 
