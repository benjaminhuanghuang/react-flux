const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
const mongoUrl = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";
// useMongoClient told mongoose to use new connect logic
// `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set 
//   the `useMongoClient` option if using `connect()` or `createConnection()`.
mongoose.connect(mongoUrl, { useMongoClient: true });
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
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

