const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cat = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    sexe: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports =  mongoose.model('Cat', Cat);