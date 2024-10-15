# RingBuffer class in Python

A simple class implementation of a Ring Buffer in Python.

Methods:
- `__len__` - returns the current number of real elements in the array
- `append` - appends one or more elements, if maximum size of array is reached, it will start removing the oldest elements
- `__input_order` - returns the elements in the array by their input order, it is called by `__str__`
- `get_elements` - returns the elements in the array in their actual positions
- `substitute_el` - provides the ability to insert an element at a certain position in case such functionality is needed. In most common use cases such as an array for keeping logs, it won't be necessary.