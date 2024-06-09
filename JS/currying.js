let sum= function(a){
    return function(b,c){
            return a+b+c;
        }
}

let add100= sum(100);
let add200 = sum(200);
let add500 = sum(500);

console.log(add100(600,300));
console.log(add200(700,100));
console.log(add500(300,200));
