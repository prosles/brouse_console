"use strict"

function solveEquation(a, b, c) {
  let arr;
  let d = b**(2)-4*a*c;

  if (d < 0) {
    arr = []; //корней нет;
  }

  if (d === 0 ) {
    arr = [(-b/(2*a))]; //один корень;
  }

  if ( d > 0) {
    arr = [
      (-b + Math.sqrt(d) )/(2*a), //первый корень;
      (-b - Math.sqrt(d) )/(2*a) // второй корень;
    ]    
}
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = amount - contribution;
  const date = new Date();
  console.log(Number(percent)); 

 

  // console.log(totalAmount.toFixed(2)); //округление до 2 цифр после запятой
  
  return totalAmount;
}
