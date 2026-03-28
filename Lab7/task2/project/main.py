from models import Animal, Dog, Cat

def main():

    dog = Dog("Aqtos", 3, "Brown", "Labrador")
    cat = Cat("Rex", 2, "Black", True)

    animals = [dog, cat]

    for a in animals:
        print(a)          
        print(a.info())     
        print(a.speak())
        if a == dog:
            print(dog.fetch())
            print()
        elif a == cat:
            print(cat.scratch())
            print()

if __name__ == "__main__":
    main()