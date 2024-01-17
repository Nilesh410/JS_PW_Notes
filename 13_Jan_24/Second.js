function createPromise(){
    return new Promise((res,rej)=>{
        res("Nilesh")
    })
}

function blockingcode(){
    for(let i=0;i<1000000000;i++)
    {}
}

let a=10
blockingcode()
console.log("Timer 1 start")
setTimeout(()=>{
    console.log("Timer 1 done")
    console.log("value of a=",a)
},3000)
console.log("Timer 2 start")
setTimeout(()=>{
    console.log("Timer 2 done")
    console.log("value of a=",a)
},0)

a++
let pr=createPromise()
pr.then(
    function success(value){
       a++
       console.log("Pr promise fulfilled with a value:",value)},
       function failure(value)
       {
        console.log("Pr promise rejected with a value:",value)}
)

a++
blockingcode()
