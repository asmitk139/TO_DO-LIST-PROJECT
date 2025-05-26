const express = require("express");
const bodyparser = require("body-parser");

var app = express();
app.set("view engine" , "ejs");
app.use(express.urlencoded({extended:true}));

var example = "working";
app.get("/",function(req,res){
    res.render("list",{exej : example})
});
app.post("/",function(req,res){
    console.log(req.body.ele1);
});




app.listen(5000 , function(){
    console.log("server started");
})