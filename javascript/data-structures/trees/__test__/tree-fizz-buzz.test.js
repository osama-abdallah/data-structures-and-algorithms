'use strict';

const test = require('../tree-fizz-buzz');

describe('testing fizzBuzzTree function', () => {

  const tree = new test.tree(3);

  tree.root = new test.node(0, tree.k);
  tree.root.children[0] = new test.node(1, tree.k);
  tree.root.children[1] = new test.node(2, tree.k);
  tree.root.children[2] = new test.node(3, tree.k);
  tree.root.children[0].children[0] = new test.node(4, tree.k);
  tree.root.children[0].children[1] = new test.node(5, tree.k);
  tree.root.children[1].children[0] = new test.node(6, tree.k);

  const fBT = test.fb(tree);

  it('should change numbers divisible by 3 to Fizz', () => {
    expect(fBT.root.children[2].value).toEqual('Fizz');
  });
  it('should change numbers divisible by 5 to Buzz', () => {
    expect(fBT.root.children[0].children[1].value).toEqual('Buzz');
  });
  it('should change numbers divisible by 3 and 5 to FizzBuzz', () => {
    expect(fBT.root.value).toEqual('FizzBuzz');
  });
  it('should change numbers not divisible by 3 or 5 to strings', () => {
    expect(fBT.root.children[1].value).toEqual('2');
  });
});
