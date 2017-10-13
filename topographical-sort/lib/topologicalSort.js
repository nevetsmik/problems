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

/*
  Topological Sort:
  Sort vertices (nodes) in direct acyclic graph (DAG) in linear order such that
  for every directed edge uv from vertex u to vertex v, u comes before v in the
  ordering.

  Example:
  A    B
   \ / |
    C  E
   /  /
  D  /
   \/
   F
   |
   G

  B E F G C D A is one example answer (DF)
  A C D F G B E is another (DF)
  A B C D E F G is another (BF)
*/

const Node = function(value) {
  this.value = value;
  this.children = [];
  this.inBound = 0;
};

Node.prototype.addChildren = function(...values) {
  this.children = this.children.concat(values);
};

export const topologicalSortBF = graph => {
  // 1. Count the incoming nodes for each node
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    // Iterate thru the edges of each node and increment inDegree for each edge
    for (let j = 0; j < vertex.children; j++) {
      let childNode = vertex.children[i];
      childNode.inBound += 1;
    }
  }

  // 2. Add nodes with inDegree === 0 to the inDegree queue
  let inDegree = [];
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    if (vertex.inBound === 0) {
      inDegree.push(vertex);
    }
  }

  // 3. Iterate through inDegree...
  let sorted = [];
  while (inDegree.length > 0) {
    let node = inDegree.shift();
    sorted.push(node);
    for (let i = 0; i < node.children.length; i++) {
      node.inDegree -= 1;
      if (node.inDegree === 0) {
        inDegree.push(node);
      }
    }
  }

  if (graph.length !== sorted.length) {
    return [];
  } else {
    return printStack(sorted).reverse();
  }
};

export const topologicalSortDF = graph => {
  // Create a stack to put all the nodes in sorted order
  // Create an object to remember all nodes that have already been visited
  let stack = [];
  let visited = {};

  // Iterate through the the nodes in the graph
  for (let i = 0; i < graph.length; i++) {
    // Skip over the ones that have already been visited
    let node = graph[i];
    if (visited.hasOwnProperty(node.value)) {
      continue;
    }

    // Call the topologicalSortHelper on each node
    topologicalSortHelperDF(node, visited, stack);
  }

  // Pop off elements off the stack in reverse order to get sorted nodes
  let answer = printStack(stack);
  console.log(answer);
};

const topologicalSortHelperDF = (node, visited, stack) => {
  // Add the visited node to visited
  visited[node.value] = true;

  // Iterate through each of the nodes children
  for (let i = 0; i < node.children.length; i++) {
    // Skip over the ones that have been visited
    let childNode = node.children[i];
    if (visited[childNode.value]) {
      continue;
    }

    // Recurse on the child node
    topologicalSortHelperDF(childNode, visited, stack);
  }

  // If there are no children or after all the children have been visited, then
  // push the node to the stack
  stack.push(node);
};

const printStack = stack => {
  let result = [];
  for (let i = stack.length - 1; i >= 0; i--) {
    let node = stack[i];
    result.push(node.value);
  }
  return result;
};

export default Node;
