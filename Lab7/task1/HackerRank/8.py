if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = sorted(set([s[1] for s in students]))
    second = scores[1]

    names = []

    for s in students:
        if s[1] == second:
            names.append(s[0])

    for n in sorted(names):
        print(n)
