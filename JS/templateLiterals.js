//template literals also called string literals

let name= "Muheet";
let age= 23;

function mydetails(name, age){
    // console.log("My name is " + name + " and My Age is "+ age);  //Using Normal Method

    console.log(`My name is ${name} and My Age is ${age}`);  //Using template literal
    // template literals are used with operator called as back quote (``) which lies below escape button
}

mydetails(name, age);