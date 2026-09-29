//global scope

//var c = 300
let a = 340
if(true){

    //block scope
let a = 10
const b = 20
var c = 30

//console.log("inner: ",a);
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}

one();


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        //console.log(username +  website);
    }
    //console.log(website);
}
//console.log(username);



//++++++++++++++++++++ interseting +++++++++++++++++++++++
console.log (addone(5));


function addone(num){
    return num +1
}

//console.log (addone(5));



//function expression
//addTwo(6)  ------> ye error dega
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(6))