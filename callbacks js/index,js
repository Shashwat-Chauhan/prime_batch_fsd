const sum = (a,b) => {
    const ans = a+b
    return ans
}

const printPretty = (txt) => {
    console.log("---------------------")
    console.log(txt)
    console.log("---------------------")
}

printPretty(sum(10,20)) // This is not a Callback

//Callback ----> When you pass one function as a parameter to another function 

const add = (a,b,c) => {
    const ans = a+b
    c(ans)
}

add(20, 30 , printPretty) // This is a Callback (Inversion of control)

/* 
A higher-order function is a function that does one of the following:
1) Takes another function as an argument.
2) Returns another function as its result. 
*/









