/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/

/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/

/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

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
  Object.keys(ingredients).sort().forEach(key => {
    if (ingredients[key].length > 1) {
      result.push([key].concat(ingredients[key].sort()));
    }
  });
  return result;
};
