const Node = function (key, value) {
  this.value = [key, value];
  this.prev = null;
  this.next = null;
};

export default Node;
