import fs from "fs";
//CRUD Operations-->
//Create-->
//sync method to write data to a file synchronously, replacing the file if it already exists.
// fs.writeFileSync("./one.txt","This is new file which is created and written syncronously.")
// fs.writeFileSync("./syncnewdir/one.txt","This is 1st new file which is created and written syncronously.")
// fs.writeFileSync("./syncnewdir/two.txt","This is 2nd  new file which is created and written syncronously.")
// fs.writeFileSync("./syncnewdir/three.txt","This is 3rd new file which is created and written syncronously.")


//async method to write data to a file asynchronously, replacing the file if it already exists.
// fs.writeFile("./asyncfile.txt", "This is new file which is created and written asyncronously.",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


//Creating new directory(folder)
//sync method to Create a new directory synchronously, gives error if file already exists
// fs.mkdirSync("./syncnewdir");

//async method to Create a new directory asynchronously, gives error if file already exists
// fs.mkdirSync("./asyncnewdir");

//Reading the content of directory-->
//sync method to read the contents of directory synchronously
// fs.readdirSync("./syncnewdir");

//async method to read the contents of directory asynchronously
// fs.readdir("./syncnewdir",(err,data)=>{
//     if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
// });

//Change name of directory asynchronously
// fs.rename("./syncnewdir","./ChangedName",(err,data)=>{
//         if(err){
//                     console.log(err)
//                 }else{
//                     console.log(data)
//                 }
//     })

//Delete directory
// fs.rmdir("./demo",(err)=>{
//     console.log(err);
// })
//Read-->
//sync method to read file
// let filecontent= fs.readFileSync("./syncfile.txt", "utf-8") 
// console.log(filecontent)
//not durable to use sync methods as it will block the main thread of call stack

//async method to read file
// fs.readFile("./asyncfile.txt", "utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


//Update-->
// let oldercontent= fs.readFileSync("./syncfile.txt","utf-8");
// let newcontent= fs.writeFile("./syncfile.txt",oldercontent+ " I'm the updated data through update opeartion.", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

//to console the content of updated file(if we use fs.readFileSync function then it'll show older content bcs the update we have given above is through fs.writeFile which is async, so we must use async fs.readFile here to console the content of updated data)
// console.log(fs.readFile("./syncfile.txt","utf-8",(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }))


//Delete-->
//force:true is necessary if the file doesn't exist already, it won't give error if we use force:true, otherwise we will have error 
//  fs.rm("./one.txt",{force:true},(err, data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }
//     })

//fs.unlink can be used to delete too(difference is it do not support error handling methods like force:true as in fs.rm)
//  fs.unlink("./syncfile.txt",(err, data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }
//     })

