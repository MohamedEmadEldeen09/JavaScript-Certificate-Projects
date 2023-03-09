//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

/*
----------Telephone Number Validator------------
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as 
it has the format of a valid US number. The following are examples of 
valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/



function telephoneCheck(str) {
    if((/^([1]\s)?\d{3}-\d{3}-\d{4}$/).test(str)){
     return true
    } 
    if((/^[1]?\(\d{3}\)\d{3}-\d{4}$/).test(str)){
     return true
    } 
    if((/^([1]\s)?\(\d{3}\)\s\d{3}-\d{4}$/).test(str)){
     return true
    }
    if((/^([1]\s)?\d{10}$/).test(str)){
     return true
    }  
    if((/^([1]\s)?[\d]{3}\s[\d]{3}\s[\d]{4}$/).test(str)){
     return true
    }     
  return false;
}
console.log(telephoneCheck("555-555-5555")); 
console.log(telephoneCheck("1 555 555 5555")); 