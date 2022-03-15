const Queue = require('../queue');

describe('Queue test', () => {
  test('should ', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.front.value).toBe(1);
    expect(newQueue.rear.value).toBe(1);
    expect(newQueue.front.next).toBe(null);
    expect(newQueue.rear.next).toBe(null);

  });
  test('should ', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.rear.value).toBe(2);
    expect(newQueue.rear.next).toBe(null);
    expect(newQueue.front.next.value).toBe(2);
  });
  test('should ', () => {
    const newQueue = new Queue();
    expect(newQueue.dequeue()).toBe(' No Node');
  });
  test('should ', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.front.value).toBe(2);
    expect(newQueue.front.next).toBe(null);
    expect(newQueue.rear.value).toBe(2);

    expect(newQueue.rear.next).toBe(null);

  });

  test('should ', () => {
    const newQueue = new Queue();
    expect(newQueue.peek()).toBe('No Node');
  });

  test('should ', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.peek()).toBe(1);
  });

  test('should ', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBe(null);
    expect(newQueue.rear).toBe(null);

  });

  test('should ', () => {
    const newQueue = new Queue();

    expect(newQueue.dequeue()).toBe(' No Node');
    expect(newQueue.peek()).toBe('No Node');

  });

});
