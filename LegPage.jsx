// import React from 'react';
// import squat from './images/squat.jpg';
// import lunges from './images/lunges.jpg';
// import legpress from './images/legpress.jpg';


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
//   flex: '1 0 calc(48% - 40px)', // Adjust the width here (subtract the total horizontal padding)
//   height: '500px', // Adjust the height as needed
//   boxSizing: 'border-box', // Include padding and border in the total width and height
// };


// function Card1() {
//   return (
//     <div style={cardStyle}>
//       <img src={squat} alt="squat" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Squat</h2>
//       </div>
//     </div>
//   );
// }

// function Card2() {
//   return (
//     <div style={cardStyle}>
//       <img src={lunges} alt="lunges" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Lunges</h2>
//       </div>
//     </div>
//   );
// }
// function Card3() {
//   return (
//     <div style={cardStyle}>
//       <img src={legpress} alt="legpress" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Leg Press</h2>
//       </div>
//     </div>
//   );
// }
// function LegPage() {
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
//           {/* <li><a href="/creatediet">Create Diet</a></li>  */}
//           <li><a href='/myworkout'>My Workout</a></li>
//           {/* <li><a href='/mydiet'>My Diet</a></li> */}

//         </ul>
//       </nav>
//       <h1 style={headingStyle}>Leg Page</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Card1/>
//         <Card2/>
//         <Card3/>
//       </div>
//     </div>
//   );
// }

// export default LegPage;


import React, { useState, useEffect } from 'react';
import './LegPage.css'; // Import the CSS file
import calfraises from './images/calfraises.jpg';
import bodyweightsquats from './images/bodyweightsquat.jpg';
import dumbbelllunges from './images/dumbbelllunges.jpg';
import legpress from './images/legpress.jpg';
import gobletsquat from './images/gobletsquat.jpg';
import legextensions from './images/legextensions.jpg';

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
  width: '410px', // Set a fixed width for each card
  height: '350px',
  boxSizing: 'border-box',
};

function Card1({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={bodyweightsquats} alt="bodyweightsquats" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Bodyweight Squats</h2>
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
      <img src={legpress} alt="legpress" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Leg Press</h2>
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
      <img src={gobletsquat} alt="gobletsquat" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Goblet Squat</h2>
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
      <img src={dumbbelllunges} alt="dumbbelllunges" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Dumbbell Lunges</h2>
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
function Card5({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={legextensions} alt="legextensions" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Leg Extensions</h2>
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
function Card6({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={calfraises} alt="calfraises" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Calf Raises</h2>
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


// function LegPage() {
//   const [personalRecords, setPersonalRecords] = useState(['', '', '', '']);

//   const handleRecordChange = (index, value) => {
//     const updatedRecords = [...personalRecords];
//     updatedRecords[index] = value;
//     setPersonalRecords(updatedRecords);
//   };

//   const handleEditClick = (index) => {
//     const value = personalRecords[index];
//     // Implement logic for handling edit click
//   };

//   const handleSubmit = (index) => {
//     const value = personalRecords[index];
//     // Implement logic for handling submit click
//   };
function LegPage() {
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
      <h1 style={headingStyle}>Leg Page</h1>
      <div className="card-container">
        <Card1
          personalRecord={personalRecords[6]}
          onRecordChange={(e) => handleRecordChange(6, e.target.value)}
          onEditClick={() => handleEditClick(6)}
          onSubmit={() => handleSubmit(6)}
        />
        <Card2
          personalRecord={personalRecords[7]}
          onRecordChange={(e) => handleRecordChange(7, e.target.value)}
          onEditClick={() => handleEditClick(7)}
          onSubmit={() => handleSubmit(7)}
        />
        <Card3
          personalRecord={personalRecords[8]}
          onRecordChange={(e) => handleRecordChange(8, e.target.value)}
          onEditClick={() => handleEditClick(8)}
          onSubmit={() => handleSubmit(8)}
        />
        <Card4
          personalRecord={personalRecords[9]}
          onRecordChange={(e) => handleRecordChange(9, e.target.value)}
          onEditClick={() => handleEditClick(9)}
          onSubmit={() => handleSubmit(9)}
        />
        <Card5
          personalRecord={personalRecords[10]}
          onRecordChange={(e) => handleRecordChange(10, e.target.value)}
          onEditClick={() => handleEditClick(10)}
          onSubmit={() => handleSubmit(10)}
        />
         <Card6
          personalRecord={personalRecords[11]}
          onRecordChange={(e) => handleRecordChange(11, e.target.value)}
          onEditClick={() => handleEditClick(11)}
          onSubmit={() => handleSubmit(11)}
        />
      </div>
    </div>
  );
}

export default LegPage;
