### Checks Way of circulating a list indexes
lst = [0, 1, 2, 3, 4, 5]

for i in lst:
    print(i % len(lst))

print(6 % len(lst))
