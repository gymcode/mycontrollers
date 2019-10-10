const express =  require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Student = require("../models/student.model");
// const Student = mongoose.model('Student');

router.get('/', (req, res)=>{
    res.render('student/login',{
        viewTitle: "Student login"
    });
});

router.post('/', async(req, res)=>{
    
    // Student.findOne({name:req.body.name})
    // .then(g=>{
    //     // res.json(g);
    //     bcrypt.compare(req.body.password, student.password)
    //     .then(g=>{
    //          res.json(g);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     });
    // })
    // .catch(err=>{
    //     console.log(err);
    // });

    try {
        const student = await Student.find({name:req.body.name});
        bcrypt.compare(req.body.password, student.password, (err, isMatch)=>{
            if (isMatch) {
                res.send("complete");
            }
            else{
                res.send("mern stack");
            }
        });
    } catch (err) {
        console.log("lost");
    }

    // try {
    //     const student = await Student.find({name:req.body.name});
      
    //     bcrypt.compare(req.body.password, student.password, (err, isMatch)=>{
    //         if (isMatch == true) {
    //             res.send("hello");
    //         }
    //         else{
    //             res.send("no match");
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    // }

    
   
});

module.exports = router;