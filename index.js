const fs = require("fs");
const path = require("path");

const data = fs.readFileSync("file.txt");

// console.log(data.toString());

// fs.writeFileSync("file1.txt", "Hello World","utf-8",(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("file written successfully");
// });

// // appened data to file
// // fs.appendFileSync("file.txt", " Hello World","utf-8",(err) => {
// //     console.log("file written successfully");
// // });

// // making a dir
// fs.mkdir("test",(err)=>{
//     if(err){
//         console.log(err);
//     }
// console.log("folder created successfully"); 
// })

// // delete a directory

// // fs.rmdir("test",(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log("folder deleted successfully");
// // });

// // rename a file

// fs.rename("file1.txt","file.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file renamed successfully");
// });
// const filepath = "./newfile.txt";
// const folderpath = "./test";
// const newpath = path.join(folderpath,filepath);

// change location of file to another folder
// fs.rename(filepath,newpath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file moved successfully");
// });

// copy file to another folder
// fs.copyFile(filepath,newpath,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file copied successfully");
// });


const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    if (req.url === "/login") {
        res.write("<html><head><title>Node.js Class</title></head><body>");
        res.write("<h1>Login Page</h1>");
        res.write("</body></html>");
        res.end();
    }
    else{
    res.write("<html><head><title>node js class</title> </head><body>");
    res.write("<h1>hello world</h1>");
    res.write("</body></html>");
    res.end();
    }
});
const port =3000;
const hostname = "localhost";


// on giving request /login it will show login page
const url = require("url");

// server.on("request", (req, res) => {
//     if (req.url === "/login") {
//         res.write("<html><head><title>Node.js Class</title></head><body>");
//         res.write("<h1>Login Page</h1>");
//         res.write("</body></html>");
//         res.end();
//     }
// });
// on giving request /register it will show register page


server.listen(port,hostname,()=>{
    console.log("server is running on port 3000");
});
