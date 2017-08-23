const fs = require('fs');

// Read the filename from the command line, read contents and pass arguments into function parameters
const main = function() {
  let inputFile = process.argv[2];
  fs.readFile(inputFile, 'utf8', (err, data) => {
    let lines = data.split('\n');
    let firstLine = lines[0].split(' ').map(Number);
    let array = lines[1].split(' ').map(Number);
    increasingDecreasingSubrangeDifference(array, firstLine[1]);
    // let answer = increasingDecreasingSubrangeDifference(array, firstLine[1]);
    // console.log(answer.join('\n'));
  });
};

const increasingDecreasingSubrangeDifference = (array, windowSize) => {
  let result = [];

  // Iterates for n - k + 1 times, which is the number of windows in the range
  for (let i = 0; i <= array.length - windowSize; i++) {
    // Counts for a window
    let increasing = 0;
    let decreasing = 0;

    // Tracks the trend for the preceding pair - can be either increasing or decreasing
    let prevTrend = null;

    // Keep track of the number of contiguous repeating increasing or decreasing pairs
    let increasingRepeat = 0;
    let decreasingRepeat = 0;

    // Iterate k times, which is the size of the window
    for (let j = 0; j < windowSize - 1; j++) {
      let currTrendDifference = array[i + j + 1] - array[i + j];

      // Count the trend between current pair
      // Reset the preceding increasing or decreasing continous pairs
      if (currTrendDifference > 0) {
        increasing += 1;
        decreasingRepeat = 0;
      } else if (currTrendDifference < 0) {
        decreasing += 1;
        increasingRepeat = 0;
      }

      // If the current pair and the previous pair have the same trend, then
      // use the number of preceding increasing or decreasing pairs to count
      // the number of additional subsets that should be added
      if (currTrendDifference > 0 && prevTrend === "increasing") {
        increasingRepeat += 1;
        increasing = increasing + (1 * Number(increasingRepeat));
      } else if (currTrendDifference < 0 && prevTrend === "decreasing") {
        decreasingRepeat += 1;
        decreasing = decreasing + (1 * Number(decreasingRepeat));
      }

      // Update the previous trend for the next iteration
      if (currTrendDifference > 0) { prevTrend = "increasing"; }
      if (currTrendDifference < 0) { prevTrend = "decreasing"; }
    }

    // result.push(increasing - decreasing);
    console.log(increasing - decreasing);
  }
  
  // return result;
  return;
};

main();
