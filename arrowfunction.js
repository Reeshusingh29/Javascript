
const user ={
    username: "hitesh",
    price: 999, 

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}

//user.welcomemessage()
//user.username="sam"
//user.welcomemessage()

//console.log(this)

//'''function chai(){
    //let username = "hitesh"
  //  console.log(this.username)
//}

//chai()
//creating a arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this)
}
//chai()

//arrow function syntax  :- () =>{}

const addtwo = (num1,num2) =>{
    return num1+num2;
}
//console.log(addtwo(2,3))

//type two of arrow function :- implicit return 
//implicit return mai curly brackets daalne ki zarurat nahi hoti ye directbina return kiye answer bata deta hai 
//agar curly braces mai lkiye toh usko return likhna hipadega aur agar () mai lkiye toh nahi likhna padega 
//const addTwo = (num1,num2) => num1+num2
//const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({username:"reeshu"})

console.log(addTwo(4,5))

const myarray = [2,5,3,7,8]

myarray.forEach(() => {})






