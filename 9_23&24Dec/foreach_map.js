const arr=[2,3,1,4,5]

console.log("foreach result")
const result=arr.forEach((ele)=>{
    console.log("ele is:",ele)
    return ele
})
console.log(result)

console.log("map result")
const result1=arr.map((ele)=>{
    console.log("ele is:",ele)
    return ele*2;
})
console.log(result1)

console.log("filter result")
const result2=arr.filter((ele)=>{
    console.log("ele is:",ele)
    return ele%2!==0;
})
console.log(result2)