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
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
  }
}

export default LinkedList;
