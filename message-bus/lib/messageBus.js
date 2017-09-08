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

// https://gist.github.com/tim-hr/697af278700fcf12014eb36d932ad7c4

export const messageBusBasic = function() {
  let obj = {};
  let messages = {};

  obj.subscribe = function(message, callback) {
    messages[message] = messages[message] || [];
    messages[message].push(callback);
  };

  obj.publish = function(message, payload) {
    messages[message].forEach(callback => {
      callback(payload);
    });
  };

  return obj;
};

export const messageBusExt1 = function() {
  let obj = {};
  let messages = {};

  obj.subscribe = function(options) {
    let channel = options.channel;
    let topic = options.topic;
    let callback = options.callback;

    messages[channel] = messages[channel] || {};
    messages[channel][topic] = messages[channel][topic] || [];
    messages[channel][topic].push(callback);
  };

  obj.publish = function(options) {
    let channel = options.channel;
    let topic = options.topic;
    let data = options.data;

    messages[channel][topic].forEach(callback => {
      callback(data);
    });
  };

  return obj;
};

export const messageBusExt2 = function() {
  let obj = {};
  let messages = {};

  obj.subscribe = function(options) {
    let channel = options.channel;
    let topic = options.topic;
    let callback = options.callback;

    messages[channel] = messages[channel] || {};
    messages[channel][topic] = messages[channel][topic] || [];
    messages[channel][topic].push(callback);
  };

  obj.publish = function(options) {
    let channel = options.channel;
    let topic = options.topic;
    let data = options.data;

    messages[channel][topic].forEach(callback => {
      callback(data);
    });
  };

  return obj;
};
