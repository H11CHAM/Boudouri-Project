const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({extended:true}));
app.use('/',require('./routes'));
app.use(express.static(path.join('..', 'client', 'public'  )));



app.listen(3000,()=>{
    console.log("listening on port 3000")
})
