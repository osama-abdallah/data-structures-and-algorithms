const Stack = require('../stack');


describe('Test Stack', () => {
  test('should ', () => {
    const newStack = new Stack();

    expect(newStack.top).toBe(null);

  });
  test('should ', () => {
    const newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
    expect(newStack.top.next).toBe(null);
  });

  test('should ', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.top.value).toBe(2);
    expect(newStack.top.next.value).toBe(1);
  });

  test('should ', () => {
    const newStack = new Stack();
    newStack.pop();

    expect(newStack.pop()).toBe('Is empty');

  });

  test('should ', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(newStack.pop()).toBe(2);

  });
  test('should ', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBe(null);

  });
  test('should ', () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);


    expect(newStack.peek()).toBe(2);

  });
  test('should ', () => {
    const newStack = new Stack();

    expect(newStack.pop()).toBe('Is empty');
    expect(newStack.peek()).toBe('No node');


  });


});
