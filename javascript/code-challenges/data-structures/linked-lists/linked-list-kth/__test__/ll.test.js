'use strict';

const LinkedList = require('../ll');

describe('Linked List', () => {

  it('k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    const errorMessage = list.kthFromEnd(6);
    expect(errorMessage.message).toBe('Search is beyond length of linked list');
  });
  it('k and the linked list length are the same', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    expect(list.kthFromEnd(4)).toBe('one');
  });
  it('k is not a positive integer', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    const errorMessage = list.kthFromEnd(-1);
    expect(errorMessage.message).toBe('Passed argument must be a positive integer');
  });
  it('finds a value at the k-th place where k=1 and the linked list has 1 node', () => {
    const list = new LinkedList();
    list.append('one');
    expect(list.kthFromEnd(1)).toBe('one');
  });
  it('finds a value at the k-th place in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    list.append('five');
    list.append('six');
    list.append('seven');
    list.append('eight');
    list.append('nine');
    expect(list.kthFromEnd(4)).toBe('five');
    expect(list.kthFromEnd(3)).toBe('six');
    expect(list.kthFromEnd(5)).toBe('four');
  });
});
