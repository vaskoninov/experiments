class Node:
    def __init__(self, data):
        self.prev = None
        self.next = None
        self.data = data


class DoublyLLst:

    def __init__(self):
        self.head = None
        self.tail = None
        self.__size = 0

    def __len__(self):
        return self.__size

    def __str__(self):
        return self.structure()

    def __one_el_dbllst(self):
        return self.head and self.head == self.tail

    def __clear_dbllst(self):
        data = self.head.data
        self.head = None
        self.tail = None
        self.__size -= 1
        return data

    # Utility methods

    def is_empty(self):
        """
        Returns True if list has no nodes
        """
        return self.__size == 0

    def structure(self):
        return " <-> ".join([str(el) for el in self.traverse_forward()])

    def clear(self):
        """
        Clears the list by setting head and tail to None, and resetting the size to 0.
        """
        self.head = None
        self.tail = None
        self.__size = 0

    # Insertion methods

    def insert(self, val):
        """
        A universal insert method, works basically as the list.append()
        """
        if self.head:
            self.insert_tail(val)
        else:
            self.insert_head(val)

    def insert_tail(self, val):
        """
        A method explicitly appending at the end of the list
        """
        node = Node(val)
        if self.__size == 0:
            self.head = node
            self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        self.__size += 1

    def insert_head(self, val):
        """
        A method allowing appendleft functionality
        """
        node = Node(val)
        if self.__size == 0:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
        self.__size += 1

    def insert_after(self, prev_val, val):
        """
        A method to insert a specific value node after a node with specific value
        """
        prev_node, _ = self.get_node(prev_val)

        if prev_node is None:
            raise ValueError(f"There is no {prev_val} in the list.")

        if prev_node == self.tail:
            self.insert_tail(val)
        else:
            new_node = Node(val)
            new_node.next = prev_node.next
            prev_node.next.prev = new_node
            new_node.prev = prev_node
            prev_node.next = new_node
            self.__size += 1

    # Delete methods

    def delete_tail(self):
        """
        A method to delete the tail of the list
        """
        if self.is_empty():
            return None
        if self.__one_el_dbllst():
            data = self.__clear_dbllst()
            return data
        data = self.tail.data
        self.tail = self.tail.prev
        self.tail.next = None
        self.__size -= 1
        return data

    def delete_head(self):
        """
        A method to delete the head of the list
        """

        if self.is_empty():
            return None
        if self.__one_el_dbllst():
            data = self.__clear_dbllst()
            return data
        data = self.head.data
        self.head = self.head.next
        self.head.prev = None
        self.__size -= 1
        return data

    def delete_after(self, prev_val):
        """
        A method to delete a node after a specific node
        """
        prev_node, _ = self.get_node(prev_val)

        if prev_node is None:
            # raise ValueError(f"There is no {prev_val} in the list.")
            return None

        if prev_node == self.tail:
            # raise ValueError(
            #     f"There is no node to delete after the node with {prev_val}"
            # )
            return None

        node_to_delete = prev_node.next

        if node_to_delete == self.tail:
            return self.delete_tail()

        data = node_to_delete.data
        prev_node.next = node_to_delete.next
        prev_node.next.prev = prev_node
        self.__size -= 1
        return data

    # Traversal methods

    def get_node(self, val) -> tuple[Node, int] | None:
        """
        A method to return a specific node and its place in the list based on its data
        """
        cur_node = self.head
        index = 0
        while cur_node:
            if cur_node.data == val:
                return cur_node, index
            cur_node = cur_node.next
            index += 1

        return None

    def traverse_forward(self):
        result = []

        cur_node = self.head
        while cur_node:
            result.append(cur_node.data)
            cur_node = cur_node.next

        return result

    def traverse_backward(self):

        result = []
        cur_node = self.tail
        while cur_node:
            result.append(cur_node.data)
            cur_node = cur_node.prev

        return result


if __name__ == "__main__":
    dobly = DoublyLLst()
    print(dobly.is_empty())
    dobly.insert(5)
    dobly.insert(4)
    node, index = dobly.get_node(4)
    print(node.data, index, sep=" at index ")
    dobly.insert_head(6)
    node, index = dobly.get_node(6)
    print(node.data, index, sep=" at index ")
    node, index = dobly.get_node(4)
    print(node.data, index, sep=" at index ")
    print(dobly.structure())
    print(str(dobly))
    print(dobly.traverse_forward())
