for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);    
}
let i = 0
while (i < 10) {
    //console.log(i);
    i++;
}

do {
    //console.log(i)
    i++
} while (i < 4);

// for of loop gives values of iterable objects

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    //console.log(element)
}

// Map
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India")
for (const [key, value] of map) {
    // console.log(`${key}:-${value}`)
}

// for in loop gives keys of object

const myobj = {
    name: "Srijan",
    age: 30,
    isEmployed: true
}
for (const key in myobj) {
    //console.log(`${key}:-${myobj[key]}`)
}


// for each loop gives values of iterable objects

const arr1 = [1, 2, 3, 4, 5]
arr1.forEach((element, index) => {
    //console.log(`${index}:-${element}`)
})


printme = (value, index) => {
    console.log(index, value)
}

// arr1.forEach(printme)


const aa = [
    { name: "Srijan", age: 30 },
    { name: "hbsdn", age: 53 },
    { name: "Ssdsdvan", age: 36 },
    { name: "Srisdvvsdv", age: 35 }
]
aa.forEach((item) => {
    //console.log(item.name+":-"+ item.age)  // for each has no return type it's undefined 
}
)


// filter

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newnums = mynums.filter(
    (nums) => nums % 2 == 0
)
console.log(newnums)

// map

newnums = mynums.map(
    (num) => num * 2
)
console.log(newnums)

// cahining filter and map

newnums = mynums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(newnums)

// reduce

newnums = mynums.reduce((acc, value) => acc + value, 0)
console.log(newnums)

