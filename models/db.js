const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.ddeoh.mongodb.net/node-database?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if (!err) {console.log('MongoDB connected!')}
    else {console.log('Error in DB connection : ' + err)}
});

require('./person.model');