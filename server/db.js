const mongoose = require('mongoose');

const dbConnection= async() => {
    try {
      await  mongoose.connect('mongodb://127.0.0.1:27017/MathDB');
    console.log("connected to the database !");
    } catch(err) {
    console.log(err);
    
    }
}
 
module.exports = dbConnection;

