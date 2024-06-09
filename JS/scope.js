//Var is only function scoped and let and const are block scoped
//Var, let and const all are function scoped(because function is also a block of code)

//function scope

// First example
// var a=10;

// function abc(){
//     console.log(a);
//     var a=99;
// }

// abc();

// console.log(a);


//Second example
// let a=10;

// function abc(){
//     let a=99;

//     console.log(a);
// }

// abc();

// console.log(a);


//Lexical scope(Going into Parent's scope if variable we are looking for is not in our present scope)
// let a=10;

// function abc(){
//     console.log(a);
// }

// abc();

// console.log(a);




//chain scope

// var a=10;
// var b=999;
// function first(){
//     console.log(a);
//     var a=99;

//     function second(){
//         console.log(a);
//         third();

//         function third(){
//             console.log(b);
//             console.log(a);
//             var c=99;
//         }
//         console.log(c); //this will give error bcz variable c gets exhausted when local scope of function third gets vanished after its execution, so there won't be any variable c left. Hence, it will show Reference Error(as C is undefined)
//     }
//     second();
// }
// first();
// console.log(a);

//Global scope( Anything which is not in a function is a Global scope)




//Block scope

//var is not block scope
// var a=10;
// {
//     var a=99;
// }
// console.log(a);


//let and const are block scope
// let a=10;
// {
//     let a=99;
// }
// console.log(a);


//Another example1

// var a=10;

// let x=100;

// {
//     var a=99;
//     let x=999;
    
//     console.log(a);
//     console.log(x);
// }

// console.log(a);
// console.log(x);



//Another example2

// let x=100;

// console.log(a);
// console.log(x);

// {
//     var a=99;

//     let x=999;
//     console.log(a);
//     console.log(x);
// }
//     console.log(a);
//     console.log(x);