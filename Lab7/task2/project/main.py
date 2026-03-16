from models import Animal, Dog, Cat

def main():

    dog = Dog("Buddy", 3, "Brown", "Labrador")
    cat = Cat("Luna", 2, "Black", True)
    animal = Animal("Generic", 5, "Gray")

    animals = [dog, cat, animal]

    for a in animals:
        print(a)          
        print(a.info())     
        print(a.speak())
        print()

if __name__ == "__main__":
    main()