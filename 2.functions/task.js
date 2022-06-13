// Задание 1
  function getArrayParams(arr) {
    let min, max, sum, avg;
    
    min = arr[0]; 
    max = arr[0]; 
    sum = 0;
    
    for (let i=0; i<arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
      
      if (max < arr[i]) {
        max = arr[i];
      }
  
      sum += arr[i]; 
    }
      avg = Number((sum/arr.length).toFixed(2));
  
  
  return {min: min, max: max, avg: avg};
    }
  
   getArrayParams([-99, 99, 10]);
   getArrayParams([1, 2, 3, -100, 10]);
   getArrayParams([5]);




// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  } 
return sum;
}

function makeWork(arrOfArr, func) {
  let sumArr = [];
  
   for (let i=0; i < arrOfArr.length; i++) {
     sumArr.push(func(arrOfArr[i]));     
    }
  
  let max = sumArr[0];

    for (let i=0; i < sumArr.length; i++) {
       if (max < (sumArr[i])){
      max = sumArr[i];
     }
     
   }
  return max;

  
}

// Задание 3
function worker2(arr){
  let max = arr[0];
  let min = arr[0];

  for (let i=0; i < arr.length; i++){
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  let difference = Math.abs(max - min);

  return difference
}


