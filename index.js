const express = require('express');
const connect = require('./connection')
const student = require('./routes/student');
const app = express();
connect();
app.use(express.json()); // Taki hum json data ko padh \ sake
app.use(student);


app.listen(3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port 3000');
    }
})