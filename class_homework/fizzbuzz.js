let number=15

function fizzBuzz(n)
{
    for(let i=1;i<=n;i++)
    {
        ((i%5==0) && (i%3==0)) ? console.log("fizzbuzz")
           :(i%3==0) ? console.log("fizz")
           :(i%5==0) ? console.log("buzz")
           :console.log(i)
    }
}

fizzBuzz(`${number}`)