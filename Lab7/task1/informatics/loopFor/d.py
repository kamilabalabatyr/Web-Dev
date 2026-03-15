x = int(input())
d = int(input())

count = 0

for i in range(len(str(x))):
    if x % 10 == d:
        count += 1
    x //= 10

print(count)
