const obj = {
    name: 'John',
    age: 25,
    city: 'vas',
    print: () =>{
        console.log(this.name)
    }
}
const key = prompt("Enter Key")
console.log(obj.key)
obj.country = 'India'

console.log(obj)
