//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dayGet = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
var items = ["Eat", "Sleep", "Repeat"];

app.get("/", function(req, res){    
    var day = dayGet;
    res.render("list",{whichDay : day, indArr: items});
}); 

app.get("/about",function(req,res){
    res.render("about");
});

app.post("/",function(req,res){
    items.push(req.body.newItem);    
    res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
