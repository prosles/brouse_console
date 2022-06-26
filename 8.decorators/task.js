function cachingDecoratorNew(func) {
  let cache = [];
    function wrapper(...args) {
      const hash = args.join(',');
      let objectInCache = cache.findIndex((item) => item.hash == hash); 
      if (objectInCache !== -1) { 
          console.log("Из кэша: " + cache[objectInCache].result);
          return "Из кэша: " + cache[objectInCache].result;
      }

      let result = func(...args); 
      cache.push({hash, result}) ; 
      if (cache.length > 5) { 
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerId = null;  
    function wrapper(...args) {
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), ms);
    }
    return wrapper;
}

function debounceDecorator2(func, ms) {
  let timerId = null;
    function wrapper(...args) {
      if (timerId === null) {
        func(...args);
      }
      clearTimeout(timerId);
      timerId = setTimeout(() => func(...args), ms);
      wrapper.count++;
    }
    wrapper.count = 0;
    return wrapper;
}