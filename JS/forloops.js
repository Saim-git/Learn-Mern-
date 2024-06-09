let obj={
    name:"Muheet",
    age:23,
    address:{
        street:"sector44",
        city:"Noida",
        country:"india"
    },
hobbies:["LearningJS", "ReadingBooks"]
};

for(let ele in obj){
    console.log(ele, obj[ele]);
}

let arr=[10,20,30,40,50];

for(let element of arr){
    console.log(element);
}

