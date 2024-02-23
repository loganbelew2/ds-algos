function closureFunction() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return "in cache";
    } else {
      cache[n] = n;
      return n;
    }
  };
};

let innerFunction = closureFunction();

console.log(innerFunction(10));
console.log(innerFunction(10))
