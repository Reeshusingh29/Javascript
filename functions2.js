//ek aisa situation aayega ki jab hame pta nahi kitne parameter/arguments function k andar aayege
//toh aise situation ko handle karne k liye ham rust operator use karege 
//rust operator aur spread operator same hai but inka use alag alag hota hai 
//syntax of rust is '...';
// ye jo rust hai woh dta ko array k form mai laata hai 
function calculatecartprice(...num1){
     return num1
}
//console.log(calculatecartprice(200,323,424))

//type 2 
function calculatecartprice(val1,val2,...num1){
    return num1
}
//console.log(calculatecartprice(200,323,200,500))

//type 3 using objects

const user = {
    username: "hitesh",
    price: 199
}
function handleobject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobject(user)

//type 4 using arrays

const mynewarray  = [200,400,233,939]

function seconndvalue(getarray){
    return getarray[1]
}

console.log(seconndvalue(mynewarray))