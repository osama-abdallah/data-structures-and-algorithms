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
    const check = ll.include('b');
    expect(true).toEqual(check);
  });


});

describe('Testing conversion to string', () => {

  it('testing stringTo', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    const res = ll.stringTo();
    expect('{c} -> {b} -> {a} -> NULL').toEqual(res);
  });

});