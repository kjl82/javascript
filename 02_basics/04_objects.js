//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123kaajal"
tinderUser.name = "kajal"
tinderUser.LoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "kajal@chagpt.com",
    fullname: {
        userfullname:{
        firstname:"kajal ",
        lastname: "kumari"
    }
}
}

//console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

//console.log(Object.values(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser))


//console.log(tinderUser.hasOwnProperty('LoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor} = course 

console.log(instructor)