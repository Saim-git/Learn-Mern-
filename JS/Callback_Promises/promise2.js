
task1 = (raw) => {
    let pr = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task1 Done");
            }, 2000)
        }
        else {
            reject("Task1 Not Ready");
        }
    })
    return pr;
}
task2 = (raw) => {
    let pr = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task2 Done");
            }, 2000)
        }
        else {
            reject("Task2 Not Ready");
        }
    })
    return pr;
}
task3 = (raw) => {
    let pr = new Promise((resolve, reject) => {
        if (raw != undefined) {
            setTimeout(() => {
                resolve("Task3 Done");
            }, 2000)
        }
        else {
            reject("Task3 Not Ready");
        }
    })
    return pr;
}


// console.log("Start");

// task1().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//alternate method using async await
// async function abc() {
//     try {
//         let ans1 = await task1(1);
//         console.log(ans1);
//         let ans2 = await task2(ans1);
//         console.log(ans2);
//         let ans3 = await task3(ans2);
//         console.log(ans3);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// abc();
// console.log("End");


//Promise race, allsettled,etc.
let pr1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task1 Done")
    }, 3000)
})
let pr2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task2 Done")
    }, 4000)
})
let pr3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task3 Done")
    }, 1000)
})

Promise.race([pr1,pr2,pr3]).then((ans)=>{
    console.log(ans);
})

