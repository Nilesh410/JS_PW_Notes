var teacher="Nilesh Shirude" //gloal scope

function fun() //gloal scope
{
    var teacher="Siddesh" //function scope
    content="JS" //no formal decleration , no scope resolution
    console.log("Hello",teacher)    
}
function gun() //global scope
{
    var student="Apurva" //function scope
    console.log("Welcome to the class",student)
}
fun()
gun()

console.log(teacher,content)
/*
1)compilation scope=> varaibel scanning

2) execution phase
 teacher => Nilesh shirude
 fun()=> teacher -> siddhesh -> function scope
content-> it is not in the function scope, 
go the global scope -> not find-> search in global scope but did not find then allocate as global scope during execution phase
- it is out of the rule -> fundamental bug of JS
gun()=> student-> function scope->apurva
  teacher-> global scope->nilesh shirude
console => teacher-> global scope
           content->global scope
*/