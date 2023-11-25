let number=50
function factorial(num)
{ 
    let fact=1;
     for(let i=num;i>=1;i--)
     {
        fact=fact*i;
     }
     return fact;
}
console.log(factorial(`${number}`))