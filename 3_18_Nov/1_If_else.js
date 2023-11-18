let score=110
let life=3
let bullets=1000

console.log("welcome in the game")

if(score>=100)
{
    console.log("You gained a life and bullets")
    bullets+=1000
    life+=1
}
else
{
    console.log("You loose a life and bullets")
    bullets-=1000
    life-=1
}
console.log(`Your score is ${score}, life value is ${life} and bullets are ${bullets}`)
