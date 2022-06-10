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
//percent (процентная ставка), contribution (сумма первоначального взноса), сумму кредита (amount) и срок (дату окончания кредита) (date)
//  выдавать сумму, которую в итоге заплатит клиент 
// (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)., , , date

  let totalAmount; 
  let bodyCredit = amount - contribution; //тело кердита

  // Посчитайте на какой срок был выдан кредит (в месяцах).
  let p = percent*(1/12); //число от процентной ставки
  let start = new Date;
  let end = new Date();
  let term = end.getTime() - start.getTime(); //разница дат


  let paymentInMounth = bodyCredit * (p +(p / (((1+p)**n) - 1)))


  // Платеж = S * (P + (P / (((1 + P)^n) - 1))), 
  // где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень




  // const date = new Date();
  // console.log(Number(percent)); 

 

  // console.log(totalAmount.toFixed(2)); //округление до 2 цифр после запятой
  
  return totalAmount;
}
