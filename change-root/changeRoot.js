/*
You are given an array parent of length n specifying a tree. The vertices of the tree are numbered
from 0 to n - 1 and parent[i] is the parent of the ith node. The root of the tree is the vertex v,
the parent of which is the same vertex (i.e. parent[v] = v if and only if v is a root).

What will the parent array look like if the edges remain the same but tree is rooted at the other
vertex newRoot?

For parent = [0, 0, 0, 1] and newRoot = 1, the output should be
changeRoot(parent, newRoot) = [1, 1, 0, 1].

For parent = [0, 0, 0, 1, 1, 1, 2, 2, 7] and newRoot = 7, the output should be
changeRoot(parent, newRoot) = [2, 0, 7, 1, 1, 1, 2, 7, 7]
*/

/*
Start with:
0: 0, 1, 2
1: 3

Intermediate:
0:
1:

End with
0: 2
1: 0, 1, 3

[1, 1, 0, 1]
*/

/*
Example 2:
Start with:
0: 0, 1, 2
1: 3, 4, 5
2: 6, 7
7: 8

Intermediate:
0: 1
1: 3, 4, 5
2: 0, 6
7: 2, 7, 8

End with
0: 1
1: 3, 4, 5
2: 0, 6
7: 2, 7, 8

[2, 0, 7, 1, 1, 1, 2, 7, 7]
*/


export const changeRoot = (parentArray, newRoot) => {
  let beforeAList = createAdjacencyList(parentArray);
  let afterAList = createAdjacencyList();
  let newParentArray = [];

  Object.keys(beforeAList).forEach(node => {
    node = parseInt(node);
    beforeAList[node].forEach(edge => {
      if (node !== edge) {
        if (beforeAList.hasOwnProperty(edge) && beforeAList[edge].includes(newRoot)
        || edge === newRoot) {
            afterAList[edge] = afterAList[edge] || [];
            afterAList[edge].push(node);
        } else {
          afterAList[node] = afterAList[node] || [];
          afterAList[node].push(edge);
        }
      }
    });
  });

  afterAList[newRoot] = afterAList[newRoot] || [];
  afterAList[newRoot].push(newRoot);

  newParentArray = createParentArray(afterAList);
  return newParentArray;
};

const createParentArray = adjacencyList => {
  let parentArray = [];
  Object.keys(adjacencyList).forEach(node => {
    adjacencyList[node].forEach(edge => {
      parentArray[edge] = parseInt(node);
    });
  });
  return parentArray;
};

const createAdjacencyList = (parentArray = []) => {
  let aList = {};
  parentArray.forEach((parent, child) => {
    aList[parent] = aList[parent] || [];
    aList[parent].push(child);
  });
  return aList;
};
/*
1. Iterate through the parent array and create an original adjacency list of nodes and edges
2. Create a resulting adjacency list
3. Iterate through the edges of each node in the original adjacency list
4. If the edge is equal to the node then skip to the next edge
5. If the edge has a parent and the edges in the parent lead to the new vertex or the edge is the
new root, then add the original node as an edge to the resulting parent node, which is the edge of
the original node
6. If the edge has no parent, then add the edge to the resulting parent node, which is the edge of
the original node
7. Add the newRoot to the resulting adjacency list
8. Iterate through the edges of each node in the resulting adjacency list and create the new parent
array
*/
