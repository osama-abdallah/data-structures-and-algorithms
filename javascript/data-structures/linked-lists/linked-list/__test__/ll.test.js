'use strict';

const LinkedList = require('../ll');

describe('testing Linked List', () => {
  it('test creating an LL instance', () => {
    const ll = new LinkedList();

    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe('insert to the beginning of the LL', () => {

  it('add to an empty LL', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });

  it('add to a non-empty LL', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });
});

describe('Testing the avaliablity of node', () => {

  it('testing Include ', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    ll.insert('d');
    const check = ll.includes('b');
    expect(true).toEqual(check);
  });


});

describe('Testing conversion to string', () => {

  it('testing stringTo', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    const res = ll.toString();
    expect('{c} -> {b} -> {a} -> NULL').toEqual(res);
  });

});

describe('Linked List', () => {

  it('inserts new node(s) at the END of the list', () => {
    const list = new LinkedList();
    list.append('thing');
    list.append('other thing');
    list.append('more stuff');
    let currentNode = list.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual('more stuff');
    expect(currentNode.next).toBeNull();
  });
  it('inserts new node BEFORE the `thing` at middle of the list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing');
    list.append('thing too');
    list.insertBefore('thing', 'test me');
    let currentNode = list.head;
    while(currentNode.next.value !== 'thing') {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual('test me');
    expect(currentNode.next.value).toEqual('thing');
  });
  it('inserts a node BEFORE the `thing` at the head of a linked list', () => {
    const list = new LinkedList();
    list.append('thing');
    list.append('other thing');
    list.append('thing too');
    list.insertBefore('thing', 'test me');
    let currentNode = list.head;
    while(currentNode.next.value !== 'thing') {
      currentNode = currentNode.next;
    }
    expect(list.head.value).toEqual('test me');
    expect(list.head.next.value).toEqual('thing');
  });
  it('inserts new node AFTER the `thing` at middle of the list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing');
    list.append('thing too');
    list.insertAfter('thing', 'test me');
    let currentNode = list.head;
    while(currentNode.next.value !== 'test me') {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual('thing');
    expect(currentNode.next.value).toEqual('test me');
  });
  it('inserts a node AFTER the `thing` at the tail of a linked list', () => {
    const list = new LinkedList();
    list.append('other thing');
    list.append('thing too');
    list.append('thing');
    list.insertAfter('thing', 'test me');
    let currentNode = list.head;
    while(currentNode.value !== 'thing') {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toEqual('thing');
    expect(currentNode.next.value).toEqual('test me');
    expect(currentNode.next.next).toBeNull();
  });

  it('inserts a new node at the list beginning', () => {
    const list = new LinkedList();
    list.insert('thing');
    list.insert('other thing');
    list.insert('more stuff');
    expect(list.head.value).toEqual('more stuff');
  });
});

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

