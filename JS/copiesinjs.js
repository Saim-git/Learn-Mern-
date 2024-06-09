let obj = {
    name: "Muheet",
    age: 23,
    address: {
        street: "sector44",
        city: "Noida",
        country: "India"
    }
}
let copyobj = obj; //shallow copy(address gets copied, so on changing name of copy(as in next line), actual object's name also gets changed)

// copyobj.name = "Saim";

// console.log("obj", obj);

// console.log("copy obj", copyobj); 

let copyobj1 = JSON.parse(JSON.stringify(obj)); //deep copy
copyobj1.name = "Saim";
copyobj1.address.city = "Sre";
// console.log("obj", obj);
// console.log("copyobj1", copyobj1);

let copystr = JSON.stringify(obj);
let copyobj2 = JSON.parse(copystr);

// console.log("copystr", copystr);
// console.log("copyobj2", copyobj2);

//spread operator(...)

let obj1 = { ...obj } //mixture of both shallow and deep copy

obj1.name = "Saim";
obj1.address.city = "Saharanpur"; //object of object gets stored somewhere else in memory and so it's address is stored in primary object only, and in spread operator it copies that while copying the primary object; that is why if we change anything in the secondary copied object of object, it'll gonna reflect in primary original object too.

// console.log(obj);

// console.log(obj1);

let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let arr3=[...arr1,...arr2,...arr1,...arr2];
console.log(arr3);