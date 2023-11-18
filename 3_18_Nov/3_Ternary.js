let data={
    "score":110,
    "life":3,
    "bullets":1000
}

if(data.score>=100)
{
    console.log("You gained a life and bullets")
    data.bullets+=1000
    data.life+=1
}
else{
    console.log("You loose a life and bullets")
    data.bullets-=1000
    data.life-=1
}

console.log(`Your score is ${data.score}, life value is ${data.life} and bullets are ${data.bullets}`)