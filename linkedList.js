import Node from './node.js';

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  toString() {
    let currentNode = this.headNode;
    let result = '';

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return result + 'null';
  }

  //append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let lastNode = this.headNode;
    while (lastNode) {
      if (lastNode.nextNode === null) {
        lastNode.nextNode = newNode;
        break;
      }
      lastNode = lastNode.nextNode;
    }
  }

  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let currentNode = this.headNode;
    let count = 0;

    while (currentNode) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return count;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.nextNode === null) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
  }

  // at(index) returns the node at the given index
  at(index) {
    let currentNode = this.headNode;
    let count = 0;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
  }

  // pop removes the last element from the list
  pop() {
    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found
  find(value) {
    let currentNode = this.headNode;
    let count = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const previousNode = this.at(index - 1);
    if (!previousNode) return;
    const newNode = new Node(value, previousNode.nextNode);
    previousNode.nextNode = newNode;
  }

  // removeAt(index) that removes the node at the given index
  removeAt(index) {
    const previousNode = this.at(index - 1);
    if (!previousNode) return;
    previousNode.nextNode = previousNode.nextNode.nextNode;
  }
}

export default LinkedList;
