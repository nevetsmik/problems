const PersistentStack = function(el = null, stack) {
  this.stack = el;
  this.el = null;
};

PersistentStack.prototype.isEmpty = function() {
  return this.el === null;
};

PersistentStack.prototype.push = function(el) {
  return new PersistentStack(el, this);
};

PersistentStack.prototype.pop = function() {
  return this.stack;
};

PersistentStack.prototype.peek = function() {
  return this.el;
};

/*
http://blog.slaks.net/2013-06-23/creating-immutable-stack/
http://blog.boyet.com/blog/blog/making-a-stack-persistent-or-immutable/
*/
