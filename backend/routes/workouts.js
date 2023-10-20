const express = require('express');
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// Get all workouts
router.get('/', getWorkouts);

// Get single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// Delete a new workout
router.delete('/:id', deleteWorkout);

// UPDATE a new workout
router.patch('/:id', updateWorkout);

module.exports = router;
