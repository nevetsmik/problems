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
*/

/*
Given an array of words and a length l, format the text such that each line has exactly l characters
and is fully justified on both the left and the right. Words should be packed in a greedy approach;
that is, pack as many words as possible in each line. Add extra spaces when necessary so that each
line has exactly l characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on
a line does not divide evenly between words, the empty slots on the left will be assigned more
spaces than the slots on the right. For the last line of text and lines with one word only, the
words should be left justified with no extra space inserted between them.

Example:

For words = ["This", "is", "an", "example", "of", "text", "justification."]
and l = 16, the output should be

textJustification(words, l) = ["This    is    an", => 4, 1, 2, 1, 2
                               "example  of text",
                               "justification.  "]
*/

/*
A periodic sequence s is defined as follows:

s[0], a, b and m are all given positive integers;
s[i] for i > 0 is equal to (a * s[i - 1] + b) mod m.
Find the period of s, i.e. the smallest integer T such that for each i > k
(for some integer k): s[i] = s[i + T].

Example

For s0 = 11, a = 2, b = 6 and m = 12, the output should be
periodicSequence(s0, a, b, m) = 2.

The sequence would look like this: 11, 4, 2, 10, 2, 10, 2, 10, 2, 10....

For s0 = 1, a = 2, b = 3 and m = 5, the output should be
periodicSequence(s0, a, b, m) = 4.

The sequence would look like this: 1, 0, 3, 4, 1, 0, 3, 4, 1, 0, 3, 4....
*/
