// import React from 'react';
// import pullup from './images/pullup.jpg';
// import row from './images/row.jpg';
// import latpulldown from './images/latpulldown.jpg';

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
//   flex: '1 0 calc(41.1% - 40px)', // Adjust the width here (subtract the total horizontal padding)
//   height: '500px', // Adjust the height as needed
//   boxSizing: 'border-box', // Include padding and border in the total width and height
// };


// function Card1() {
//   return (
//     <div style={cardStyle}>
//       <img src={pullup} alt="pullup" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Pull Ups</h2>
//       </div>
//     </div>
//   );
// }

// function Card2() {
//   return (
//     <div style={cardStyle}>
//       <img src={row} alt="row" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Rows</h2>
//       </div>
//     </div>
//   );
// }
// function Card3() {
//   return (
//     <div style={cardStyle}>
//       <img src={latpulldown} alt="lateralpulldown" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Lat Pull Down</h2>
//       </div>
//     </div>
//   );
// }
// function BackPage() {
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
//       <h1 style={headingStyle}>Back Page</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Card1/>
//         <Card2/>
//         <Card3/>
//       </div>
//     </div>
//   );
// }

// export default BackPage;



import React, { useState, useEffect } from 'react';
import latpulldowns from './images/latpulldown.jpg';
import bentrows from './images/bentrows.jpg';
import seatedcablerows from './images/seatedcablerows.jpg';
import superman from './images/superman.jpg';
import backextensions from './images/backextensions.jpg';
import reverseflyes from './images/reverseflyes.jpg';
import './BackPage.css'; // Import the CSS file

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
      <img src={latpulldowns} alt="latpulldowns" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Lat Pulldowns</h2>
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
      <img src={bentrows} alt="bentrows" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Bent Rows</h2>
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
      <img src={seatedcablerows} alt="seatedcablerows" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Seated Cable Rows</h2>
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
      <img src={superman} alt="superman" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Superman  </h2>
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
      <img src={backextensions} alt="backextensions" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Back Extnsions  </h2>
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
      <img src={reverseflyes} alt="reverseflyes" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Reverse Flyes </h2>
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


function BackPage() {
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
      <h1 style={headingStyle}>Back Page</h1>
      <div className="card-container">
        <Card1
          personalRecord={personalRecords[17]}
          onRecordChange={(e) => handleRecordChange(17, e.target.value)}
          onEditClick={() => handleEditClick(17)}
          onSubmit={() => handleSubmit(17)}
        />
        <Card2
          personalRecord={personalRecords[18]}
          onRecordChange={(e) => handleRecordChange(18, e.target.value)}
          onEditClick={() => handleEditClick(18)}
          onSubmit={() => handleSubmit(18)}
        />
        <Card3
          personalRecord={personalRecords[19]}
          onRecordChange={(e) => handleRecordChange(19, e.target.value)}
          onEditClick={() => handleEditClick(19)}
          onSubmit={() => handleSubmit(19)}
        />
        <Card4
          personalRecord={personalRecords[20]}
          onRecordChange={(e) => handleRecordChange(20, e.target.value)}
          onEditClick={() => handleEditClick(20)}
          onSubmit={() => handleSubmit(20)}
        />
         <Card5
          personalRecord={personalRecords[21]}
          onRecordChange={(e) => handleRecordChange(21, e.target.value)}
          onEditClick={() => handleEditClick(21)}
          onSubmit={() => handleSubmit(21)}
        />
         <Card6
          personalRecord={personalRecords[22]}
          onRecordChange={(e) => handleRecordChange(22, e.target.value)}
          onEditClick={() => handleEditClick(22)}
          onSubmit={() => handleSubmit(22)}
        />
      </div>
    </div>
  );
}

export default BackPage;
