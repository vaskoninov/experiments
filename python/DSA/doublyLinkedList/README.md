# Doubly-Linked List

This is a custom implementation of a **doubly linked list** in Python. A doubly linked list is a data structure where each node contains a reference to both the previous and the next node, allowing for efficient traversal in both directions.

## Data Attributes
- `self.__size`: An internal attribute that keeps track of the number of nodes (the length) of the list.

## Methods

### General Methods:
- `__len__()`: Returns the length of the list (i.e., the number of nodes).
- `is_empty()`: Returns `True` if the list contains no nodes, `False` otherwise.
- `structure()`: Returns a string representation showing the structure of the list, with nodes separated by `" <-> "`.
- `clear()`: Resets the list by removing all nodes and setting the size to zero.

### Insertion Methods:
- `insert(val)`: A general insertion method, similar to `list.append()`. It appends a new node at the end of the list.
- `insert_head(val)`: Inserts a new node at the beginning of the list.
- `insert_tail(val)`: Inserts a new node explicitly at the end of the list.
- `insert_after(prev_val, val)`: Inserts a new node with value `val` after the node containing `prev_val`.

### Deletion Methods:
- `delete_tail()`: Deletes the last node in the list and returns its value.
- `delete_head()`: Deletes the first node in the list and returns its value.
- `delete_after(prev_val)`: Deletes the node after the node containing `prev_val` and returns the value of the deleted node.

### Utility Methods:
- `get_node(val)`: Searches for a node by its value. If found, returns a tuple `(node, index)` where `node` is the found node and `index` is its zero-based position in the list. Returns `None` if the node is not found.
  
### Traversal Methods:
- `traverse_forward()`: Traverses the list from the beginning to the end, returning a list of node values in the order they appear.
- `traverse_backward()`: Traverses the list from the end to the beginning, returning a list of node values in reverse order.


