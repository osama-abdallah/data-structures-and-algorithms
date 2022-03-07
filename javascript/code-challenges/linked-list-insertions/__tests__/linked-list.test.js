'use strict';

const LinkedList = require('../ll');

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
