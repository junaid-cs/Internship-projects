const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Workouts = new Schema({

    title:{
        type:String,
        require: true
    },
    load : {
        type:Number,
        require:true
    },
    reps : {
        type:Number,
        require:true
    }

},{timestamps: true})

module.exports = mongoose.model('workout',Workouts);