printTakes('hello')      // Can be used before declaration

function printTakes(a){  // Can be defined several times with same name 
    console.log(a)       // Hence we assign it to a let or const 
}
// printTakes2('hello')     // Cannot be used before declaration
const printTakes2 = function (a){
    console.log('hi', a)
}

const view = (a) => {
    console.log('hi', a)
} 

printTakes2('hello')
view('hello')

const sumFunc = (a,b) =>{
    console.log((a+b)%10)
}
sumFunc(10,22)

