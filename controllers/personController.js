const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Person = mongoose.model('Person');
const sha256 = require('js-sha256');


var router = express.Router();

router.get('/', (req, res) => {
    res.render('person/addOrEdit', {
        viewTitle: "Add Person"
    });
});

router.post("/", (req, res) => {
    if(req.body._id == ''){
        insertRecord(req, res);
    }
    else{
        updateRecord(req, res);
    }
}); 

function updateRecord(req, res){
    Person.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err){
            res.redirect('person/list');
        } 
        else{console.log('error during insertion:' + err)}; 
    });
}


function insertRecord(req, res){
    var person = new Person();
    person.fullName = req.body.fullName;
    person.email = req.body.email;
    person.password = req.body.password;
    person.save((err, doc) => {
        if (!err) {res.redirect('person/list')}
        else{console.log('error during insertion:' + err)}
        
    });
}
    router.get('/list', (req, res) => {
        Person.find((err, docs) => {
            if(!err){
                res.render("person/list", {
                    list: docs
                });
            }else{console.log('error during insertion:' + err);} 
        });
    });

router.get('/:id', (req,res) => {
    Person.findById(req.params.id, (err, docs) => {
        if(!err){
            res.render("person/addOrEdit", {
                viewTitle: "Update Data",
                person: docs
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect('/person/list');
        }
        else{console.log('Error in delete: ' + err);}
    });
});



module.exports = router;