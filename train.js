/*Problem 1
 
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays
*/

function z(x, y) {
  let res = 0;
  for (let i = 0; i < x.length; i++) {
    if (!y.includes(x[i])) res = res + x[i];
  }
  for (let j = 0; j < y.length; j++) {
    if (!x.includes(y[j])) res = res + y[j];
  }
  return res;
}

z([1, 2, 3], [1, 4, 7, 5]);

/*Problem 2 
You are asked to write an algorithm that fulfill the following: 

Name: Dot product
Description:
Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modify the previous algorithm if you use a dot_product function instead of a procedure.*/

function Dot_product(v1, v2) {
  let s = 0;
  for (let index = 0; index < v1.length; index++) {
    s = s + v1[index] * v2[index];
  }
  if (s === 0) {
    console.log(`two vectors are orthogonal and the ps= ${s}`);
    return "two vectors are orthogonal and the ps =" + s;
  } else {
    console.log(`two vectors are nott orthogonal and the ps= ${s}`);

    return "two vectors arenot  orthogonal and the ps =" + s;
  }
}

Dot_product([3, 1, 7, 9], [2, 4, 1, 9]);
