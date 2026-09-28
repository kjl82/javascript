const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
//console.log(marvel_heros);
// all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6,[7,8,9,],4,6,7],3,5,7,9,7]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

// console.log(Array.isArray("Kajal"))
// console.log(Array.from("kajal"))
// console.log(Array.from({name:"kajal"})) //intersting

let score1 = 100
let score2 = 200
let score3 = 300
//console.log(Array.of(score1,score2,score3));