
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

console.log(calculateCartPrice(200,400,500))