# Stacks and Queues

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Challenge

* Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

* Stack
Create a Stack class that has a top property.

* push
* pop
* peek
* is empty

* Queue

* enqueue
* dequeue
* peek
* is empty

## Approach & Efficiency

All methods on all classes are O(1) for time and space.

# Stack-Queue-Pseudo

## Challenge Summary

Create a new class called pseudo queue, this PseudoQueue class will implement our standard queue interface, utilize 2 Stack instances to create and manage the queue using the following methods, enqueue with a Argument: value to insert value into the PseudoQueue, using a first-in, first-out approach. Also dequeue with a Argument: none to Extract a value from the PseudoQueue, using a first-in, first-out approach.

## Whiteboard Process

![image](./assets/stack-queue-pseudo.png)

## Approach &-Efficiency

O(1) for Both Methods

## Solution

enqueue (value)

1. Initialize a temporary stack; StackTwo, push() a value to the stack
2. Take the original input Stack, Stackone (if it exists) and push() it to stackt wo
Use the top of stackone as the top and Front
Optionally, set the back to the node from stackTwo
Set the value of stackone to stackTwo
4. Retuen (or hold in memory) stackone, delete stackt wo
dequeue()
5. Use the pop method from stackone to remove the first item in the queue
6. Return (or hold in memory) StackOne.
