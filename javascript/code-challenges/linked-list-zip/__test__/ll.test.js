'use strict';

const LinkedList = require('../ll');

describe('Linked List', () => {
  it('throws an error if either linked lists is empty', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    const errorMessage = LinkedList.zipLists(listOne, listTwo);
    expect(errorMessage.message).toBe('Linked list one is empty');
  });
  it('works if `linkedListOne` is smaller than `linkedListTwo`', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    listOne.append('one');
    listOne.append('three');

    listTwo.append('two');
    listTwo.append('four');
    listTwo.append('five');

    const zipReturn = LinkedList.zipLists(listOne, listTwo);
    expect(zipReturn.value).toBe('one');
  });
  it('works if `linkedListTwo` is smaller than `linkedListOne`', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    listOne.append('one');
    listOne.append('three');
    listOne.append('five');

    listTwo.append('two');
    listTwo.append('four');

    const zipReturn = LinkedList.zipLists(listOne, listTwo);
    expect(zipReturn.value).toBe('one');
  });
});
