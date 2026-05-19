const accountId = 1323  
// const variable ki value change nahi kar skte hai 
let accountEmail = "kajals@gmail.com"

var accountPassword = "2233"
// Var ka scope define nahi hota hai isko ham har jgh se access kar skte hai
accountCity = "bihar"  /*bina variable  define kiye bhi likh skte hai but not a good method*/

let accountState

// accountId = 34  // not allowed

accountEmail = "skjdk"
accountPassword = "234"
accountCity = " darbhanga"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);


/* prefer not to use var
beacouse of issue in block scope and functional scope
 */