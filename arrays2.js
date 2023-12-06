const marvel_heroes = ["thor","spiderman","ironman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])

//const all_heroes = marvel_heroes.concat(dc_heroes)
//console.log(all_heroes)

//spread:- 

//const all_new_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes)

console.log(Array.isArray("Hitesh"))   //check whether it is a array or not 
console.log(Array.from("Hitesh"))  //convert it to a array
console.log(Array.from({name: "hitesh"}))  //interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))