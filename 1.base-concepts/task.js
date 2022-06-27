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

  let totalAmount; 

  if (isNaN(percent)) {
    console.log('Параметр "Процентная ставка" содержит неправильное значение "'  + percent + '"'); 
    totalAmount = 'Параметр "Процентная ставка" содержит неправильное значение "'  + percent + '"';
    return(totalAmount);
  } else if (isNaN(contribution)) {
    console.log('Параметр "Начальный взнос" содержит неправильное значение "'  + contribution + '"'); 
    totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение "'  + contribution + '"';
    return(totalAmount);
  } else if (isNaN(amount)) {
    console.log('Параметр "Общая стоимость" содержит неправильное значение "'  + amount + '"'); 
    totalAmount = 'Параметр "Общая стоимость" содержит неправильное значение "'  + amount + '"';
    return(totalAmount);
  } else {
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

  let bodyCredit = amount - contribution; //тело кердита

  
  percent = percent/1200; //число от процентной ставки
  let start = Date.now(); // текущяя дата
  let end = date.getTime(); // введенная дата
  let term = (end - start)/(60 * 60 * 1000 * 24 * 30.42); //разница дат, разницу делим на колво миллисек в месяце*/
  /*считаем в миллисек - 1000 в секунде, 60 в минуте, 60 в часе, 24 в сутках, среднее колво дней в месяце 30.42*/
  term = Math.round(term);

  let paymentInMounth = bodyCredit * (percent + (percent / (((1 + percent) ** term) - 1)));
  totalAmount = (paymentInMounth * term).toFixed(2);
  totalAmount = Number(totalAmount);
  console.log(totalAmount);

  
  return totalAmount;
}
};