let data=[
{"id":1,"first_name":"Roxana","last_name":"Scini","email":"rscini0@engadget.com","gender":"Female","ip_address":"223.10.111.129"},
{"id":2,"first_name":"Fabe","last_name":"Cavalier","email":"fcavalier1@mysql.com","gender":"Male","ip_address":"33.229.10.139"},
{"id":3,"first_name":"Lark","last_name":"Wakerley","email":"lwakerley2@liveinternet.ru","gender":"Female","ip_address":"96.34.169.12"},
{"id":4,"first_name":"Victoria","last_name":"Mulran","email":"vmulran3@youtube.com","gender":"Bigender","ip_address":"188.86.103.155"},
{"id":5,"first_name":"Brianna","last_name":"Bazley","email":"bbazley4@zdnet.com","gender":"Female","ip_address":"250.96.122.40"},
{"id":6,"first_name":"Anders","last_name":"Poat","email":"apoat5@hatena.ne.jp","gender":"Male","ip_address":"172.101.74.4"},
{"id":7,"first_name":"Gabie","last_name":"Segrave","email":"gsegrave6@cnet.com","gender":"Female","ip_address":"5.19.112.176"},
{"id":8,"first_name":"Rosita","last_name":"Brouncker","email":"rbrouncker7@github.com","gender":"Bigender","ip_address":"191.86.39.248"},
{"id":9,"first_name":"Boycie","last_name":"Monkleigh","email":"bmonkleigh8@prweb.com","gender":"Male","ip_address":"148.79.83.101"},
{"id":10,"first_name":"Almeta","last_name":"Widdison","email":"awiddison9@scribd.com","gender":"Female","ip_address":"181.130.137.243"}]

//console.log(data) //show the complete array of object data
console.log("Only name of employee")
let first_name_array=data.map(emp =>{   
    return emp.first_name   // u can return any one of the property of each object present in the array  
 })
//map fun is capable to go to every element of the array and apply on call back function, fixed the
//value on each return statement and puts in a new array
//console.log(first_name_array)

let show_specific_data=data.filter((emp)=>{
    return emp.gender==="Female"
})

console.log(show_specific_data)
