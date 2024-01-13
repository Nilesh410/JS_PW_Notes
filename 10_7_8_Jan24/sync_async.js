for(let i=0;i<100000000;i++)
{  
}
console.log("end of first for loop")  
for(let i=0;i<1000000000;i++)
{
  
}
console.log("end of second for loop")
console.log("Start Timer 1")
setTimeout(()=>{      //JS send the request to runtime envrioment for no native function and immediatly comback
    console.log("End of timer 1")
},20000)   //after timer complete RE send call back function to event queue
console.log("Start Timer 2")
setTimeout(()=>{    //JS send the request to runtime envrioment for no native function and immediatly comback
    console.log("End of timer 2")
},0) //after timer complete RE send call back function to event queue
//event loop - keep constiuously run itself
// event loop - check always that any thing is execute on main thread
//if main thread is empth then send call back function from event queue to call stack 
for(let i=0;i<1000;i++)
{
    
}
console.log("end of 3rd for loop")

console.log("Start Timer 3")
setTimeout(()=>{    //JS send the request to runtime envrioment for no native function and immediatly comback
    console.log("End of timer 3")
},100) //after timer complete RE send call back function to event queue