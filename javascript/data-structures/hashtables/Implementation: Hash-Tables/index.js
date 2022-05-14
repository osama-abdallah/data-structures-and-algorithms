'use strict';

const HashMap = require('./hash');

const myHash = new HashMap(10);


myHash.set('mishmish', 'getHash');
myHash.set('boogie', 'boogie');
myHash.set('nimnim', 'nimnim');
myHash.set('namlah', 'namlah');


myHash.map.forEach(data => {
  console.log(data);
});

console.log (myHash.get('mishmish'));
console.log (myHash.contain('mishmish'));

console.log(myHash);
