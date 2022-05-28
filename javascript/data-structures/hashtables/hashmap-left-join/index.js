'use strict';

const HashMap = require('./hash');
const leftJoin = require ('./left-join');
const myHash = new HashMap(10);
const myHash2 = new HashMap(10);

myHash.set('diligent', 'employed');
myHash.set('fond', 'enamored');
myHash.set('guide', 'usher');
myHash.set('outfit', 'garb');
myHash.set('wrath', 'anger');

myHash2.set('diligent','idle');
myHash2.set('fond','averse');
myHash2.set('guide','follow');
myHash2.set('flow','jam');
myHash2.set('wrath','delight');


console.log(leftJoin(myHash,myHash2));

