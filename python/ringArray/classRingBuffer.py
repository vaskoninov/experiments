class RingBuffer:

    def __init__(self, max_size):
        self.max_size = max_size
        self.index = 0
        self.__current_size = 0
        self.__data = [None] * self.max_size

    def __len__(self) -> int:
        return self.__current_size

    @property
    def max_size(self):
        return self.__max_size

    @max_size.setter
    def max_size(self, value):
        """
        A setter for the max_size of the array, assuring that a correct value

        for the length of the array is entered.
        """
        if not isinstance(value, int):
            raise ValueError("Please insert a valid number")
        if value <= 0:
            raise ValueError("Please insert a number bigger than 0")
        self.__max_size = value

    def append(self, *els):
        """
        An append method allowing adding more than one element
        - if more than self.max_size elements are provided, it will start appending them

        from the beginning of the array removing the first added to the list
        """

        for el in els:
            self.__data[self.index] = el
            self.index = (self.index + 1) % self.max_size
            self.__current_size = min(self.__current_size + 1, self.max_size)

    def __input_order(self):
        """
        Returns the elements in the ring array by order of input by the __append__ method
        - from older to most recent
        """
        if self.__current_size < self.max_size:
            return self.__data[: self.index]
        return self.__data[self.index :] + self.__data[: self.index]

    def get_elements(self):
        """
        A method returning the actual self.__data order of elements
        """
        return self.__data

    def substitute_el(self, value, idx):
        """
        A method to implement insert functionality
        - do not use it if using the class as for relying on
        the order and time of appending elements
        """
        if idx in range(0, self.max_size):
            self.__data[idx] = value

    def __str__(self):
        return f"{self.__input_order()}"


if __name__ == "__main__":
    ring = RingBuffer(5)
    print(len(ring))
    ring.append("hello")
    print(len(ring))
    ring.append("hello", "welcome", "wow", "you", "www")
    print(ring.get_elements())
    print(ring)
    ring.append("start")
    print(ring)
    print(ring.get_elements())
    # ring.substitute_el("gru", 3)
    # print(ring.get_elements())
