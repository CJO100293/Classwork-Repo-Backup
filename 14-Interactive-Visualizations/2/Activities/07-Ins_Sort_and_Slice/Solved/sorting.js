// Sort the array in descending order
//let numArray = [1, 2, 3];

let numArray = [0.5, 0.6, 0.8]
// [secondNum, firstNum]
// Every time you do a sort, 
// you're comparing against 2 elements within the array
numArray.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, 1)
  console.log(`2nd Num: ${secondNum}, 1st Num: ${firstNum}`)
  console.log(`Descending order: ${secondNum - firstNum}`)
  //console.log(`Ascending order: ${firstNum - secondNum}`)
  return secondNum - firstNum;
  // return firstNum - secondNum; // ascending order
});

// Returns [3, 2, 1]
// console.log(`Ascending Order Array: ${numArray}`);
console.log(`Descending Order Array: ${numArray}`);

// Sort the array in ascending order
let numArray2 = [3, 2, 1];
numArray2.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

// Returns [1, 2, 3]
console.log(numArray2);

// Sort the array in ascending order, using an arrow function
let numArray3 = [3, 2, 1];
numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
console.log(numArray3);

// Reverse the array
let numArray4 = [1, 2, 3];
numArray4.reverse()
console.log(numArray4);
