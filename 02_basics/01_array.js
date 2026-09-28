const myArr = [0,1,2,3,4,5]
const myHeros = ["shakitman","hitesh"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);

//Array methods
myArr.push(6)
myArr.push(7)

// console.log(myArr);
myArr.pop()
myArr.unshift(9) // add element at 0 index 
myArr.shift() // remove element from 0 index

// console.log(myArr.includes(9)); // boolean value return karta hai 
// console.log(myArr.indexOf(6)); // index return karega ......agar element nahi present ho to -1 return karega

const newArr = myArr.join() //string me convert kar deta hai join ke baad
// console.log(myArr);
// console.log(typeof(newArr));

// let arr = ["A", "B", "C"];

// arrJoin=arr.join("-")
// console.log(arrJoin)


//slice,splice
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(1,3) //original array me change hota hai 
console.log(myn2);
console.log(myArr);