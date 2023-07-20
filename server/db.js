const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MathDB').then(()=> console.log("connected to the db")).catch(err=> console.log(err))

