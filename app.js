var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
   extended: true
}));
app.post('/sign_up', function(req,res){
   var username = req.body.username;
   var data = {
       "username": username
   }

app.get("/login", (req,res)=>{
    db.collection('details').findOne({username:req.body.username}, function(err,user)
    {
        if(err || !user)
        {
        res.send("User not found.")
        }
        res.send("Welcome, You just logged in succesfully!")
    }
 )});
 

db.collection('details').insertOne(data,function(err, collection){
       if (err) throw err;
       console.log("Record inserted Successfully");
   });
   return res.redirect('SignupSuccess.html');
})


app.get('/',function(req,res){
res.set({
   'Access-control-Allow-Origin': '*'
   });
return res.redirect('index.HTML');
}).listen(3000)

console.log("server listening at port 3000");