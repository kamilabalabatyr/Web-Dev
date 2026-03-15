a = int(input())

for i in range(len(str(a))):
    print(a%10, end="")
    a//=10