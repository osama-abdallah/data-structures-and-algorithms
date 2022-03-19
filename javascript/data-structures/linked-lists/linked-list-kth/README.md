# Challenge Summary
Write the following method for the Linked List class kth from end, argument a number k, as a parameter.
Return the node’s value that is k places from the tail of the linked list and you have access to the Node class and all the properties on the Linked List class
## Whiteboard Process
![image](./assets/linked-list-kth.png)

## Approach & Efficiency

* LinkedList.kthFromEnd - O(n)

## Solution

Wrote a code to pass the following tests and therefor is working as expected.
test when k is greater than the length of the linked listalso when k and the length of the list are the same and k is not a positive integer and also when the linked list is of a size 1 and finally “Happy Path” where k is not at the end, but somewhere in the middle of the linked list