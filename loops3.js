//for of loop
const arr = [1,2,3,4]
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    console.log(`ye greet hai ${greet}`)
}

//Maps:-  map ek object hai jo hold karta hai key value pair 

const map = new Map()
map.set('IN',"India")
map.set('usa',"UNITED STATE OF AMERICA")

console.log(Map);

//for of loop in map

for (const [key,value] of map) {
    console.log(key,':-',value)
}

//objects k saath
//objects k saath for of loop nahi kaam karta woh iterable error batata hai 
// isiliye ham use karte hai for in loop

const myobject = {
    js: "javascript",
    "cpp":"c plus plus"
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`)
}

const programming = ["js","ruby","html"]

for (const key in programming) {
    console.log(programming[key]);
}

for (const key in map) {
    console.log(map[key])
}



//***********************for each loop ******************/

const coding = ["js","html","css"]
//coding.forEach(function (item){
  //  console.log(item);
//})

coding.forEach((item) =>{
    console.log(item)
})

function printme(item){
    console.log(item)
}

coding.forEach(printme)


coding.forEach( (item,index,arr) =>{
    console.log(item)
})

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "cpp",
        languagefilename: "cppp"
    },
]

mycoding.forEach( (item) =>{
    console.log(item.languagename)
})