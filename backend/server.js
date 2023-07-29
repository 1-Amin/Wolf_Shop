const express = require("express");
const app = express();
const Router = require("./routes/router");
const mongoose = require("mongoose");

app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});
app.use(express.json());



main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wolfDB')
}

app.use("/", Router);

app.listen(4000, ()=>{
    console.log("Server runs on port 3000!");
});