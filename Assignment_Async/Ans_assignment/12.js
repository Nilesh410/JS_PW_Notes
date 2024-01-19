let count = 0;
setTimeout(() => {console.log(count++)
                   console.log(count)},
                1000);

setTimeout(() => {console.log(count++)
    console.log(count)}, 2000);

setTimeout(() => {console.log(count++)
    console.log(count)}, 3000);
