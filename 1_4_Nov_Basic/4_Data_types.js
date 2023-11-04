//Primitive
/*
String :- multiple chars
Number:- int, float
Boolean:- true or false
Null:- Nothing 
Undefined:- Nothing
Symbol:- Unique
BigInt:- very large number
*/
const firstname="NSS"
console.log("Datatype of firstname:-",typeof(firstname))
const age=34
console.log("Datatype of age:-",typeof(age))
const score=200
console.log("Datatype of score:-",typeof(score))
let isLoggedin=true
console.log("Datatype of isLoggedin:-",typeof(isLoggedin))
const nodeversion=null
console.log("Datatype of nodeversion:-",typeof(nodeversion))
let bankBalance=undefined
console.log("Datatype of bankBalance:-",typeof(bankBalance))
const buttonId=Symbol("id")
console.log("Datatype of buttonId:-",typeof(buttonId))
const aReallyLongNumber=902234589023489n
console.log("Datatype of aReallyLongNumber:-",typeof(aReallyLongNumber))

//Reference (Non Primitive)-Objects
/*
Arrays
Objects
Functions
*/
const numbers=[1,2,3,4,5]
console.log(numbers)

const heroes=["superman","batman","shaktiman",true,123]
console.log(heroes)

const userObject={
    name:"NSS",
    age:20,
    email:"nsshirude@pict.edu"
}
console.log(userObject)

//Functions
const sayHello=function(){
    console.log("NSS")
}
console.log(sayHello)
const registerUser=function(){

}
const loginUser=function(){

}