var myarr = [1, 2, 3, 4, true, "srijan", [12, 34, 5]]
console.log(myarr[5])
const arr2 = new Array(2, 3, 4, 5)
console.log(arr2.length) //length of array
arr2.push(9) //add element at end of array
console.log(arr2) 
myarr.pop() //remove last element of array
console.log(myarr) 
myarr.unshift(9) //add element at start of array
console.log(myarr)
myarr.shift() //remove first element of array
console.log(myarr)
console.log(myarr.indexOf(3))
console.log(myarr.includes(9))
const newarr = myarr.join()
console.log(newarr)
console.log(typeof newarr)


//slice and splice
const myarr2 = [1, 2, 3, 4, 5, 6]
console.log("slicing and splicing of array")
console.log("A:",myarr2)
console.log(myarr2.slice(2,5))
console.log("A after slicing:",myarr2)
console.log(myarr2.splice(2,5))
console.log("A after splicing:",myarr2)


var arr3=myarr.concat(myarr2) //concat two arrays
console.log(arr3)

const arr4=[...arr3, ...myarr2] //spread operator
console.log(arr4)
console.log(Array.isArray('srijan'))
console.log(Array.from('srijan')) //convert string to array