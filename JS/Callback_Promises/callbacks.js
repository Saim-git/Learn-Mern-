// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//Example 1
// let sum = (a, b) => {
//     return a + b;
// }
// let sub = (a, b) => {
//     return a - b;
// }
// function calc(a, b, cbfn) {
//     return cbfn(a, b);
// }
// console.log(calc(4, 5, sub));


//Example 2: js can do async tasks by callbacks
// console.log("Start");

// function makeMaggi() {
//     setTimeout(function () {
//         console.log("Maggi is here..")
//     }, 5000)
// }
// makeMaggi();
// console.log("End")


//callback hell: Reason for introduction of Promises(bcz callbacks are async methods and to make them return values like sync methods it becomes hectic and confusing)
// task1 = () => {
//     setTimeout(() => {
//         console.log("Task1 Done");
//         task2 = () => {
//             setTimeout(() => {
//                 console.log("Task2 Done");
//                 task3 = () => {
//                     setTimeout(() => {
//                         console.log("Task3 Done");
//                     }, 2000)
//                 }
//                 task3();
//             }, 2000)
//         }
//         task2();
//     }, 2000)
// }
// task1();

//Alternative Method to do this using Promises

task1=(raw) => {
    let pr1 = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task1 Done");
            }, 2000)
        }
        else {
            reject("Task1 Not ready");
        }
    })
    return pr1;
}
task2=(raw)=> {
    let pr1 = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task2 Done");
            }, 2000)
        }
        else {
            reject("Task2 Not ready");
        }
    })
    return pr1;
}
task3=(raw) => {
    let pr1 = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task3 Done");
            }, 2000)
        }
        else {
            reject("Task3 Not ready");
        }
    })
    return pr1;
}

task1(1).then((res) => {
    console.log("Task1 is Completed.")
    return task2(res);
}).then((res2) => {
    console.log("Task2 is Completed.")
    return task3(res2);
}).then((res3) => {
    console.log("Task3 is Completed.")
}).catch((err)=>{
    console.log(err); //Only 1 catch will be enough to show reject statement of any chained promise
})