# Linked List Implementation

This project is an implementation of a singly linked list in JavaScript using ES6 modules. It provides basic operations for a linked list, such as adding, removing, and finding elements.

## Table of Contents

- [Linked List Implementation](#linked-list-implementation)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Example](#example)
  - [LinkedList Class Methods](#linkedlist-class-methods)
  - [Node Class](#node-class)
    - [Node Properties](#node-properties)
  - [Testing](#testing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/annisssimo/linked-list.git
   cd linked-list
   ```

2. **Initialize Node.js:**

   Ensure that Node.js is installed on your machine. Initialize the project with:

   ```bash
   npm init -y
   ```

3. **Enable ES6 Modules:**

   Modify your `package.json` to use ES6 modules by adding:

   ```json
   {
     "type": "module"
   }
   ```

## Usage

This implementation provides a `LinkedList` class and a `Node` class, which can be used to create and manipulate a singly linked list.

### Example

```javascript
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');

console.log(list.toString());
// Output: ( dog ) -> ( cat ) -> ( parrot ) -> null

list.prepend('elephant');
console.log(list.toString());
// Output: ( elephant ) -> ( dog ) -> ( cat ) -> ( parrot ) -> null

list.pop();
console.log(list.toString());
// Output: ( elephant ) -> ( dog ) -> ( cat ) -> null

console.log('Size:', list.size());
// Output: Size: 3
```

## LinkedList Class Methods

- `append(value)` - Adds a new node containing `value` to the end of the list.
- `prepend(value)` - Adds a new node containing `value` to the start of the list.
- `size()` - Returns the total number of nodes in the list.
- `head()` - Returns the first node in the list.
- `tail()` - Returns the last node in the list.
- `at(index)` - Returns the node at the given `index`.
- `pop()` - Removes the last element from the list.
- `contains(value)` - Returns `true` if the list contains a node with the given `value`.
- `find(value)` - Returns the index of the node containing `value`, or `null` if not found.
- `toString()` - Returns a string representation of the list.
- `insertAt(value, index)` - Inserts a new node with the provided `value` at the given `index`.
- `removeAt(index)` - Removes the node at the given `index`.

## Node Class

The `Node` class is used internally by the `LinkedList` class to represent the individual elements (nodes) in the list.

### Node Properties

- `value` - The value contained in the node.
- `nextNode` - A reference to the next node in the list (or `null` if there is no next node).

## Testing

You can test the functionality of the linked list by running the `main.js` file:

```bash
node main.js
```

The `main.js` file contains sample code to create and manipulate a linked list.