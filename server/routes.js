const router = require('express').Router();
const path = require('path')
const Course = require('./Models/Course');
const { log } = require('console');
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname ,'../client/build/index.html'));
    
});
router.get('/data',function(req,res){
    const coursesarray =  Course.find({}).then(results=> log(results))
    res.json(coursesarray);
  
})

module.exports = router;





