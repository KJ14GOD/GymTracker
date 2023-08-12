// import React, { useState } from 'react';
// import './HomePage.css';

// function HomePage() {
//   const [streak, setStreak] = useState(0);
//   const [workout, setWorkout] = useState('');
//   const [minutes, setMinutes] = useState('');
//   const [arm_exercise, setArmExercise] = useState('');
//   const [leg_exercise, setLegExercise] = useState('');
//   const [chest_exercise, setChestExercise] = useState('');
//   const [back_exercise, setBackExercise] = useState('');
//   const [date, setDate] = useState(''); 

  
//   const handleWorkoutSubmit = (event) => {
//     event.preventDefault();
  
//     // Create an object with the form data
//     const formData = {
//       workout,
//       minutes,
//       arm_exercise,
//       leg_exercise,
//       chest_exercise,
//       back_exercise,
//       date
//     };
  
//     // Send a POST request to the API endpoint
//     fetch('http://localhost:8000/api/form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         console.log(data); // You can customize this based on your requirements
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle the error
//       });
  
//     // Increment the streak if the user worked out today
//     if (workout === 'yes') {
//       setStreak(streak + 1);
//     } else {
//       setStreak(0);
//     }
  
//     // Clear the form inputs
//     setWorkout('');
//     setMinutes('');
//     setArmExercise('');
//     setLegExercise('');
//     setChestExercise('');
//     setBackExercise('');
//     setDate('');
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
//           {/* <li><a href='/creatediet'>Create Diet</a></li> */}
//           <li><a href='/myworkout'>My Workout</a></li>
//           {/* <li><a href='/mydiet'>My Diet</a></li> */}
//         </ul>
//       </nav>
//       <header>
//         <h1>Gym Progress Tracker</h1>
//         <div id="streak">Streak: {streak} days</div>
//       </header>
//       <main>
//         <div className='question'>
//           <h2>Did you work out today?</h2>
//           <form onSubmit={handleWorkoutSubmit}>
//             <div>
//               <input
//                 type="radio"
//                 id="yesOption"
//                 name="workout"
//                 value="yes"
//                 checked={workout === 'yes'}
//                 onChange={(e) => setWorkout(e.target.value)} 
//               />
//               <label htmlFor="yesOption">Yes</label>
//               <input
//                 type="radio"
//                 id="noOption"
//                 name="workout"
//                 value="no"
//                 checked={workout === 'no'}
//                 onChange={(e) => setWorkout(e.target.value)}
//               />
//               <label htmlFor="noOption">No</label>
//             </div>
//             <h2>How many minutes did you work out?</h2>
//             <input
//               type="number"
//               value={minutes}
//               onChange={(e) => setMinutes(e.target.value)}
//             />
//             <h2>What arm exercises did you do?</h2>
//             <select value={arm_exercise} onChange={(e) => setArmExercise(e.target.value)}>
//               <option value="">Select an exercise</option>
//               <option value="Bicep Curls">Bicep Curls</option>
//               <option value="Tricep Dips">Tricep Dips</option>
//               <option value="Hammer Curls">Hammer Curls</option>
//               <option value="Tricep Pushdowns">Tricep Pushdowns</option>
//               <option value="Reverse Curls">Reverse Curls</option>
//               <option value="Cable Curls">Cable Curls</option>
//               <option value="None1">None</option>
//             </select>
//             <h2>What leg exercises did you do?</h2>
//             <select value={leg_exercise} onChange={(e) => setLegExercise(e.target.value)}>
//               <option value="">Select an exercise</option>
//               <option value="Bodyweight Squats">Bodyweight Squats</option>
//               <option value="Leg Press">Leg Press</option>
//               <option value="Goblet Squat">Goblet Squat</option>
//               <option value="Dumbbell Lunges">Dumbbell Lunges</option>
//               <option value="Leg Extensions ">Leg Extensions</option>
//               <option value="Calf Raises">Calf Raises</option>
//               <option value="None2">None</option>
//             </select>
//             <h2>What chest exercises did you do?</h2>
//             <select value={chest_exercise} onChange={(e) => setChestExercise(e.target.value)}>
//               <option value="">Select an exercise</option>
//               <option value="Barbell Bench Press">Barbell Bench Press</option>
//               <option value="Push-ups">Push-ups</option>
//               <option value="Incline Dumbbell Press">Incline Dumbbell Press</option>
//               <option value="Dumbbell Chest Press">Dumbbell Chest Press</option>
//               <option value="None3">None</option>
//             </select>
//             <h2>What back exercises did you do?</h2>
//             <select value={back_exercise} onChange={(e) => setBackExercise(e.target.value)}>
//               <option value="">Select an exercise</option>
//               <option value="Lat Pulldowns">Lat Pulldowns</option>
//               <option value="Bent Rows">Bent Rows</option>
//               <option value='Seated Cable Rows'>Seated Cable Rows</option>
//               <option value='Superman'>Superman</option>
//               <option value='Back Extensions'>Back Extensions</option>
//               <option value='Reverse Flyes'>Reverse Flyes</option>
//               <option value="None4">None</option>
//             </select>
//             <div className='question'>
//             </div>
//               <div className='question'>
//               <h2>What is the date today?</h2>
//               <input
//                type="text"
//                value={date}
//                onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <div className='submit-button-container'>
//                 <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [streak, setStreak] = useState(0);
  const [workout, setWorkout] = useState('');
  const [minutes, setMinutes] = useState('');
  const [arm_exercises, setArmExercises] = useState([]);
  const [leg_exercises, setLegExercises] = useState([]);
  const [chest_exercises, setChestExercises] = useState([]);
  const [back_exercises, setBackExercises] = useState([]);
  const [date, setDate] = useState('');

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
  
    // Create an object with the form data
    const formData = {
      workout,
      minutes,
      arm_exercise: arm_exercises.join(', '),
      leg_exercise: leg_exercises.join(', '),
      chest_exercise: chest_exercises.join(', '),
      back_exercise: back_exercises.join(', '),
      date,
    };
  
    // Send a POST request to the API endpoint
    fetch('http://localhost:8000/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data); // You can customize this based on your requirements
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error
      });
  
    // Increment the streak if the user worked out today
    if (workout === 'yes') {
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  
    // Clear the form inputs
    setWorkout('');
    setMinutes('');
    setArmExercises([]);
    setLegExercises([]);
    setChestExercises([]);
    setBackExercises([]);
    setDate('');
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
          <li><a href='/myworkout'>My Workout</a></li>
          <li><a href='/notes'>Notes</a></li>
        </ul>
      </nav>
      <header>
        <h1>Gym Progress Tracker</h1>
        <div id="streak">Streak: {streak} days</div>
      </header>
      <main>
        <div className="question">
          <h2>Did you work out today?</h2>
          <form onSubmit={handleWorkoutSubmit}>
            <div>
              <input
                type="radio"
                id="yesOption"
                name="workout"
                value="yes"
                checked={workout === 'yes'}
                onChange={(e) => setWorkout(e.target.value)}
              />
              <label htmlFor="yesOption">Yes</label>
              <input
                type="radio"
                id="noOption"
                name="workout"
                value="no"
                checked={workout === 'no'}
                onChange={(e) => setWorkout(e.target.value)}
              />
              <label htmlFor="noOption">No</label>
            </div>
            <h2>How many minutes did you work out?</h2>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <h2>What arm exercises did you do?</h2>
            <select
              multiple
              value={arm_exercises}
              onChange={(e) =>
                setArmExercises(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              <option value="">Select an exercise</option>
              <option value="Bicep Curls">Bicep Curls</option>
              <option value="Tricep Dips">Tricep Dips</option>
              <option value="Hammer Curls">Hammer Curls</option>
              <option value="Tricep Pushdowns">Tricep Pushdowns</option>
              <option value="Reverse Curls">Reverse Curls</option>
              <option value="Cable Curls">Cable Curls</option>
              <option value="None1">None</option>
            </select>
            <h2>What leg exercises did you do?</h2>
            <select
              multiple
              value={leg_exercises}
              onChange={(e) =>
                setLegExercises(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              <option value="">Select an exercise</option>
              <option value="Bodyweight Squats">Bodyweight Squats</option>
              <option value="Leg Press">Leg Press</option>
              <option value="Goblet Squat">Goblet Squat</option>
              <option value="Dumbbell Lunges">Dumbbell Lunges</option>
              <option value="Leg Extensions">Leg Extensions</option>
              <option value="Calf Raises">Calf Raises</option>
              <option value="None2">None</option>
            </select>
            <h2>What chest exercises did you do?</h2>
            <select
              multiple
              value={chest_exercises}
              onChange={(e) =>
                setChestExercises(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              <option value="">Select an exercise</option>
              <option value="Barbell Bench Press">Barbell Bench Press</option>
              <option value="Push-ups">Push-ups</option>
              <option value="Incline Dumbbell Press">Incline Dumbbell Press</option>
              <option value="Dumbbell Chest Press">Dumbbell Chest Press</option>
              <option value="None3">None</option>
            </select>
            <h2>What back exercises did you do?</h2>
            <select
              multiple
              value={back_exercises}
              onChange={(e) =>
                setBackExercises(Array.from(e.target.selectedOptions, (option) => option.value))
              }
            >
              <option value="">Select an exercise</option>
              <option value="Lat Pulldowns">Lat Pulldowns</option>
              <option value="Bent Rows">Bent Rows</option>
              <option value="Seated Cable Rows">Seated Cable Rows</option>
              <option value="Superman">Superman</option>
              <option value="Back Extensions">Back Extensions</option>
              <option value="Reverse Flyes">Reverse Flyes</option>
              <option value="None4">None</option>
            </select>
            <div className="question">
              <h2>What is the date today?</h2>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="submit-button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
