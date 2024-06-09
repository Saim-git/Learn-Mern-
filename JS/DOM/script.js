// console.dir(document);

//by id selector

// let h1tag = document.getElementById("h1tag");

// console.log(h1tag); //to console the actual element
// console.dir(h1tag); //to console whole document model

// h1tag.innerText="This is changed through JS";
// h1tag.innerHTML="This is changed through JS <p>This is p tag</p>";

// h1tag.style.color="lightsalmon";


//Changing Image by JS
// let img1=document.getElementById("imgtag");

// console.dir(img1);

// img1.src="./second.jpeg"


//Changing Multiple images

// let img2= document.querySelectorAll("img"); //Can also select by class
let img2= document.querySelectorAll(".img2"); 

for(let i=0;i<img2.length;i++){
    img2[i].src="./second.jpeg";
    // img2[i].setAttribute("src", "./second.jpeg"); //alternate method

//    console.log(img2[i].getAttribute('alt')); //get values of attributes 
    
}

//QuerySelector

// let p1tag= document.querySelector(".pt");

// console.log(p1tag);


//QueryselectorAll to select different elements having same class

// let allBoxes= document.querySelectorAll(".box");
// console.log(allBoxes);



//Use of classlist

let box= document.querySelector(".box");

// box.classList.add("circle")
// box.classList.remove("circle")
// box.classList.toggle("circle") //if element does not have the class circle, then it will add it; and if it does have the class circle; then it will remove it. 
// console.log(box.classList);


//Adding h1 tag in box with JS
// let h1tag = document.createElement("h1");

// h1tag.innerText="I am a h1tag madethrough JS";
// console.log(h1tag);
// box.appendChild(h1tag);   


//Event Listeners

// let img3= document.getElementById("imgtag");
// let flag= true;
// img3.addEventListener("click", function(){
//     console.log("I am clicked");
//     if(flag==true){
//         img3.src="./second.jpeg";
//     }
//     else{
//         img3.src="./first.jpeg";
//     }
//     flag=!flag;
// })

