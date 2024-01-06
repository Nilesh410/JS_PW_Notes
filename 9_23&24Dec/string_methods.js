//1) eval method:- it is capable of executing any expression passed in it
let result=eval("2+2");

console.log(result)

//never used eval

//2)Template String
const obj={
    name:"Nilesh Suresh Shirude",
    Age:34,
    Gender:"Male"
}
let str=`Student Name is ${obj.name} and its age is ${obj.Age} and gender is ${obj.Gender}`
console.log(str)

//Regex:- Regular Expression
const regex=/[a-z]/;
const str1="Hello";
str1.match(regex)

