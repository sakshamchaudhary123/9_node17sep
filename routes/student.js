const express = require('express');
const studentController = require('../controllers/studentcontroller');
const router = express.Router();

router.post('/add/user', function(req, res){
    studentController.addStudent(req, res);
})

router.get('/users', function(req, res){
    studentController.getStudents(req,res)
})

module.exports = router