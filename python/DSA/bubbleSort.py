def bubble(arr: list[int]) -> list[int]:
    length = len(arr) - 1

    while length > -1:
        swapped = False
        
        for i in range(0, length):
            if arr[i] > arr[i + 1]:
                arr[i + 1], arr[i] = arr[i], arr[i + 1]
                swapped = True
        
        if not swapped:
            break

        length -= 1

    return arr


print(bubble([4, 2, 1, 5, 6, 10, 0]))
