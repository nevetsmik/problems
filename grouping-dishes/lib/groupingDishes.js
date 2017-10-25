/*
You have a list of dishes. Each dish is associated with a list of ingredients
used to prepare it. You want to group the dishes by ingredients, so that for
each ingredient you'll be able to find all the dishes that contain it (if there
are at least 2 such dishes).

Return an array where each element is a list with the first element equal to the
name of the ingredient and all of the other elements equal to the names of
dishes that contain this ingredient. The dishes inside each list should be
sorted lexicographically. The result array should be sorted lexicographically by
the names of the ingredients in its elements.

https://codefights.com/interview-practice/task/xrFgR63cw7Nch4vXo
*/

export const groupingDishes = array => {
  let ingredients = {};
  for (let i = 0; i < array.length; i++) {
    let dish = array[i][0];
    for (let j = 1; j < array[i].length; j++) {
      let ingredient = array[i][j];
      ingredients[ingredient] = ingredients[ingredient] || [];
      if (!ingredients[ingredient].includes(dish)) {
        ingredients[ingredient].push(dish);
      }
    }
  }

  let result = [];
  Object.keys(ingredients)
    .sort()
    .forEach(key => {
      if (ingredients[key].length > 1) {
        result.push([key].concat(ingredients[key].sort()));
      }
    });
  return result;
};
