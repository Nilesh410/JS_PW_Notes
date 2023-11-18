let rating_user="5"
let rating=parseInt(rating_user)

function review_result(rating)
{
    return rating==5 ? "Awesome"
           :rating==4 ? "Better"
           :rating==3 ? "Good"
           :rating==2 ? "Average"
           :rating==1 ? "Ok"
           : "Bad"
}
console.log(review_result(rating))
console.log(`Review result for ${rating} is ${review_result(rating)}`)