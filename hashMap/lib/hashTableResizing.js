var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

export const makeHashTable = function(limit) {
  let maxSize = limit;
  let size = 0;
  let storage = [];

  const resize = function (direction) {
    if (direction === 'up') {
      maxSize = maxSize * 2;
    } else {
      maxSize = Math.floor(maxSize / 2);
    }

    let oldStorage = storage.slice();
    storage = [];
    size = 0;
    for (let i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i] === undefined) { continue; }
      for (let j = 0; j < oldStorage[i].length; j++) {
        hash.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
        size += 1;
      }
    }
    return hash;
  };

  let hash = {
    insert: function (key, value) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      storage[bucket] = storage[bucket] || [];
      let found = false;
      for (let i = 0; i < storage[bucket].length; i++) {
        if (storage[bucket][i][0] === key) {
          found = true;
          storage[bucket][i][1] = value;
        }
      }
      if (!found) {
        storage[bucket].push([key, value]);
        size += 1;
      }

      if (size > 0.75 * maxSize) {
        resize('up');
      }
    },

    retrieve: function (key) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      if (storage[bucket] === undefined) {
        return null;
      }
      let list = storage[bucket];
      for (let i = 0; i < list.length; i++) {
        if (list[i][0] === key) {
          return list[i][1];
        }
      }
      return null;
    },

    remove: function (key) {
      let bucket = getIndexBelowMaxForKey(key, maxSize);
      if (storage[bucket] === undefined) {
        return null;
      }

      let value;
      let list = storage[bucket];
      for (let i = 0; i < list.length; i++) {
        if (list[i][0] === key) {
          value = list[i][1];
          list.splice(i, 1);
          size -= 1;
        }
      }

      if (size < 0.25 * maxSize) {
        resize('down');
      }

      if (value) {
        return value;
      } else {
        return null;
      }
    }
  };

  return hash;
};
