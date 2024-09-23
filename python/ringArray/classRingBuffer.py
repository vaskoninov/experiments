class RingArray:

    def __init__(self, max_size):
        self.max_size = max_size
        self.index = 0
        self.__data = [None] * self.max_size

    def __len__(self):
        return len(self.__data)

    def append(self, *els):
        """
        An append method allowing adding more than one element
        """

        for el in els:
            self.index = (
                self.index
                if self.max_size > len(self.__data)
                else self.index % self.max_size
            )
            self.__data[self.index] = el
            self.index += 1

    def __input_order(self):
        """
        Returns the elements in the ring array by order of input
        - from older to most recent
        """
        return self.__data[self.index :] + self.__data[: self.index]

    def get_elements(self):
        """
        A method returning the actual self.__data order of elements
        """
        return self.__data

    def __str__(self):
        return f"{self.__input_order()}"


if __name__ == "__main__":
    ring = RingArray(5)
    print(len(ring))
    ring.append("hello", "welcome", "wow", "you", "www", "11111")
    print(ring)
    ring.append("start")
    print(ring)
    # print(ring.get())
    ring.append("check")
    print(ring)
    print(ring.get_elements())
