import React, { useState } from 'react';
import './CreateWorkout.css';

const CreateWorkout = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exercises, setExercises] = useState([
    { exerciseName: '', sets: '', reps: '' },
  ]);

  const handleWorkoutNameChange = (e) => {
    setWorkoutName(e.target.value);
  };

  const handleMuscleGroupChange = (e) => {
    setMuscleGroup(e.target.value);
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  const handleAddExercise = () => {
    setExercises([...exercises, { exerciseName: '', sets: '', reps: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      workoutName,
      muscleGroup,
      exercises: JSON.stringify(exercises),
    };
    fetch('http://localhost:8000/api/createworkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data successfully sent to the server:', data);
        // Add any additional logic or notifications for successful form submission
      })
      .catch((error) => {
        console.error('Error sending data to the server:', error);
        // Add any error handling or notifications for failed form submission
      });
      setWorkoutName('');
      setMuscleGroup('');
      const clearedExercises = exercises.map((exercise) => ({
        ...exercise,
        exerciseName: '',
        sets: '',
        reps: '',
      }));
      setExercises(clearedExercises);
  };

  return (
    <div className="container">
       <nav>
             <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/graph">Graph</a></li>
                 <li><a href="/arms">Arms</a></li>
                 <li><a href="/legs">Legs</a></li>
                 <li><a href="/chest">Chest</a></li>
                 <li><a href="/back">Back</a></li>
                 <li><a href='/workoutcard'>Workout Card</a></li>
                 <li><a href='/createworkout'>Create Workout</a></li>
                 {/* <li><a href="/creatediet">Create Diet</a></li>  */}
                 <li><a href='/myworkout'>My Workout</a></li>
                 {/* <li><a href='/mydiet'>My Diet</a></li> */}
             </ul>
       </nav>
       <h1 className="form-heading">Create Your Workout</h1>
      <form onSubmit={handleSubmit}>
        <div className="questions">
          <div className="question1">
            <label htmlFor="workoutName">Workout Name:</label>
            <input
              type="text"
              id="workoutName"
              value={workoutName}
              onChange={handleWorkoutNameChange}
            />
          </div>
          <div className="question2">
            <label htmlFor="muscleGroup">Muscle Group(s):</label>
            <select
              id="muscleGroup"
              value={muscleGroup}
              onChange={handleMuscleGroupChange}
            >
              <option value="">Select Muscle Group</option>
              <option value="Arm">Arms</option>
              <option value="Legs">Legs</option>
              <option value="Chest">Chest</option>
              <option value="Back">Back</option>
            </select>
          </div>
        </div>
        <div className="exercise-container">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-question">
              <div className="question3">
                <label htmlFor={`exerciseName${index}`}>
                  Exercise {index + 1}:
                </label>
                <select
                  id={`exerciseName${index}`}
                  value={exercise.exerciseName}
                  onChange={(e) =>
                    handleExerciseChange(index, 'exerciseName', e.target.value)
                  }
                >
                  <option value="">Select Exercise</option>
                  <option value="Bicep Curls">Bicep Curls (Arms) </option>
                  <option value="Tricep Dips">Tricep Dips (Arms)</option>
                  <option value="Hammer Curls">Hammer Curls (Arms)</option>
                  <option value="Tricep Pushdowns">Tricep Pushdowns (Arms)</option>
                  <option value="Reverse Curls">Reverse Curls (Arms)</option>
                  <option value="Cable Curls">Cable Curls (Arms)</option>
                  <option value="Bodyweight Squats">Bodyweight Squats (Legs) </option>
                  <option value="Leg Press">Leg Press (Legs)</option>
                  <option value="Goblet Squat">Goblet Squat (Legs)</option>
                  <option value="Dumbbell Lunges">Dumbbell Lunges  (Legs)</option>
                  <option value="Leg Extensions">Leg Extensions  (Legs)</option>
                  <option value="Calf Raises">Calf Raises  (Legs)</option>
                  <option value="Barbell Bench Press">Barbell Bench Press (Chest) </option>
                  <option value="Push Ups">Push Ups (Chest)</option>
                  <option value="Incline Dumbbell Press">Incline Dumbbell Press (Chest)</option>
                  <option value="Dumbbell Chest Press">Dumbbell Chest Press(Chest)</option>
                  <option value="Lat Pulldowns">Lat Pulldowns  (Back)</option>
                  <option value="Bent-over Rows">Bent-over Rows  (Back)</option>
                  <option value="Seated Cable Rows">Seated Cable Rows   (Back)</option>
                  <option value="Superman Exercise">Superman Exercise  (Back)</option>
                  <option value="Back Extensions">Back Extensions   (Back)</option>
                  <option value="Reverse Flyes">Reverse Flyes  (Back)</option>
                </select>
              </div>
              <div className="question4">
                <label htmlFor={`sets${index}`}>Sets:</label>
                <input
                  type="number"
                  id={`sets${index}`}
                  value={exercise.sets}
                  onChange={(e) =>
                    handleExerciseChange(index, 'sets', e.target.value)
                  }
                />
              </div>
              <div className="question5">
                <label htmlFor={`reps${index}`}>Reps:</label>
                <input
                  type="number"
                  id={`reps${index}`}
                  value={exercise.reps}
                  onChange={(e) =>
                    handleExerciseChange(index, 'reps', e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div className="add-button-container">
            <button type="button" onClick={handleAddExercise}>
              Add Exercise
            </button>
          </div>
        </div>
        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateWorkout;
