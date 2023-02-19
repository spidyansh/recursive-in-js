let sum = (a) => {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};


//shortway to do in ES6
//let sum=(a)=> (b)=>b?(sum(a+b)):a

console.log(sum(1)(2)(3)(4)());