// Immediately Invoked Function Expressions (IIFE)
//IIFE ka main use private scope create karne ke liye hota hai, taaki variables bahar directly accessible na hon.
//global scope ke pollution ko hatane ke liye iife ka use karte haii

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
}) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('kajal')