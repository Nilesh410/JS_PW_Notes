for (let i=0;i<1000000000;i++)
{ }

for(let i=0;i<10000000;i++)
{}

console.log("Starting Timer 1")

setTimeout(()=>{
    console.log("Timer 1 done")
},20000)

console.log("Starting Timer 2")

setTimeout(()=>{
    console.log("Timer 2 done")
},0)

for(let i=0;i<1000;i++)
{}

console.log("Starting Timer 3")
setTimeout(()=>{
    console.log("Timer 3 done")
},1000)
