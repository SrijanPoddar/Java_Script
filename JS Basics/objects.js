// JavaScript Objects

// Creating an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    // Method inside an object
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing Object Properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// Accessing Nested Object Properties
console.log(person.address.city); // New York

// Calling Object Methods
console.log(person.fullName()); // John Doe

// Adding New Properties
person.gender = "male";
console.log(person.gender); // male

// Modifying Properties
person.age = 31;
console.log(person.age); // 31

// Deleting Properties
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// Looping Through an Object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if a Property Exists
console.log("hobbies" in person); // true

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "hobbies", "address", "fullName", "gender"]
console.log(Object.values(person)); // ["John", "Doe", 31, Array(3), Object, Function, "male"]
console.log(Object.entries(person)); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Object Destructuring
const { firstName, age } = person;
console.log(firstName, age); // John 31

// Spread Operator with Objects
const updatedPerson = { ...person, country: "USA" };
console.log(updatedPerson);

// Merging Objects
const additionalInfo = { isMarried: false, occupation: "Engineer" };
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);

// destructureing with default values
const { firstName: fName, age: personAge, country = "Unknown" } = person;
console.log(fName, personAge, country); // John 31 Unknown