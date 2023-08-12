// import React from 'react';
// import benchpress from './images/bench.jpg';
// import pushups from './images/pushup.jpg';
// import chestflyes from './images/flyes.jpg';

// const headingStyle = {
//   marginTop: '-30px', // Adjust the margin value as needed
//   textAlign: 'center'
// };

// const cardStyle = {
//   marginTop: '50px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '20px',
//   margin: '10px',
//   textAlign: 'center',
//   flex: '1 0 calc(45.8% - 40px)', // Adjust the width here (subtract the total horizontal padding)
//   height: '500px', // Adjust the height as needed
//   boxSizing: 'border-box', // Include padding and border in the total width and height
// };


// function Card1() {
//   return (
//     <div style={cardStyle}>
//       <img src={benchpress} alt="benchpress" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Bench Press</h2>
//       </div>
//     </div>
//   );
// }

// function Card2() {
//   return (
//     <div style={cardStyle}>
//       <img src={pushups} alt="pushups" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Push Ups</h2>
//       </div>
//     </div>
//   );
// }
// function Card3() {
//   return (
//     <div style={cardStyle}>
//       <img src={chestflyes} alt="chestflyes" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Chest Flyes</h2>
//       </div>
//     </div>
//   );
// }
// function ChestPage() {
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
//       <h1 style={headingStyle}>Chest Page</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Card1/>
//         <Card2/>
//         <Card3/>
//       </div>
//     </div>
//   );
// }

// export default ChestPage;


import React, { useState, useEffect } from 'react';
import barbellbenchpress from './images/barbellbenchpress.jpg';
import pushup from './images/pushup.jpg';
import inclinedumbbellpress from './images/inclinedumbbellpress.jpg';
import dumbbellchestpress from './images/dumbbellchestpress.jpg';
import './ChestPage.css'; // Import the CSS file

const headingStyle = {
  marginTop: '-100px', // Adjust the margin value as needed
  textAlign: 'center'
};

const cardStyle = {
  marginTop: '50px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  // width: '410px', // Set a fixed width for each card
  width: '639px',
  height: '350px',
  boxSizing: 'border-box',
};

function Card1({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={barbellbenchpress} alt="barbellbenchpress" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Barbell Bench Press</h2>
        <p>Personal Best:</p>
        <input
          type="text"
          value={personalRecord || ''}
          onChange={onRecordChange}
        />
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

function Card2({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={pushup} alt="pushup" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Push Ups</h2>
        <p>Personal Best:</p>
        <input
          type="text"
          value={personalRecord || ''}
          onChange={onRecordChange}
        />
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

function Card3({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={inclinedumbbellpress} alt="inclinedumbbellpress" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Incline Dumbbell Press</h2>
        <p>Personal Best:</p>
        <input
          type="text"
          value={personalRecord || ''}
          onChange={onRecordChange}
        />
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

function Card4({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={dumbbellchestpress} alt="dumbbellchestpress" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Dumbbell Chest Press</h2>
        <p>Personal Best:</p>
        <input
          type="text"
          value={personalRecord || ''}
          onChange={onRecordChange}
        />
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

function ChestPage() {
  const [personalRecords, setPersonalRecords] = useState(['', '', '', '', '', '']);

  const handleRecordChange = (index, value) => {
    const updatedRecords = [...personalRecords];
    updatedRecords[index] = value;
    setPersonalRecords(updatedRecords);
  };
 
  

  const handleEditClick = (index) => {
    const value = personalRecords[index];
    console.log(`Edit clicked for index ${index}, value: ${value}`);
  };

  const handleSubmit = async (index) => {
    const value = personalRecords[index];
    console.log(`Submit clicked for index ${index}, value: ${value}`);

    try {
      const response = await fetch('/api/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exercise_name: `Exercise ${index + 1}`,
          personal_best: value,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Submitted successfully:', data);

        // Update the state with the submitted data
        const updatedRecords = [...personalRecords];
        updatedRecords[index] = value;
        setPersonalRecords(updatedRecords);
      } else {
        console.log('Submission failed:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getexercises');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data);

          // Update the state with the fetched data
          const updatedRecords = [...personalRecords];
          data.forEach((exercise, index) => {
            updatedRecords[index] = exercise.personal_best;
          });
          setPersonalRecords(updatedRecords);
        } else {
          console.log('Fetching data failed:', response.statusText);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
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
          {/* <li><a href='/creatediet'>Create Diet</a></li> */}
          <li><a href='/myworkout'>My Workout</a></li>
          {/* <li><a href='/mydiet'>My Diet</a></li> */}
        </ul>
      </nav>
      <h1 style={headingStyle}>Chest Page</h1>
      <div className="card-container">
        <Card1
          personalRecord={personalRecords[12]}
          onRecordChange={(e) => handleRecordChange(12, e.target.value)}
          onEditClick={() => handleEditClick(12)}
          onSubmit={() => handleSubmit(12)}
        />
        <Card2
          personalRecord={personalRecords[13]}
          onRecordChange={(e) => handleRecordChange(13, e.target.value)}
          onEditClick={() => handleEditClick(13)}
          onSubmit={() => handleSubmit(13)}
        />
        <Card3
          personalRecord={personalRecords[14]}
          onRecordChange={(e) => handleRecordChange(14, e.target.value)}
          onEditClick={() => handleEditClick(14)}
          onSubmit={() => handleSubmit(14)}
        />
        <Card4
          personalRecord={personalRecords[15]}
          onRecordChange={(e) => handleRecordChange(15, e.target.value)}
          onEditClick={() => handleEditClick(15)}
          onSubmit={() => handleSubmit(15)}
        />
      </div>
    </div>
  );
}

export default ChestPage;
