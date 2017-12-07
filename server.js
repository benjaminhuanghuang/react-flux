const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
const mongoUrl = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";
mongoose.connect(mongoUrl, (err)=>{
    err && console.err(err);
});

app.set('view engine', 'ejs');
app.use(express.static('deploy'));
app.get("/", (req,res)=>{
    res.render('blank', {
        title: "Master Flux",
        body:"<div id='root'></div>"
    })
}); 

app.listen(9527, ()=>{
    console.log("Server is running on port 9527");
});

