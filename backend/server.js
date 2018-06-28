// THIS IS SERVER FILE FOR UCSC Exam BACKEND //

// initializing

var express = require('express');
var app = express();
var cons = require('consolidate');

var bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');

//authentication packages
var session = require('express-session'); 
var passport = require('passport');




app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));


app.use(cookieParser()); 

app.use(passport.initialize());
app.use(passport.session());


var exam_routes = require('./routes/exam_routes')
var subject_routes = require('./routes/subject_routes')
var user_routes = require('./routes/user_routes')


app.use('/api/exam',exam_routes);
app.use('/api/subect',subject_routes);
app.use('/api/user',user_routes);




port = 3000;
app.listen(port ,(err)=>{
    if(err){
        console.log("server error")
    }else{
        console.log('connected')
    }
    
})