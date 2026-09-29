
function sayMyName(){
console.log("K")
console.log("A")
console.log("J")
console.log("A")
console.log("L")
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result

    return number1+number2
}

const result = addTwoNumbers(3,4)
//console.log("result:", result);

function loginUserMessage(username){
    if(!username){
        //console.log("please enter a username");
        return
    }
    return`${username} just logged in `
}


//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500))

const user = {
    username: "hitesh",
    prices: 199

}

function handleObject(anyobject){
 //   console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

//handleObject(user)

handleObject({
    username: "Kajal",
    prices: 499
})

const myNewArray = [200,300,400,5000,2000]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([234,443,234,5534,233]));