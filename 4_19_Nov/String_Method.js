//String Methods from JAVA Scripts

let username = "Nilesh Suresh Shirude"

//1) length (it is property)
console.log(username.length)

/*2) Extrating String Part

slice(start,end)-->
    extracts a part of a string and returns the extracted part in a new string.
    The method takes 2 parameters: start position, and end position (end not included).
    If you omit the second parameter, the method will slice out the rest of the string
    If a parameter is negative, the position is counted from the end of the string

substring(start,end)-->
    substring() is similar to slice().
    The difference is that start and end values less than 0 are treated as 0 in substring().

substr(start,length)-->

    substr() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
    If you omit the second parameter, substr() will slice out the rest of the string.
    If the first parameter is negative, the position counts from the end of the string.

*/
console.log(username.slice(2,5)) //les
console.log(username.slice(2)) //lesh Suresh Shirude
console.log(username.slice(-5,-2))//iru

console.log(username.substring(2,9)) //lesh Su
console.log(username.substring(-5,-2))//

console.log(username.substr(2,6))//lesh S
console.log(username.substr(2))//lesh Suresh Shirude
console.log(username.substr(-2))//de
console.log(username.substr(-2,-1))//it does not show anything length should not be negative

/* 3) Replace String Method
    replace()-->
        The replace() method replaces a specified value with another value in a string
    Note:->
    The replace() method does not change the string it is called on.
    The replace() method returns a new string.
    The replace() method replaces only the first match
    If you want to replace all matches, use a regular expression with the /g flag set. 
    By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
    To replace case insensitive, use a regular expression with an /i flag (insensitive):
    To replace all matches, use a regular expression with a /g flag (global match):
*/

let str1="ABC PQR XYZ ABC"
let str2=str1.replace('A','B')
console.log(str2) //BBC PQR XYZ ABC
console.log(str1.replace("ABC","LMN"))//LMN PQR XYZ ABC
console.log(str1.replace(/ABC/g,"LMN"))
let new_str="I love India"
console.log(new_str.replace("India","Maha"))
console.log(new_str.replace(/INDIA/i,"Maha"))

