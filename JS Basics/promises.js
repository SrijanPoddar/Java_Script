const promiseone = new Promise(function (resolve, reject) {
    // do an async task
    //BB calls , cryptography,networking, etc
    setTimeout(function () {
        console.log("Async task completed")
        resolve()
    }, 1000)
})

promiseone.then(function () {
    console.log("Promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 completed")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed")
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ user: "John", age: 30 })
    }, 1000)
})

promisethree.then(function (data) {
    console.log(data)
})


const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "John", password: "1234" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promisefour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("Promise completed either success or failure"))


const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "1234" })
        } else {
            reject("Error: JScript Error")
        }
    }, 1000)
})

async function consumePromise() {
    try {
        const response = await promisefive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()


// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error("There was a problem with the fetch operation:", error)
})