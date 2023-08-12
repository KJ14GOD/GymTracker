// import React, { useState, useEffect } from 'react';

// const MyWorkout = () => {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     // Fetch the workout data from the server
//     fetch('http://localhost:8000/api/myworkoutcard')
//       .then((response) => response.json())
//       .then((data) => {
//         // Parse the exercises string into an array of objects
//         const parsedWorkouts = data.map((workout) => ({
//           ...workout, 
//           exercises: JSON.parse(workout.exercises),
//         }));
//         setWorkouts(parsedWorkouts);
//       })
//       .catch((error) => {
//         console.error('Error fetching workout data:', error);
//       });
//   }, []);

//   const cardContainerStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//     marginTop: '0px',
//   };

//   const cardStyle = {
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     padding: '20px',
//     margin: '10px',
//     width: '300px',
//     boxSizing: 'border-box',
//   };

//   const wrapperStyle = {
//     maxHeight: 'calc(100vh - 200px)', // Adjust the value as needed
//     overflowY: 'auto',
//   };

//   const getCardHeight = (exercises) => {
//     // Calculate the card height based on the number of exercises
//     let baseHeight = 210; // Base height of the card
//     let exerciseHeight = 90; // Height of each exercise item
  
//     if (exercises.length === 4) {
//       baseHeight = 340; // Adjust the base height for 4 exercises
//       exerciseHeight = 50; // Adjust the exercise height for 4 exercises
//     }
  
//     const totalHeight = baseHeight + exerciseHeight * exercises.length;
//     return totalHeight;
//   };
  

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/graph">Graph</a></li>
//           <li><a href="/arms">Arms</a></li>
//           <li><a href="/legs">Legs</a></li>
//           <li><a href="/chest">Chest</a></li>
//           <li><a href="/back">Back</a></li>
//           <li><a href='/workoutcard'>Workout Card</a></li>
//           <li><a href='/createworkout'>Create Workout</a></li>
//           <li><a href='/myworkout'>My Workout</a></li>
//         </ul>
//       </nav>
//       <div style={wrapperStyle}>
//         <h1>My Workouts</h1>
//         <div style={cardContainerStyle}>
//           {workouts.map((workout) => (
//             <div key={workout.id} style={{ ...cardStyle, height: getCardHeight(workout.exercises) }}>
//               <h2>{workout.workoutName}</h2>
//               <p>Muscle Group(s): {workout.muscleGroup}</p>
//               {workout.exercises.map((exercise, index) => (
//                 <div key={index}>
//                   <p>
//                     <strong>Exercise: </strong>
//                     {exercise.exerciseName}
//                   </p>
//                   <p>
//                     <strong>Sets: </strong>
//                     {exercise.sets}
//                   </p>
//                   <p>
//                     <strong>Reps: </strong>
//                     {exercise.reps}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyWorkout;


import React, { useState, useEffect } from 'react';

const MyWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch the workout data from the server
    fetch('http://localhost:8000/api/myworkoutcard')
      .then((response) => response.json())
      .then((data) => {
        // Parse the exercises string into an array of objects
        const parsedWorkouts = data.map((workout) => ({
          ...workout,
          exercises: JSON.parse(workout.exercises),
        }));
        setWorkouts(parsedWorkouts);
      })
      .catch((error) => {
        console.error('Error fetching workout data:', error);
      });
  }, []);

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: '0px',
    marginLeft: '35px',
  };

  
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    paddingTop: '0px', // Adjust the top padding value
    paddingLeft: '30px', // Keep the left padding at 20px
    paddingRight: '30px', // Adjust the right padding value if needed
    paddingBottom: '20px', // Adjust the bottom padding value if needed
    margin: '10px',
    width: '314px',
    boxSizing: 'border-box',
  };
  const workoutNameStyle = {
    textAlign: 'center', // Center the workout name text
  }

  const wrapperStyle = {
    maxHeight: 'calc(100vh - 200px)', // Adjust the value as needed
    overflowY: 'auto',
  };

  const getCardHeight = (exercises) => {
    // Calculate the card height based on the number of exercises
    // let baseHeight = 210; // Base height of the card
    // let exerciseHeight = 90; // Height of each exercise item
  
    // if (exercises.length === 4) {
    //   baseHeight = 340; // Adjust the base height for 4 exercises
    //   exerciseHeight = 50; // Adjust the exercise height for 4 exercises
    // }
    // if (exercises.length === 5) {
    //   baseHeight = 395; // Adjust the base height for 4 exercises
    //   exerciseHeight = 50; // Adjust the exercise height for 4 exercises
    // }
  
    // const totalHeight = baseHeight + exerciseHeight * exercises.length;
    const totalHeight = 740;
    return totalHeight;
  };
  

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
      <div style={wrapperStyle}>
        <h1 style={{ textAlign: 'center', marginTop: '0px' }}>My Workouts</h1>
        <div style={cardContainerStyle}>
          {workouts.map((workout) => (
            <div key={workout.id} style={{ ...cardStyle, height: getCardHeight(workout.exercises) }}>
              <h2 style={workoutNameStyle}>{workout.workoutName}</h2>
              <p>Muscle Group(s): {workout.muscleGroup}</p>
              {workout.exercises.map((exercise, index) => (
                <div key={index}>
                  <p>
                    <strong>Exercise: </strong>
                    {exercise.exerciseName}
                  </p>
                  <p>
                    <strong>Sets: </strong>
                    {exercise.sets}
                  </p>
                  <p>
                    <strong>Reps: </strong>
                    {exercise.reps}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorkout;
