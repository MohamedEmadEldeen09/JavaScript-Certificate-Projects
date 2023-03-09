//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


/*
----------Cash Register-----------
Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a 
status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer 
is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the 
value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)



See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/



function merge(arr){
  let finalArray = []   
  for (let i = 0; i < arr.length; i++) {   
    let arrr = arr.filter((n)=>{
        return arr[i][0] == n[0]
    })
    finalArray.push([arr[i][0] , arrr.length*arr[i][1]])
    i += arrr.length-1
  }
  return finalArray
}

function Sum(arr){
  let sum = 0
  arr.forEach(a => {
    sum += a[1]
  });
  return sum
}


function checkCashRegister(price, cash, cid) {

  let sum = Sum(cid)
  let change  = cash-price

  if(change == 0 || change < 0){
    return {
     status: "OPEN",
     change: [0]
    }
   }

  //first case
  let insF = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
  if(change > sum){
   return insF
  }

  //second case
  if(change == sum){
    return {
        status: "CLOSED",
        change: [...cid]
    }
  }

  //third case
  let amountCount={}
  for (let i = 0; i < cid.length; i++) {  
    if(cid[i][0] == "PENNY"){amountCount.PENNY = (cid[i][1]/0.01).toFixed(2)}
    if(cid[i][0] == "NICKEL"){amountCount.NICKEL = (cid[i][1]/0.05).toFixed(2)}
    if(cid[i][0] == "DIME"){amountCount.DIME = (cid[i][1]/0.1).toFixed(2)}
    if(cid[i][0] == "QUARTER"){amountCount.QUARTER = (cid[i][1]/0.25).toFixed(2)}
    if(cid[i][0] == "ONE"){amountCount.ONE = (cid[i][1]/1).toFixed(2)}
    if(cid[i][0] == "FIVE"){amountCount.FIVE = (cid[i][1]/5).toFixed(2)}
    if(cid[i][0] == "TEN"){amountCount.TEN = (cid[i][1]/10).toFixed(2)}
    if(cid[i][0] == "TWENTY"){amountCount.TWENTY = (cid[i][1]/20).toFixed(2)}
    if(cid[i][0] == "ONE HUNDRED"){amountCount.ONEHUNDRED = (cid[i][1]/100).toFixed(2)}
  }  
  let changes = []
  if(sum > change){    
    for (let i = Object.keys(amountCount).length-1; i >=0 ; i--) {  

      change = Number(change.toFixed(2)) 

      if(Object.keys(amountCount)[i] == "ONEHUNDRED"){
        if(change == Object.values(amountCount)[i]*100 || change == 100){
          let a = merge([...changes,["ONE HUNDRED" , change]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }             
        while (change >= 100 && Object.values(amountCount)[i]>0) {
          change  -= 100
          changes.push(["ONE HUNDRED" , 100])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "TWENTY"){
        if(change == Object.values(amountCount)[i]*20 || change == 20)
        {
          let a = merge([...changes,["TWENTY" , 20]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 20 && Object.values(amountCount)[i]>0) {
          change  -= 20
          changes.push(["TWENTY" , 20])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "TEN"){
        if(change == Object.values(amountCount)[i]*10 || change == 10)
        {
          let a = merge([...changes,["TEN" , 10]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 10 && Object.values(amountCount)[i]>0) {
          change  -= 10
          changes.push(["TEN" , 10])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "FIVE"){
        if(change == Object.values(amountCount)[i]*5 || change == 5)
        {
          let a = merge([...changes,["FIVE" , 5]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 5 &&Object.values(amountCount)[i]>0) {
          change  -= 5
          changes.push(["FIVE" , 5])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
           change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "ONE"){
        if(change == Object.values(amountCount)[i]*1 || change == 1)
        {
          let a = merge([...changes,["ONE" , 1]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 1 && Object.values(amountCount)[i]>0) {
          change  -= 1
          changes.push(["ONE" , 1])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "QUARTER"){       
        if(change == Object.values(amountCount)[i]*0.25 || change == 0.25)
        {
          let a = merge([...changes,["QUARTER" , 0.25]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 0.25 && Object.values(amountCount)[i]>0) {
          change  -= 0.25
          changes.push(["QUARTER" , 0.25])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "DIME"){
        if(change == Object.values(amountCount)[i]*0.1 || change == 0.1)
        {
          let a = merge([...changes,["DIME" , 0.1]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >= 0.1 && Object.values(amountCount)[i]>0) {
          change  -= 0.1
          changes.push(["DIME" , 0.1])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "NICKEL"){
        if(change == Object.values(amountCount)[i]* 0.05 || change == 0.05)
        {
          let a = merge([...changes,["NICKEL" , 0.05]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }} 
        }              
        while (change >=  0.05 && Object.values(amountCount)[i]>0) {
          change  -=  0.05
          changes.push(["NICKEL" , 0.05])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2)) 
        }
      }

      if( Object.keys(amountCount)[i] == "PENNY"){
        if(change == Object.values(amountCount)[i]* 0.01 || change == 0.01)
        {
          let a = merge([...changes,["PENNY" , 0.01]])
          if(Sum(a) < change){return insF}
          else{return{status: "OPEN", change: a }}         
        }          
        while (change >=  0.01 && Object.values(amountCount)[i]>0) {
          change  -=  0.01
          changes.push(["PENNY" , 0.01])
          amountCount[`${Object.keys(amountCount)[i]}`] -= 1
          change = Number(change.toFixed(2))              
        }
      } 
           
    }   
  }
 
  let a = merge(changes)
   if(Sum(a) < change){return insF}
   else{return{status: "OPEN", change: a }}  
  
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], ["ONE", 90], 
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

