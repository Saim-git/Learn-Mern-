//Array destructuring-->(we have to use the index in order)
let arr=[10,20,30,40,50,60]

let [a,b,,,e]=arr; 

console.log(a,b,e);


//Object Detsructuring--> (we have to use the same key name)

let obj={
    name:"Muheet",
    age:23,
    company:"TCS"
}

let {age,company} = obj;

console.log(age, company);