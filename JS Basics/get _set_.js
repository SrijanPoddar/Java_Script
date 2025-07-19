class Person {
    constructor(name) {
        this._name = name; // Private property convention
    }

    // Getter
    get name() {
        return this._name;
    }

    // Setter
    set name(newName) {
        if (newName && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    }
}

const person = new Person("Alice");
console.log(person.name); // Output: Alice

person.name = "Bob";
console.log(person.name); // Output: Bob

person.name = ""; // Invalid name
console.log(person.name); // Output: Bob