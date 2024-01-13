function blockcode(){
    for(let i=0;i<10000000000;i++)
    {

    }
}
let x=10
setTimeout(()=>{
    console.log("Timer 1 done")
},5000)
blockcode()
setTimeout(()=>{
    console.log("Timer 2 done")
},3000)
setTimeout(()=>{
    blockcode()
    x++
    console.log("x=",x)
    console.log("Timer 3 done")
},100)
blockcode();
console.log("x=",x)