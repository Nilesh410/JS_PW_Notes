//for each :- it go to the every element of array and apply to the call back and execute 
//the call back function. It does not return anything. 
const arr=[2,4,8,3,5,7]
console.log("Result of for each")
const result=arr.forEach((ele)=>{
    console.log("array ele:",ele)
    return ele
})
console.log(result)
/**
 * Map function :- it go to the every element of array and apply to the call back and 
 * execute the call back function. But different from for each. 
 * Its return something, it's picks the each reuturn statement value from call back function
 * and put into the new array
 */
console.log("Map method result:")
const result1=arr.map((ele)=>{
    console.log("array ele:",ele)
    return ele*ele
})
console.log(result1)