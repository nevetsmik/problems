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

const HashMap = function (limit) {
  // Create instance variable array for storage
  this.storage = [];
  this.limit = limit;
  // Create instance variable for counting number of elements
  this.size = 0;
  // Create upper limit ratio
  this.upperLimit = .75;
  // Create lower limit ratio
  this.lowerLimit = .25;
};

HashMap.prototype.insert = function (key, value) {
  // Get bucket using hashing function
  let bucket = this.hashing(key.toString());
  // Get the array or initialize the bucket to an array
  this.storage[bucket] = this.storage[bucket] || [];
  // Push the key value pair to the bucket
  let found = false;
  for (let i = 0; i < this.storage[bucket].length; i++) {
    if (this.storage[bucket][i][0] === key) {
      this.storage[bucket][i][1] = value;
      found = true;
    }
  }
  if (!found) {
    this.storage[bucket].push([key, value]);
    // Increment size counter
    this.size += 1;
  }
  // if the size is greater than the upper limit ratio
  if (this.size > this.limit * this.upperLimit) {
    // resize('up')
    this.resize('up');
  }
};

HashMap.prototype.remove = function (key) {
  // Get the bucket
  let bucket = this.hashing(key.toString());
  let value;
  // If the bucket is null
  if (this.storage[bucket] === undefined) {
    // return null
    return null;
  } else {
    // Iterate through the array
    for (let i = 0; i < this.storage[bucket].length; i++) {
      // Compare the key in the tuple to the input key
      if (key === this.storage[bucket][i][0]) {
        // save the value
        value = this.storage[bucket][i][1];
        // remove the key
        this.storage[bucket].splice(i, 1);
        this.size -= 1;
      }
    }
  }

  // if the size is less than the lower limit ration
  if (this.size < this.lowerLimit * this.limit) {
    // resize('down')
    this.resize('down');
  }

  // return null
  if (value) {
    return value;
  } else {
    return null;
  }
};

HashMap.prototype.retrieve = function (key) {
  // Get the bucket
  let bucket = this.hashing(key.toString());
  // If the bucket is null
  if (this.storage[bucket] === undefined) {
    // return null
    return null;
  } else {
    // Iterate through the array
    for (let i = 0; i < this.storage[bucket].length; i++) {
      // Compare the key in the tuple to the input key
      if (this.storage[bucket][i][0] === key) {
        // return the value
        return this.storage[bucket][i][1];
      }
    }
    // return null
    return null;
  }
};

HashMap.prototype.resize = function (direction) {
  // Save the old storage
  let oldStorage = this.storage.slice();
  // Create a new storage
  this.storage = [];
  if (direction === 'up') {
    // Reset the limit to double the size
    this.limit = this.limit * 2;
    this.size = 0;
  } else {
    // Reset the limit to half the size
    this.limit = Math.floor(this.limit / 2);
    this.size = 0;
  }

  // Iterate through the old storage array
  for (let i = 0; i < oldStorage.length; i++) {
    // Iterate through each bucket
    if (Array.isArray(oldStorage[i])) {
      for (let j = 0; j < oldStorage[i].length; j++) {
        // Insert into the this
        this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
      }
    }
  }
};

HashMap.prototype.hashing = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % this.limit;
};

export default HashMap;
