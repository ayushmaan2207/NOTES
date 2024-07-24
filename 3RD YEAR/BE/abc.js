// const fs = require("fs/promises")
const fs = require("fs")
const path = require("path")

// const filePath = __dirname+"/data.json"
// const filePath = path.join(__dirname, "data.json")
const filePath = path.join(__dirname, "data.txt")


fs.writeFile(filePath, "Hello World", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File written successfully")
    }
})


// var obj = {
//     name: "John",
//     roll: 4556,
// }

// const data = fs.writeFile(filePath, JSON.stringify(obj))

// data.then(()=> console.log("File written successfully")).catch((err)=>{
//     console.log(err)
// })