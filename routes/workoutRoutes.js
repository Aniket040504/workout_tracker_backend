const express=require('express');
const router=express.Router();
const {allWorkout,addWorkout,getsingleWorkout,deleteWorkout,updateWorkout}=require('../controller/workoutController');


router.get('/workout', allWorkout);
router.get('/workout/:id', getsingleWorkout);
router.post('/workout', addWorkout);
router.patch('/workout/:id',updateWorkout);
router.delete('/workout/:id', deleteWorkout);

module.exports=router;