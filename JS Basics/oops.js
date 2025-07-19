function user(username, password, isloggedin) {
    this.username = username
    this.password = password
    this.isloggedin = isloggedin
    //return this // when we return this, we can access the properties of the object
}

user1 = new user("anca", 123, false)
user2 = new user("maria", 123, true)
console.log(user1)
console.log(user2)


String.prototype.truelength = function (){
    return this.trim().length
}

console.log("   anca   ".truelength()) // 4

// all stings array and objects are objects in js
