

//Event Bubbling
// document.querySelector(".Grandparent").addEventListener("click", function(){
//     console.log("GrandParent is clicked")
// })
// document.querySelector(".parent").addEventListener("click", function(){
//     console.log("Parent is clicked")
// })
// document.querySelector(".child").addEventListener("click", function(){
//     console.log("Child is clicked")
// })



//Event Capturing
// document.querySelector(".Grandparent").addEventListener("click", function(){
//     console.log("GrandParent is clicked")
// },true)
// document.querySelector(".parent").addEventListener("click", function(){
//     console.log("Parent is clicked")
// },true)
// document.querySelector(".child").addEventListener("click", function(){
//     console.log("Child is clicked")
// },true)



//Event Delegation
// let box= document.querySelector(".box");

// box.addEventListener("click", function(event){
// // console.log(event.target.classList[1]); //alternate method

// let clickedEle= event.target;

// console.log(clickedEle.classList[1]);
// })



//Set and Get data in or from local storage and session storage
// localStorage.setItem("mydata", "This is my personal Data");
console.log(localStorage.getItem("mydata"));

// sessionStorage.setItem("mydata1", "This is my data");
console.log(sessionStorage.getItem("mydata1"));
