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
