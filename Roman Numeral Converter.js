//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

/*
-------------Roman Numeral Converter-----------------
Convert the given number into a roman numeral.
Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

/*
Place value	1	2	3	4	5	6	7	8	9
Ones	I	II	III	IV	V	VI	VII	VIII	IX
Tens	X	XX	XXX	XL	L	LX	LXX	LXXX	XC
Hundreds	C	CC	CCC	CD	D	DC	DCC	DCCC	CM
Thousands	M	MM	MMM	-	-
 */
const romanNumber = {
    Ones:{
      1 : 'I',
      2 : 'II',
      3 : 'III',
      4 : 'IV',
      5 : 'V',
      6 : 'VI',
      7 : 'VII',
      8 : 'VIII',
      9 : 'IX',
    },
    Tens:{
        10: 'X',
        20 : 'XX',
        30 : 'XXX',
        40 : 'XL',
        50 : 'L',
        60 : 'LX',
        70 : 'LXX',
        80 : 'LXXX',
        90 : 'XC',
    },
    Hundreds:{
        100: 'C',
        200 : 'CC',
        300 : 'CCC',
        400 : 'CD',
        500 : 'D',
        600 : 'DC',
        700 : 'DCC',
        800 : 'DCCC',
        900 : 'CM',
    },
    Thousands:{
        1000: 'M',
        2000 : 'MM',
        3000 : 'MMM',
    }
}
function convertToRoman(num) {
  let lengthOfNum = Number(num).toString().length
  let numAsString = num.toString()
  let process = []
  let n = ""

  //if thousand
   if(lengthOfNum==4){    
       n = numAsString[0]
      process.push(Number(n)*1000)
      num = num-Number(n)*1000    
      numAsString=num.toString()

      lengthOfNum = numAsString.length
      if(lengthOfNum==3){
        n = numAsString[0]
        process.push(Number(n)*100)
        num = num-Number(n)*100      
        numAsString=num.toString()

        lengthOfNum = numAsString.length
        if(lengthOfNum==2){
         n = numAsString[0]
         process.push(Number(n)*10)
         num = num-Number(n)*10      
         process.push(num)
        } 
      }
      else if(lengthOfNum==2){
        n = numAsString[0]
        process.push(Number(n)*10)
        num = num-Number(n)*10      
        process.push(num)
      }
      else if(lengthOfNum==1){
        process.push(num)
      }
   }
   
   //if hundred
   else if(lengthOfNum==3){
        n = numAsString[0]
        process.push(Number(n)*100)
        num = num-Number(n)*100      
        numAsString=num.toString()

        lengthOfNum = numAsString.length
       if(lengthOfNum==2){
        n = numAsString[0]
        process.push(Number(n)*10)
        num = num-Number(n)*10      
        process.push(num)
       } 
       else {
        process.push(num)
       }
   }

   //if tens
   else if(lengthOfNum==2){
    n = numAsString[0]
    process.push(Number(n)*10)
    num = num-Number(n)*10      
    process.push(num)
   }

   //if ones
   else{
    process.push(num)
   }


  let RomanNum = process.map((decimalNum)=>{
       if(decimalNum.toString().length == 4){              
        return romanNumber.Thousands[decimalNum]
       }
       if(decimalNum.toString().length == 3){      
        return romanNumber.Hundreds[decimalNum]
       }
       if(decimalNum.toString().length == 2){      
        return romanNumber.Tens[decimalNum]
       }
       if(decimalNum.toString().length == 1){      
        return romanNumber.Ones[decimalNum]
       }
  }).join('')      
            
  return RomanNum;
}   
console.log(convertToRoman(15))  
console.log(convertToRoman(36))  
console.log(convertToRoman(92))  
console.log(convertToRoman(102))  
console.log(convertToRoman(356))  
console.log(convertToRoman(4178))  
console.log(convertToRoman(891))  

