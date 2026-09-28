//singleton

//object literals

const mySym = Symbol("key1")


const JsUser = {
   "full name": "Kajal kumari",
   [mySym]: "mykey1",
    age: 20,
    location: "gaya",
    email: "kajal8612kri@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","saturaday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
//console.log( typeof mySym) // symbol
//console.log( typeof [mySym]) //object
//console.log( typeof JsUser [mySym]) //String

JsUser.email = "kajalkri@gmail.com";
//Object.freeze(JsUser)
JsUser.email = "kajalkri@chagpt.com";
//console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello js user ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());