//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


/*
---------------Palindrome Checker------------
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way 
both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into the same case 
(lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, 
and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 
2A3 3a2, and 2_A3*3#A2.
*/


function palindrome(str) {
	let m = str.match(/[a-zA-Z0-9]+/gi).join('')
	let arr = []
	console.log(m) 
    if(m.length %2 == 0){
      arr.push(m.slice(0,(m.length/2)).toLowerCase())
	  console.log(arr[0])  
	  arr.push(m.slice((m.length/2)).split('').reverse().join('').toLowerCase())
	  console.log(arr[1])
	}  
    else{
	arr.push(m.slice(0,(m.length/2)).toLowerCase())
	arr.push(m.slice((m.length/2)+1).split('').reverse().join('').toLowerCase())
	}
	console.log(arr[0]) 
	console.log(arr[1]) 
	return arr[0] == arr[1];
  }
console.log(palindrome("eye")) 
console.log(palindrome("My age is 0, 0 si ega ym.")) 
console.log(palindrome("0_0 (: /-\ :) 0-0")) 