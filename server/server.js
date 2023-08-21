const express = require('express');
const app = express();
const path = require('path');
const passport = require("passport");
const session = require('express-session');
const LocalStrategy = require("passport-local").Strategy;

//templating engine - parsing  packages
app.set('view engine','ejs');
app.use(express.urlencoded({extended :true}));
app.use(express.static('public'));

app.use(session({
    secret : 'test123',
    resave : false,
    saveUninitialized: true
}))




passport.initialize();
app.use(passport.session());

const dbConnection= require("./db")
dbConnection();

 const Admin = require("./Models/Admin");

passport.use(new LocalStrategy({},function(username,password,done){

    Admin.find({username : username}).then(user => {
        if(!user) return done(null,false);
         else if (!user.verifyPassword(password)) return done(null,false);
       else return done(null,user); 
    }).catch(err=> {
        if (err) 
        {
           console.log(err.message,err.statusCode);
           return done(err);
        }
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user.username);
  });
  passport.deserializeUser(function(username, done) {
    User.find({username : username}).then(user => {
        if(!user) return done(null,false);
        if(user) return done(null,true);
    } ).catch(err=> {
      if(err) {
        console.log(err);
        return done(err);
      }
    }) 
    });






app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join('..', 'client', 'build'  )));
app.use('/',require('./routes'));
app.use(function(req,res,next){
    const err = new Error('not found');
    res.sendStatus(404);
    next(err);
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

app.get('/admin',function(req,res){

})
