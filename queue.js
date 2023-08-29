/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
      return undefined;
    } else {
      let currentNode = this.first;
      while (currentNode) {
        if (!currentNode.next) {
          currentNode.next = newNode;
          this.last = newNode;
          this.size += 1;
          return undefined;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0 || this.first === null) {
      throw Error("Queue is empty!");
    } else {
      const returnValue = this.first.val;
      if (this.first === this.last) {
        this.first = null;
        this.last = null;
        this.size = 0;
        return returnValue;
      } else {
        this.first = this.first.next;
        if (!this.first.next) {
          this.first = this.last;
        }
        this.size -= 1;
        return returnValue;
      }
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0 || this.first === null) {
      return undefined;
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  
  isEmpty() {
    if (this.size === 0 || this.first === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
