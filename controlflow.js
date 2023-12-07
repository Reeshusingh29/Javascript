//control flow statements

//type1:- if statement

const isuserloggedin = true

if(isuserloggedin){
    
}

//comparison operators:- <,>,<=,>=,==,!=,!==,===(ye type bhi check karta hai)

//const score = 200

//if(score>100){
  //  const power = "fly"
    //console.log(`user power: ${power}`);
//}
//console.log(`user power: ${power}`);

// if else condition type2:- shorthand notation

//const balance = 1000

//if(balance>500) console.log("test");
//console.log("test2");

//type3:- nesting 

//if(balance===500){
  //  console.log("sahi hai ")
//}
//else if(balance<750){
  //  console.log("thik hai")
//}
//else{
  //  console.log("ha bhai bas kar ab ")
//}
/*
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}*/



//********************switch case  **************//
/*
const month = "feb"

switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
            console.log("march");
            break;
    case "april":
                console.log("april");
                break;

    default:
        console.log("default case ")
        break;
}*/


//**********************truthy values or falsy values ********************//

const useremail = []

if(useremail){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}

//falsy values:- false,0,-0,BigInt,"",null,undefined,NaN(not an number)

//truthy values:- "0",'false'," ",[],{},function(){}

/*
if(useremail.length ===0){
    console.log("array is empty")
}*/

//empty object

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log("object is empty")
}

//Nullish coalescing operator (??): null undefined

let val1;
//val1=5??10
//val1 = null??10
//val1 = undefined??15
val1 = null??10??165


console.log(val1)

//Ternary operator

//condition ? true:false

const iceteaprice = 100
iceteaprice <=80 ? console.log("less than 80"): console.log("more than 80")