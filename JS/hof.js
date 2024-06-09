let arr=[4,3,8,9,7,6,1];

//For Each Function-->

// arr.forEach(function(ele, idx, arr){
// // console.log(ele)
// arr[idx]=ele*10;
// })
//console.log(arr);


//alternate
// function abc(ele, idx, arr){
// // console.log(ele)
// arr[idx]=ele*10;
// }
// arr.forEach(abc); //we are not calling the function here, we are just passing the reference, and they're being handled by the hof they're referenced into.
// console.log(arr);

//Pure Functions-->

//1. Map Function-->
// function abc(ele, idx, arr){
//     return ele*2; //function referenced in map(hof) must return something(to map).
// }
// let ans= arr.map(abc);
// console.log("arr", arr);
// console.log("Ans", ans);


//2. Filter Function-->
// let ans= arr.filter(function(ele, idx, arr){
//     return ele%2==0; //Only those elements will be returned which will satisfy this condition.
// })
// console.log("arr", arr);
// console.log("Ans", ans);


//3. Reduce Function-->
// let ans= arr.reduce(function(acc, curr){
//     return acc+curr; //we can use any logic here with acc and curr.
// },-10) //this third argument is initial value of acc(by defualt it is zero). However, it is not mandatory if we want it to work as default.

// console.log(ans);


