/*
Design a solution that keeps track of average, mode, max and min temps. O(1)
time for max, min, mode and average.
*/

const TempTracker = function() {
  this.tempSum = 0;
  this.countTemps = 0;
  this.max = null;
  this.min = null;
  this.mode = null;
  this.temps = [];
};

TempTracker.prototype.insert = function(temp) {
  this.tempSum += temp;
  this.countTemps += 1;

  if (this.max === null || temp > this.max) {
    this.max = temp;
  }

  if (this.min === null || temp < this.min) {
    this.min = temp;
  }

  this.temps[temp] = this.temps[temp] || 0;
  this.temps[temp] += 1;

  if (this.mode === null || this.temps[temp] > this.temps[this.mode]) {
    this.mode = temp;
  }
};

TempTracker.prototype.getMax = function() {
  return this.max;
};

TempTracker.prototype.getMin = function() {
  return this.min;
};

TempTracker.prototype.getMean = function() {
  return Math.floor(this.tempSum / this.countTemps);
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};

export default TempTracker;
