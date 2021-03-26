// function pow(x, n) {
//     let result = 1;
  
//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   console.log( pow(2, 3) ); // 8


// function pow(x, n) {
// if (n == 1) {
//     return x;
// } else {
//     return x * pow(x, n - 1);
// }
// }

// console.log( pow(2, 4) ); // 8
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
  
  