
//Truthy and Falsy Value
/*
false
0
""
null
undefined
Nan
*/

const email="nsshirude@pict.edu"
const passw="1234"

email.length>0 ? console.log("Enter the password") : console.log("Enter the email first")
console.log(Boolean(-0))

//check the email and password is entered or not 
//Logical AND operator 
email && passw ? console.log("Successfully login") 
      : email ? console.log("passw is missing") 
      : passw ? console.log("Email is missing")
      : console.log ("Enter the email and password")

//allow user to sign with google or github
//Logical OR Operator
email.includes("gmail")||email.includes("github") ? console.log("Successfully login") : console.log("Enter the email of google or github")
