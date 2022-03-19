'use strict';
let PseudoQueue = require('../stack-queue-pseudo');

describe('PseudoQueue methods', () => {
  describe('Basic Tests', () => {
    it('successfully instantiates an empty pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      expect(pqueue.front).toBeNull();
      expect(pqueue.rear).toBeNull();
      expect(pqueue.isEmpty()).toBe(true);
    });
  });
  describe('enqueue() method', () => {
    it('successfully enqueue a value onto a pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.front.value).toEqual('tacos');
    });
    it('successfully enqueue multiple values on to a pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.enqueue('burritos');
      pqueue.enqueue('tortas');
      expect(pqueue.front.value).toEqual('tortas');
    });
  });
  describe('dequeue() method', () => {
    it('successfully dequeues out of a pseudoqueue the expected value', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.dequeue()).toEqual('tacos');
    });

    it('raises an exception if dequeue is called on an empty pseudoqueue', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.dequeue();
      expect(() => {
        pqueue.dequeue();
      }).toThrow('Can not remove from an empty pseudostack!');
    });
  });
  describe('PseudoQueue\'s peek() method', () => {
    it('successfully peeks into a pseudostack, seeing the expected value', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      expect(pqueue.peek()).toEqual('tacos');
    });
    it('raises an exception if peek is called on an empty pseudostack', () => {
      let pqueue = new PseudoQueue();
      pqueue.enqueue('tacos');
      pqueue.dequeue();
      expect(() => {
        pqueue.peek();
      }).toThrow('Can not peek at an empty pseudoqueue!');
    });
  });
});
