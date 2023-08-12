import React, { useEffect, useState } from 'react';

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  maxHeight: '80vh',
  overflowY: 'auto',
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  flexBasis: 'calc(25% - 20px)',
  boxSizing: 'border-box',
};

function WorkoutCard() {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    fetch('/api/data') // Fetch data from the new endpoint /api/data
      .then(response => response.json())
      .then(data => {
        setWorkoutData(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
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
      <h1>Workout Card</h1>
      <div style={cardContainerStyle}>
        {workoutData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          workoutData.map((workout, index) => (
            <div key={index} style={cardStyle}>
            <h3>Date: {new Date(workout.date).toLocaleDateString()}</h3>
            <p>Workout: {workout.workout}</p>
            <p>Minutes: {workout.minutes}</p>
            <p>Arm Exercise: {workout.arm_exercise && workout.arm_exercise.toLowerCase() === 'none1' ? 'none' : workout.arm_exercise}</p>
            <p>Leg Exercise: {workout.leg_exercise && workout.leg_exercise.toLowerCase() === 'none2' ? 'none' : workout.leg_exercise}</p>
            <p>Chest Exercise: {workout.chest_exercise && workout.chest_exercise.toLowerCase() === 'none3' ? 'none' : workout.chest_exercise}</p>
            <p>Back Exercise: {workout.back_exercise && workout.back_exercise.toLowerCase() === 'none4' ? 'none' : workout.back_exercise}</p>
          </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WorkoutCard;
