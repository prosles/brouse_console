function compareArrays(arr1, arr2) {
  let result;
    if (arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i])) { 
      result = true;
  }
    else {
      result = false;
  }
  return result ;
}


// const compareArrays = (arr1, arr2) =>  arr1.length === arr2.length  && arr1.every((n, i) => n === arr2[i]); второй вариант

function advancedFilter(arr) {
  let resultArr = arr.filter(arr => arr > 0).filter(arr => arr % 3 === 0).map(arr => arr*10);
  return resultArr; // array
}
