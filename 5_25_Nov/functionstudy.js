//Defintion
//Theory
//Use
/* Syntax
  function functionname(parameter list){
    body
    return output (not mandatory) automatically retrun undefined
  }
 */ 
//Blcok:- collection of valid statements

/* How to call the function 
 nameOffuncction(parameter value)
 */

/* Argument and Parameter to the function

when u defined the function during that inputs called as a parameter
during calling function whatever values we passed inside the paranthesis called as an arguments

*/
console.log("Study of Function")

function calculateSquare(num)
{
    //num is a parameter
    //logic for calculate the square of a number
    let squareValue=num*num
    return squareValue
}

console.log(calculateSquare(5)) //5 is an argument

//Que:- calculate the sum of three numbers

function sumOf3Nubmber(num1,num2,num3)
{
    return (num1+num2+num3)
}
console.log(sumOf3Nubmber(6,3,4))
