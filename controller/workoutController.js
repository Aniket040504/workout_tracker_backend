const express=require('express');
const workout=require('../models/workoutModel'); 

// @desc Get all workouts
// @route GET /workouts
// @access Public


const allWorkout=async (req,res) => {
    try{
    const exist=await workout.find();
    res.status(202).json(exist);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}


// @desc Get single workout for the use
// @route GET /workouts/id
// @access Public


const getsingleWorkout=async (req,res) => {
    try{
        const id=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({msg:'No such workout'}) 
        }
        const data=await workout.findById(id);
        res.status(202).json(data);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


// @desc Add workout 
// @route POST /workouts
// @access Public


const addWorkout=async (req,res) => {
    try{
    const {title,load,reps}=req.body;
    const data=await workout.create({title,load,reps});
    res.status(202).json({
        data:data.id,
        msg:"Created successfully"
    })
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    
}


// @desc Update workouts for the user
// @route UPDATE /workouts/id
// @access Public


const updateWorkout=async (req,res) => {
    try{
        const id=req.params.id;
         if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({msg:'No such workout'}) 
        }
        const data=await workout.findByIdAndUpdate(id, req.body, {new:true});
        res.status(202).json({msg:"data updated", data});
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}



// @desc Delete workouts for the user
// @route DELETE /workouts/id
// @access Public


const deleteWorkout=async (req,res) => {
    try{
        const id=req.params.id;
         if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({msg:'No such workout'}) 
        }
        const deletedata=await workout.findByIdAndDelete(id);
        res.status(202).json({
            message:"data deleted",
            deletedata
        })
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}



// @desc Delete all workouts for the user
// @route DELETE /workouts/
// @access Public


// const deleteAllWorkout=async (params) => {
    // try{

    // }
    // catch(error){
    //     res.status(400).json({error:error.message});
    // }
// }

module.exports={
    allWorkout,
    addWorkout,
    getsingleWorkout,
    deleteWorkout,
    updateWorkout,
}