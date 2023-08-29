/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  traverse() {
    let currentNode = this.first;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  // THESE INSTRUCTIONS ARE WRONG
  // WE ARE NOT PUSHING TO THE END OF THE STACK
  // WE ARE PUSHING TO THE BEGINNING OR TOP
  /** push(val): add new value to end of the stack. Returns undefined. */
  
  // Node1 --> Node2 --> Node3 --> Node4
  // 0         1         2         3
  //                               --> NewNode

  push_wrong_instructions(val) {
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

  // Node1 --> Node2 --> Node3 --> Node4
  // 0         1         2         3
  // this.first is now Node1
  // NewNode --> Node1
  // Node1 --> Node2                              

push (val) {
  const newNode = new Node(val);

  if (this.size === 0) {
    this.first = newNode;
    this.last = newNode;
    this.size = 1;
    return undefined;
  } else {
    newNode.next = this.first
    this.first = newNode;
    this.size += 1;
    return undefined;
  }
}


  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  // Node1 --> Node2 --> Node3 --> Node4
  // 0         1         2         3

  pop() {
    if (this.size === 0 || this.first === null) {
      throw Error("Stack is empty!");
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

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0 || this.first === null) {
      return undefined;
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0 || this.first === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;

