const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    //console.log(item)
    return item
});

console.log(values)

const mynums = [1,2,3,4,5,6,7,8]

//const newnums = mynums.filter((num)=>num>4)   //filter ka matlab hai ki jop jo condition ko satisfy karegi toh woh woh values return karna hoga 
//
//console.log(newnums);

// or we can do like this also

//const newnums = mynums.filter((num)=>{
  //  return num>5
//})   //filter ka matlab hai ki jop jo condition ko satisfy karegi toh woh woh values return karna hoga 

//console.log(newnums);

//const newnumss = []

//mynums.forEach((num)=>{
  //  if(num>5){
    //    newnumss.push(num)
    //}
//})

//console.log(newnumss)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((bk)=>bk.publish>=2000)

  console.log(userbooks)

  userbooks = books.filter((bk) => {
    return bk.publish>=2000 && bk.genre ==="History"
} )

console.log(userbooks)

  //scope hatane k liye hame curly brackets hatane ki zarurat nahi hai balki hame uske andar hi uss value ko return karna hoga tab sahi rahega



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newnums = myNumers.map((num)=> { return num+10})
//console.log(newnums)

//chaining process :- map lagane k baad filter lagana

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

//**************Reduce method *************//

const mynumss = [1,2,3,4]

/*const total=mynumss.reduce(function (accumulator,currentvalue){
    console.log(`acc: ${accumulator} and current value : ${currentvalue}`)
    return accumulator+currentvalue
},0)*/

const total = mynumss.reduce((acc,curr) => acc+curr,0)

console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);