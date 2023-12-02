//Callback 
// Function is first class citizen
//That claimed that we can pass fucntion as an argument

//array -> list f number that we will get
//fn is function passed as an argument to the processArray function
function processArray(array,fn){
   //cube => fn-> fn can access x value
   for(let i=0;i<array.length;i++)
   {
     console.log("index",i,"value",array[i],"return of fn",fn(array[i]))
     //fn(array[i]) ->1. we are calling fn
                    //   2. argument passed to call fn is array[i]
                    //   3. fn represents the function passed as the argument to processarray
   }
}
processArray([2,3,4,1,5],function cube(x){return x*x*x })
//cube function is function expression u can write down without name
//u can pass as an argument 
//ProcessArray()-> it is an higher ofer function
// Higher Order Function:- A function that takes one or more function as argument
//Call back :- callback is function which is an actual argument to HOF and is passed as argument to function 

// One imp use of callback=>
// ther cases when the execution of fucntion complete in future, what should 
//we do can be controlled by callback

/*
 =>  In built function
     ->JS give us access to some already built in function 
     e.g. math.script, foreach, map etc
     
=> Homework-> why console.log is not part of Ecmascript part

=>Because function are first class citizen, u can also return the function 
*/

function fun(){
    console.log("called te function fun")
    return function cleanUp(){ //function expression
        console.log("Cleaning up the resources")
    }
}
const result=fun()
console.log(result)
console.log(result())
result()
//result store the function return by fun i.e. cleanup
/*
IIFL: Immediately Invoked Function Expression
-> Meaning IIFE is that the moment is define the function expression 
it is immediately execute and can not be access anywhere in the program
*/

function downloadScript(){
    console.log("old function")
}
downloadScript();
//new function call due to function hoisting

(function downloadScript(){
    console.log("new function")
})()

downloadScript();

const x=10;
console.log(x)

function xyz()
{
    x=20;
    console.log(x)
}
xyz()
console.log(x)