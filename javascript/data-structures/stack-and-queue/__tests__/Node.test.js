'use strict';
const Node = require('../Node');
describe('Node Module', ()=> {
  it('constructor()', ()=> {
    let value = 2;
    let newNode = new Node(value);
    expect(newNode.value).toEqual(value);
    expect(newNode.next).toBeNull();
  });
});
