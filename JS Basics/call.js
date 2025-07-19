
function setname(username){
    this.username = username 
}

function user(username, password, isloggedin){
    setname(username)
    this.password = password
    this.isloggedin = isloggedin
}

user1 = new user("anca", 123, false) // username is not displyed because the call stack of the function is not in the user function
console.log(user1)

function user_new(username, password, isloggedin){
    setname.call(this,username)
    this.password = password
    this.isloggedin = isloggedin
}

user2 = new user_new("anca", 123, false) 
console.log(user2) // username is displayed because the call stack of the function is in the user function

