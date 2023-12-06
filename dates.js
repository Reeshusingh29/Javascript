let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let mycreateddate= new Date(2023,0,23)  //javascript mai months 0 se start hote hai
console.log(mycreateddate.toLocaleString());     //tolocalestring() ki help se ham time nikalte hai 

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreateddate.getTime())   // isse ham milisecond mai output batate hai
console.log(Math.floor(Date.now()/1000))  //ye hame second mai batayega aur math.floor() isiliye use kiys kyuki ans direct chahiye decimal mai nahi 

let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth())