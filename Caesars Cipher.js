//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher


/*
-------------Caesars Cipher--------------
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the 
letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and 
returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/



// alphabet english >>>> a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z  
function rot13(str) {
    let letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let answer = ""
    for (let i = 0; i < str.length; i++) {
       if(str[i].match(/[a-z]/i)){
           for (let j = 0; j < letters.length; j++) {
               if(str[i].toLowerCase()==letters[j]){
                   if(str[i].toLowerCase() == str[i]){					 
                       answer += letters[j+13]
                   }
                   else{ 
                       answer += letters[j+13].toUpperCase()
                   }	
                   break	  
               }	
         }
       }else{
           answer += str[i]
       }	
    }
    return answer;
   }
console.log(rot13("SERR PBQR PNZC")); 