'use strict';

const validateBrackets = require('../stack-queue-brackets');

describe('Test Function', ()=>{

  test('if empty ==> false', ()=>{
    expect(validateBrackets('')).toBe(false);
  });

  test('if no brackets  ==> False ', ()=>{
    expect(validateBrackets('hello')).toBe(false);
  });

  test('if matching ==> True', ()=>{
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
  });

  test('if concatenated is matching ==> true ', ()=>{
    expect(validateBrackets('(){}[[]]')).toBe(true);
  });

  test('if concatenated with txt ==> True ', ()=>{
    expect(validateBrackets('{}{Emad}[Idris](())')).toBe(true);
  });

  test('if !matching opening ==> False', ()=>{
    expect(validateBrackets('{')).toBe(false);
  });

  test('if no opening ==> False', ()=>{
    expect(validateBrackets(')')).toBe(false);
  });

  test('if diffent type of brackets ==> False', ()=>{
    expect(validateBrackets('{)')).toBe(false);
  });

  test('if not Logic ==> False', ()=>{
    expect(validateBrackets('{(})')).toBe(false);
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(]hi(')).toBe(false);
  });

});
