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
let bankBalance=undefined
const buttonId=Symbol("id")
const aReallyLongNumber=902234589023489n

//Reference (Non Primitive)-Objects
/*
Arrays
Objects
Functions
*/
const numbers=[1,2,3,4,5]
const heroes=["superman","batman","shaktiman",true,123]
const userObject={
    name:"NSS",
    age:20,
    email:"nsshirude@pict.edu"
}

//Functions
const sayHello=function(){
    console.log("NSS")
}

const registerUser=function(){

}
const loginUser=function(){
    
}