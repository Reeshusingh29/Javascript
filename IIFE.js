//IIFE:- IMMEDIATELY INVOKED FUNCTION EXPRESSION
//global scope k pollution ko hatane k liye ham iife ka use karte hai 
//syntax of IIFE: ()()
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
