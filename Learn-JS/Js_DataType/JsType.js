console.log("Learn data types...!")

//Premitive datatypes

// String => "Hello"
// Symbol => Use for uniqueness
// Boolean => true | false
// BigInt => number range about 53 power of 2 
// null => null is object standalone value
// Number => 
// undefined => not define with any value

//Non-Premitive datatypes

//Object
//Array group of same data type value with unique index number 0 to n 

let str = "Hello World"
let symbol1 = Symbol("Hello")
let symbol2 = Symbol("Hello1")

let Boolean = true || false
let BigInt = 1212121212222444
let nullable = null
let number = 123
let undefined

let obj = {
    "setName":"Renish Limbasiya",
    "getName": function(){
        return this.setName
    }
}

let array = [1,2,3,4,5];

console.log(symbol1===symbol2)
