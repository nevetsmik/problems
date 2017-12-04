const Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};

export default Node;
