//Array

const myarr = [0,1,2,3,4,5]     

console.log(myarr[1]) //indexinghote hai 0 se

//shallow copy matlab ki jo bhi mai naya chenge karuga woh meri old array mai bhi channgehoge
// deep copy iska ulta hai , the do not share the same references 
//arrays k andar bhi hame prototypes milte hai 
const myheroes = ["shaktiman","babu"]

const myarr1 = new Array(1,2,3,4)

console.log(myarr1[1])

//array methods

myarr.push(6)
myarr.push(67)
myarr.pop()     // ye array ka last element delete karta hai 
myarr.unshift(34)  //ye array k starting mai 34 daalega 
myarr.shift()  //ye array ka pehla element delete karta hai 
console.log(myarr.includes(2)) //ye true or false return karega kyuki ye check karega ki 2 present hai ki nahi 
console.log(myarr.indexOf(2))  //ye uss number ki index return karega 
const newarr = myarr.join()
console.log(myarr)
console.log(newarr)

//slice,splice

console.log("A",myarr)

const myn1 = myarr.slice(1,3)
 
console.log(myn1)
console.log("B",myarr)

const myn2 = myarr.splice(1,3)
 
console.log(myn2)

console.log("c",myarr)
