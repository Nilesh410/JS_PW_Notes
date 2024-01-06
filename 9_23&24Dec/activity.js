/*
Task 1:- 
*/
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//task 2
const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Monitor', type: 'electronic' },
    { name: 'Orange', type: 'fruit' }
];
const fruitNames = items.filter(item => item.type === 'fruit')
//const fruitNames = items.filter(item => item.type === 'fruit').map(item => item.name);
console.log(fruitNames);

//task 3
const numbers1 = [1, 2, 3, 4, 5];
let sumOdd = 0;
numbers1.forEach(num => {
    if (num % 2 !== 0) {
        sumOdd += num;
    }
});
console.log(sumOdd);

const arr = [1,400,5,6,9]
const result = arr.every((element) => {
   console.log(element);
   return element < 100;
});