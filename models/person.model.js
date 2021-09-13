const mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

mongoose.model('Person', personSchema);