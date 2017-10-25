/*
Collect all elements that have a matching class name.
*/

document.addEventListener("DOMContentLoaded", () => {
  let nodes = getElementsByClassName("navbar");
  console.log(nodes);
});

// BFS
const getElementsByClassName = className => {
  let result = [];
  let queue = [];
  queue[0] = document.body;

  while (queue.length > 0) {
    let current = queue.shift();
    if (current.classList.length > 0) {
      current.classList.forEach(el => {
        if (el === className) {
          result.push(current);
        }
      });
    }

    for (let i = 0; i < current.children.length; i++) {
      queue.push(current.children[i]);
    }
  }

  return result;
};

const testParentNode = id => {
  let node = document.getElementById(id).parentNode;
  return node;
};

// DFS
// const getElementsByClassName = className => {
//   let body = document.body;
//
//   const getElementsByClassNameHelper = node => {
//     let result = [];
//
//     if (node.classList) {
//       for (let i = 0; i < node.classList.length; i++) {
//         if (node.classList[i] === className) {
//           result.push(node);
//         }
//       }
//     }
//
//     for (let i = 0; i < node.children.length; i++) {
//       result = result.concat(getElementsByClassNameHelper(node.children[i]));
//     }
//
//     return result;
//   };
//
//   return getElementsByClassNameHelper(body);
// };
