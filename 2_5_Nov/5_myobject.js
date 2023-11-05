const user={
    userName:"NSS",
    name:"Nilesh Shirude",
    "last name":"shirude",
    email:"shirudenileshs@gmail.com",
    age:20,
    hobbies:["cricket", "songs","badminton"],
    address:{
        city:"Pune",
        state:"Maharashtra"
    }
}

console.log(user.age)
console.log(user['age'])
console.log(user.address.state)
console.log(user["address"]["city"])
console.log(user['last name'])

//const userListFromDatabase=[{},{},{}]
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(user.hasOwnProperty('tea'))
