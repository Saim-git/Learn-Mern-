//IIFE- Immediately Invoked Function Expression 
(function(){
    console.log("I am called");
})()
// (function abc(){ //Name of a function can be mentioned although it works without it.
// console.log("I am called");
// })()


//Closures- A function will always carry it's Lexical scope

// function closure(){ //alternate method which is confusing and not preferable.
//     let count=0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     function decrement(){
//         count--;
//         console.log(count);
//     }
//     let obj={
//         incFn: increment,
//         decFn: decrement
//     }
//     return obj;
// }
// let obj= closure();

let obj = (function () {
let count=0;
    return {
        incFn: function(){
            count++;
            console.log(count);
        },
        decFn: function(){
            count--;
            console.log(count);
        }
    }
})()    
obj.incFn();
obj.incFn();
obj.incFn();
obj.incFn();
obj.decFn();
obj.incFn();

