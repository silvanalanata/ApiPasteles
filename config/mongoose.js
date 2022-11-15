const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pastelDB_', {useNewUrlParser: true});

module.exports = mongoose