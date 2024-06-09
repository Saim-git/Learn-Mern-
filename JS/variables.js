//var and let can be re-assigned their values while const cannot be-->
var a=10;
a=79;
// console.log(a); 

let b=10;
b=79;
// console.log(b); 
//const has to be initialised while declaring.


//Only var can be re-declared; let and const cannot.-->

var c=7;
var c=9;
// console.log(c);



// console.log(d); //it will throw error bcs let and const cannot be accessed before initialization (since they are in temporal dead zone).
// const d=10;
// console.log(d);

// console.log(f);  //it will throw error bcs let and const cannot be accessed before initialization (since they are in temporal dead zone).
// let f=10;
// console.log(f);


let e;
console.log(e);