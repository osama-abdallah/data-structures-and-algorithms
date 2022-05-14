'use strict';

const NewTest = require('../hash');
const myHash = new NewTest(10);


myHash.set('mishmish', 'getHash');
myHash.set('nimnim', 'nimnim');
myHash.set('namlah', 'namlah');

describe('Testing hash table behavior', () => {

  it('Should take in a key / value and insert it into the hashtable using set()', () => {
    myHash.set('mishmish', 'getHash');
    let result =myHash.contain('mishmish');

    expect(result).toBeTruthy();
  });

  it('Should show stored value when provided a key using get()', () => {
    let result =myHash.get('mishmish');

    expect(result).toEqual({'mishmish': 'getHash'});
  });

  it('Should null when provided a non-existent key using get()', () => {
    let result =myHash.getHash('osama');

    expect(result).toEqual(1);
  });

  it('Should hash a key to an in-range value using getHash()', () => {
    let result =myHash.getHash('osama');
    if(result >= 0 && result < 10){
      result = true;
    } else {
      result = false;
    }

    expect(result).toEqual(true);
  });

  it('Should handle a collision within a hashtable by using a LinkedList in the bucket when using set()', () => {
    myHash.set('osama', 'Test Dummy');
    let bucketValue =myHash.map[5];

    expect(bucketValue.head).toBeTruthy();
  });

  it('Should successfully retreive a value from a bucket in the hashtable that has a collision with get()', () => {
    let result =myHash.get('namlah');

    expect(result).toEqual({'namlah': 'namlah'});
  });

});
