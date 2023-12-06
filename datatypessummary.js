// #primitive

// 7 types : string,Number,Boolean,null,undefined, Symbol(unique banate hai),BigInt

const isloggedin = false
const outsiddetemp = null
let useremail;

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)

const bignumber = 3332432455435545n




// referencetype or non primitive

//Array, Objects, Functions

const heroes = ["shaktiman","nagra"]
let myobj={
    name: "Hitesh",
    age:22,

}

const myfunction = function(){
    console.log("Hello world");
}
console.log(typeof heroes);




// *******************************************************

// stack :- jitni bhi primitive type hoti hai usme stack memory use hoti hai 
            // jab bhi stack memory hoti hai toh jo hamne variable declare kiya hai uska copy generate hoti hai 
// heap :- jitne bhi non primitive or jab bhi koi memory heap k andar aati hai toh uska reference generate hota hai 


let myyoutubename = "Reeshusinghvlogs"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename)
console.log(anothername)

