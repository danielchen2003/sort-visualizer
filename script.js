// https://www.programiz.com/dsa/sorting-algorithm

/**
 * @param {number} amount Amount of numbers to be generated.
 * @returns {number[]} array containing random numbers.
 * @desc Generates an amount of random numbers between 0 and 100,000
 */

function generateRandomNumbers(amount) {
  const numbers = [];

  for (let i = 0; i < amount; i++) {
    const randomNumber = Math.round(Math.random() * 100000);
    numbers.push(randomNumber);
  }

  return numbers;
}

function bubbleSort(arr) {
  let len = arr.length; // array length shorthand

  // loop over each element of the array;
  for (let i = 0; i < len; i++) {
    //track whether any swaps were performed in this iteration
    let swapped = false;

    //visit each pair of elements in the array
    for (let j = 0; j < len - i - 1; j++) {
      //if they are out of order, swap them
      console.log(`---------------------------------------`);
      console.log(`Indexes being compared: ${j} & ${j + 1}`);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        console.log(`OG ${j}: ${tmp}`);
        arr[j] = arr[j + 1];
        console.log(`${j}: ${arr[j]}`);
        arr[j + 1] = tmp;
        console.log(`${j + 1}: ${arr[j + 1]}`);
        swapped = true;
      }
    }

    //if there were no swaps, the array is already in sorted
    if (!swapped) {
      break;
    }
  }

  return;
};


const randomNums = generateRandomNumbers(5);
bubbleSort(randomNums);
console.log(randomNums);
