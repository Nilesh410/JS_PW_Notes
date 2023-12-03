"use strict";// this is restric to auto global promotion 
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
//console.log(teacher,content)
fun()
gun()

console.log(teacher,content)
/*
1)Pharsing phase/ compilation scope=> varaibel scanning

2) execution phase
 teacher => Nilesh shirude
 console=> teacher-> global scope->Nilesh Shirude
           content->this time content do not become as global 
                    its shows an error referene error
 fun()=> teacher -> siddhesh -> function scope
content-> it is not in the function scope, 
go the global scope -> not find-> auto global-> promotion of auto global->search in global scope but did not find then allocate as global scope during execution phase
- it is out of the rule -> fundamental bug of JS
gun()=> student-> function scope->apurva
  teacher-> global scope->nilesh shirude
console => teacher-> global scope
           content->global scope
"use strict"; => for rstrict to promote auto global 
*/