'use strict';

const test = require('../index');

describe('Selection sort', () => {



  it('Can successfully sort an array', () => {


    expect(test([8,4,23,42,16,15])).toEqual( [4,8,15,16,23,42]);
  });

  it('Can successfully sort a reverse-sorted array', () => {


    expect(test([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
  });



  it('Can successfully sort a nearly-sorted array', () => {


    expect(test([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
  });
});
