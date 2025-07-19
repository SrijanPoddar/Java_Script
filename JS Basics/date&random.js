var min=10
var max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

let date=new Date()
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())

let mytimestamp=Date.now()
console.log(mytimestamp) // on milliseconds 
console.log(date.getTime())
console.log(Math.floor(mytimestamp/1000)) // seconds

console.log(date.toLocaleString('default',{
    month: 'long',
    year: 'numeric',
    day: '2-digit',
}))

