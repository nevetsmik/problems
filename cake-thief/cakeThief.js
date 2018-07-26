/*
Unbounded knapsack problem - https://www.interviewcake.com/question/java/cake-thief

Create an array with all the possible weights 0..maxCapacity. Each slot represents
the max possible value for the weight.
Use dynamic programming to find the best cake value for a given weight using previously
calculated values for a previously calculated weight. For example, starting with
capacity of 3 (any cake with a weight of 0 and non-zero value will abort the function because
that scenario would result with a bag of weight 0 and value equal to infinity):

For all cakes that are equal to or less than 3
  Add the current cake's value to the value of the bag with capacity equal to the currentCapacity
  minus the current cake's weight (think about this...you'll see)
  Check if this value is the max value at the current capacity
After looping through all the different cake types, save the max value for the current capacity

const cakeThief = ([{7, 160}, {3, 90}, {2, 15}, {1, 20}, {2, 16}], 10) {

  // Iterate through weights
  weights array 0    1    2    3    4    5    6    7    8    9    10
         values 0   20   40   90  110  130  180  180  220  270   290

        // For each weight iterate through the different cake types
        [{7, 160}, {3, 90}, {2, 15}, {1, 20}, {2, 16}]
          // For weight 1,
            There is only 1 cake with weight of 1 so that is the one that is selected
          // For weight 2,
            There are 3 cakes to check (2 with weight 2, 1 with weight 1)
            The cake with the highest value is {1, 20} so use the value when the weight was
            1 to find the new max value
          // For weight 3,
            There are 4 cakes to Check
            The cake with the highest value is {3, 90} so use the value when the weight was
            0 to find the new max value
            // Value for weight 3 is the value when the bag weight is 0 plus the value of the {3, 90} cake
            // This selection has higher value then other cakes:
                For {2, 15}, the value when the bag was weight 1 is 20 so 20 + 15 is less than 90
                For {2, 16}, the value when the bag was weight 1 is 20 so 20 + 16 is less than 90
                For {1, 20}, the value when the bag was weight 2 is 40 so 40 + 20 is less than 90

        // Save the max value to the weight slot

  return weights[10]
}

*/

export const cakeThief = (cakeTypes, maxCapacity) => {
  let weights = makeWeights(maxCapacity);
  for (
    let currentCapacity = 0;
    currentCapacity <= maxCapacity;
    currentCapacity++
  ) {
    let maxValueForCurrentCapacity = 0;
    for (let i = 0; i < cakeTypes.length; i++) {
      let cakeType = cakeTypes[i];
      if (cakeType.weight <= currentCapacity) {
        // A weightless cake with non-zero value will result in a bag that has infinity value
        if (cakeType.weight === 0 && cakeType.value > 0) {
          console.log("Bag will have infinity value!");
          break;
        }

        let currentValue =
          cakeType.value + weights[currentCapacity - cakeType.weight];
        maxValueForCurrentCapacity = Math.max(
          maxValueForCurrentCapacity,
          currentValue
        );
      }
    }
    weights[currentCapacity] = maxValueForCurrentCapacity;
  }
  return weights[maxCapacity];
};

export const makeWeights = capacity => {
  let weights = [];
  for (let i = 0; i <= capacity; i++) {
    weights.push(0);
  }
  return weights;
};
