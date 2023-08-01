const { default: mongoose } = require('mongoose');
const Workout = require('../models/workoutSchema');

// get all data
const getworkouts = async(req,res)=>{
    const workouts = await Workout.find({})
    res.status(200).json(workouts);
}
// get single data
 
const getworkout = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({err:'No such workout'});
    }
    const workout = await Workout.findById(id);
    if(!workout){
        res.status(404).json({err:'NO such work found'})
    }
    res.status(200).json(workout);
}


// post data
const createdata = async(req,res)=>{
    const {title,load,reps} = req.body;
    try{

        const workout = await Workout.create({title,load,reps});
            res.status(200).json(workout);
       
    }
    
    catch(err){
        return res.status(400).json({err:err.message});
    }
}

// delete post
const deletepost = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({err:'No such recode is found'})
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        res.status(400).json({err:'No such recode is found'})

    }
    res.status(200).json({message:"Data Deleted"});
}

// update posts
const updatepost = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({err:'No such recode is found'})
    }
    const workout = await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    });
    if(!workout){
        res.status(400).json({err:'No such recode is found'})

    }
    res.status(200).json({message:"Data updated"});
}

module.exports = {
    createdata,
    getworkouts,
    getworkout,
    deletepost,
    updatepost
}