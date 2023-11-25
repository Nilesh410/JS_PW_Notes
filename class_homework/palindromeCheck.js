let givenString="racecar"
function palindromeCheck(str)
{
    let reverseString=""
    for(let i=str.length-1;i>=0;i--)
    {
        reverseString+=str.charAt(i)
    }
    // if(str===reverseString)
    //  {
    //      return "Given string is a palindrome"
    //  }
    //  else{
    //     return "Given string is not a palindrome"
    //  }

    
}
console.log(`${givenString} : `,palindromeCheck(`${givenString}`))
