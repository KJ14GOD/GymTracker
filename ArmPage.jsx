// import React, {useState} from 'react';
// import curlImage from './images/curl.jpg';
// import tricepDips from './images/tricepdips.jpg';
// import hammerCurls from './images/hammercurls.jpg';
// import tricepushdowns from './images/tricepushdowns.jpg';

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
//   flex: '1 0 calc(49.4% - 40px)', // Adjust the width here (subtract the total horizontal padding)
//   height: '500px', // Adjust the height as needed
//   boxSizing: 'border-box', // Include padding and border in the total width and height
// };



// function Card1({personalRecord, onRecordChange, onEditClick, onSubmit}) {
//   return (
//     <div style={cardStyle}>
//       <img src={curlImage} alt="curlimage" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Bicep Curl</h2>
//         <p> Personal Best: </p>
//         <input
//         type="text"
//         value={personalRecord || ''}
//         onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card2({personalRecord, onRecordChange, onEditClick, onSubmit}) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepDips} alt="tricepdips" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Tricep Dips</h2>
//         <p> Personal Best: </p>
//         <input
//         type="text"
//         value={personalRecord || ''}
//         onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }
// function Card3({personalRecord, onRecordChange, onEditClick, onSubmit}) {
//   return (
//     <div style={cardStyle}>
//       <img src={hammerCurls} alt="hammercurl" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Hammer Curls</h2>
//         <p> Personal Best: </p>
//         <input
//         type="text"
//         value={personalRecord || ''}
//         onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card4({personalRecord, onRecordChange, onEditClick, onSubmit}) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepushdowns} alt="tricepushdowns" style={{ maxWidth: '80%', maxHeight: '40%'}} />
//       <div className="card-content">
//         <h2>Tricep Pushdowns</h2>
//         <p> Personal Best: </p>
//         <input
//         type="text"
//         value={personalRecord || ''}
//         onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }
// function ArmPage() {
//   const [personalRecords, setPersonalRecords] = useState(['', '', '']);

//   const handleRecordChangeCard1 = (event) => {
//     const newPersonalRecords = [...personalRecords];
//     newPersonalRecords[0] = event.target.value;
//     setPersonalRecords(newPersonalRecords);
//   };

//   const handleEditClickCard1 = () => {
//     const currentRecord = personalRecords[0];
//     const editedRecord = prompt('Enter new personal record:', currentRecord);

//     if (editedRecord !== null) {
//       const newPersonalRecords = [...personalRecords];
//       newPersonalRecords[0] = editedRecord;
//       setPersonalRecords(newPersonalRecords);
//     }
//   };

//   const handleSubmitCard1 = () => {
//     const currentRecord = personalRecords[0];
//     console.log('Submitted Personal Record For Bicep Curls:', currentRecord);
//   };

//   const handleRecordChangeCard2 = (event) => {
//     const newPersonalRecords = [...personalRecords];
//     newPersonalRecords[1] = event.target.value;
//     setPersonalRecords(newPersonalRecords);
//   };

//   const handleEditClickCard2 = () => {
//     const currentRecord = personalRecords[1];
//     const editedRecord = prompt('Enter new personal record:', currentRecord);

//     if (editedRecord !== null) {
//       const newPersonalRecords = [...personalRecords];
//       newPersonalRecords[1] = editedRecord;
//       setPersonalRecords(newPersonalRecords);
//     }
//   };

//   const handleSubmitCard2 = () => {
//     const currentRecord = personalRecords[1];
//     console.log('Submitted Personal Record For Tricep Dips:', currentRecord);
//   };

//   const handleRecordChangeCard3 = (event) => {
//     const newPersonalRecords = [...personalRecords];
//     newPersonalRecords[2] = event.target.value;
//     setPersonalRecords(newPersonalRecords);
//   };

//   const handleEditClickCard3 = () => {
//     const currentRecord = personalRecords[2];
//     const editedRecord = prompt('Enter new personal record:', currentRecord);

//     if (editedRecord !== null) {
//       const newPersonalRecords = [...personalRecords];
//       newPersonalRecords[2] = editedRecord;
//       setPersonalRecords(newPersonalRecords);
//     }
//   };

//   const handleSubmitCard3 = () => {
//     const currentRecord = personalRecords[2];
//     console.log('Submitted Personal Record For Hammer Curls:', currentRecord);
//   };


//   const handleRecordChangeCard4 = (event) => {
//     const newPersonalRecords = [...personalRecords];
//     newPersonalRecords[3] = event.target.value;
//     setPersonalRecords(newPersonalRecords);
//   };

//   const handleEditClickCard4 = () => {
//     const currentRecord = personalRecords[3];
//     const editedRecord = prompt('Enter new personal record:', currentRecord);

//     if (editedRecord !== null) {
//       const newPersonalRecords = [...personalRecords];
//       newPersonalRecords[3] = editedRecord;
//       setPersonalRecords(newPersonalRecords);
//     }
//   };

//   const handleSubmitCard4 = () => {
//     const currentRecord = personalRecords[3];
//     console.log('Submitted Personal Record For Hammer Curls:', currentRecord);
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
//           <li><a href="/workoutcard">Workout Card</a></li>
//           <li><a href='/createworkout'>Create Workout</a></li>
//           <li><a href='/creatediet'>Create Diet</a></li>
//           {/* <li><a href='/myworkout'>My Workout</a></li>
//           <li><a href='/mydiet'>My Diet</a></li> */}
//         </ul>
//       </nav>
//       <h1 style={headingStyle}>Arm Page</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Card1
//            personalRecord={personalRecords[0]}
//            onRecordChange={handleRecordChangeCard1}
//            onEditClick={() => handleEditClickCard1(0)}
//            onSubmit={() => handleSubmitCard1(0)}
//         />
//         <Card2
//         personalRecord={personalRecords[1]}
//         onRecordChange={handleRecordChangeCard2}
//         onEditClick={() => handleEditClickCard2(1)}
//         onSubmit={() => handleSubmitCard2(1)}
//         />
//         <Card3
//         personalRecord={personalRecords[2]}
//         onRecordChange={handleRecordChangeCard3}
//         onEditClick={() => handleEditClickCard3(2)}
//         onSubmit={() => handleSubmitCard3(2)}
//         />
//          <Card4
//         personalRecord={personalRecords[3]}
//         onRecordChange={handleRecordChangeCard4}
//         onEditClick={() => handleEditClickCard4(3)}
//         onSubmit={() => handleSubmitCard4(3)}
//         />
//       </div>
//     </div>
//   );
// }

// export default ArmPage;



// import React, { useState } from 'react';
// import curlImage from './images/curl.jpg';
// import tricepDips from './images/tricepdips.jpg';
// import hammerCurls from './images/hammercurls.jpg';
// import tricepushdowns from './images/tricepushdowns.jpg';
// import './ArmPage.css'; // Import the CSS file
// import reversecurls from './images/reversecurls.jpg';
// import cablecurls from './images/cablecurls.jpg';

// const headingStyle = {
//   marginTop: '-100px', // Adjust the margin value as needed
//   textAlign: 'center'
// };

// const cardStyle = {
//   marginTop: '50px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '20px',
//   margin: '10px',
//   textAlign: 'center',
//   width: '410px', // Set a fixed width for each card
//   height: '350px',
//   boxSizing: 'border-box',
// };

// function Card1({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={curlImage} alt="curlimage" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Bicep Curl</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card2({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepDips} alt="tricepdips" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Tricep Dips</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card3({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={hammerCurls} alt="hammercurl" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Hammer Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card4({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepushdowns} alt="tricepushdowns" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Tricep Pushdowns</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }
// function Card5({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={reversecurls} alt="reversecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Reverse Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }
// function Card6({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={cablecurls} alt="cablecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Cable Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }


// function ArmPage() {
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
//       <h1 style={headingStyle}>Arm Page</h1>
//       <div className="card-container">
//         <Card1
//           personalRecord={personalRecords[0]}
//           onRecordChange={(e) => handleRecordChange(0, e.target.value)}
//           onEditClick={() => handleEditClick(0)}
//           onSubmit={() => handleSubmit(0)}
//         />
//         <Card2
//           personalRecord={personalRecords[1]}
//           onRecordChange={(e) => handleRecordChange(1, e.target.value)}
//           onEditClick={() => handleEditClick(1)}
//           onSubmit={() => handleSubmit(1)}
//         />
//         <Card3
//           personalRecord={personalRecords[2]}
//           onRecordChange={(e) => handleRecordChange(2, e.target.value)}
//           onEditClick={() => handleEditClick(2)}
//           onSubmit={() => handleSubmit(2)}
//         />
//         <Card4
//           personalRecord={personalRecords[3]}
//           onRecordChange={(e) => handleRecordChange(3, e.target.value)}
//           onEditClick={() => handleEditClick(3)}
//           onSubmit={() => handleSubmit(3)}
//         />
//         <Card5
//           personalRecord={personalRecords[4]}
//           onRecordChange={(e) => handleRecordChange(4, e.target.value)}
//           onEditClick={() => handleEditClick(4)}
//           onSubmit={() => handleSubmit(4)}
//         />
//          <Card6
//           personalRecord={personalRecords[5]}
//           onRecordChange={(e) => handleRecordChange(5, e.target.value)}
//           onEditClick={() => handleEditClick(5)}
//           onSubmit={() => handleSubmit(5)}
//         />
//       </div>
//     </div>
//   );
// }

// export default ArmPage;


// import React, { useState } from 'react';
// import curlImage from './images/curl.jpg';
// import tricepDips from './images/tricepdips.jpg';
// import hammerCurls from './images/hammercurls.jpg';
// import tricepushdowns from './images/tricepushdowns.jpg';
// import reversecurls from './images/reversecurls.jpg';
// import cablecurls from './images/cablecurls.jpg';
// import './ArmPage.css';

// const headingStyle = {
//   marginTop: '-100px',
//   textAlign: 'center'
// };

// const cardStyle = {
//   marginTop: '50px',
//   border: '1px solid #ccc',
//   borderRadius: '5px',
//   padding: '20px',
//   margin: '10px',
//   textAlign: 'center',
//   width: '410px',
//   height: '350px',
//   boxSizing: 'border-box',
// };

// function Card1({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={curlImage} alt="curlimage" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Bicep Curl</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card2({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepDips} alt="tricepdips" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Tricep Dips</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card3({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={hammerCurls} alt="hammercurl" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Hammer Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card4({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={tricepushdowns} alt="tricepushdowns" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Tricep Pushdowns</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card5({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={reversecurls} alt="reversecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Reverse Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function Card6({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
//   return (
//     <div style={cardStyle}>
//       <img src={cablecurls} alt="cablecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
//       <div className="card-content">
//         <h2>Cable Curls</h2>
//         <p>Personal Best:</p>
//         <input
//           type="text"
//           value={personalRecord || ''}
//           onChange={onRecordChange}
//         />
//         <button onClick={onEditClick}>Edit</button>
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }

// function ArmPage() {
//   const [personalRecords, setPersonalRecords] = useState(['', '', '', '', '', '']);

//   const handleRecordChange = (index, value) => {
//     const updatedRecords = [...personalRecords];
//     updatedRecords[index] = value;
//     setPersonalRecords(updatedRecords);
//   };

//   const handleEditClick = (index) => {
//     const value = personalRecords[index];
//     console.log(`Edit clicked for index ${index}, value: ${value}`);
//   };

//   const handleSubmit = async (index) => {
//     const value = personalRecords[index];
//     console.log(`Submit clicked for index ${index}, value: ${value}`);
  
//     try {
//       const response = await fetch('/api/exercises', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           exercise_name: `Exercise ${index + 1}`,
//           personal_best: value,
//         }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Submitted successfully:', data);
  
//         // Update the state with the submitted data
//         const updatedRecords = [...personalRecords];
//         updatedRecords[index] = value;
//         setPersonalRecords(updatedRecords);
//       } else {
//         console.log('Submission failed:', response.statusText);
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h1 style={headingStyle}>Arm Workout</h1>
//       <div className="card-container">
//         <Card1
//           personalRecord={personalRecords[0]}
//           onRecordChange={(e) => handleRecordChange(0, e.target.value)}
//           onEditClick={() => handleEditClick(0)}
//           onSubmit={() => handleSubmit(0)}
//         />
//         <Card2
//           personalRecord={personalRecords[1]}
//           onRecordChange={(e) => handleRecordChange(1, e.target.value)}
//           onEditClick={() => handleEditClick(1)}
//           onSubmit={() => handleSubmit(1)}
//         />
//         <Card3
//           personalRecord={personalRecords[2]}
//           onRecordChange={(e) => handleRecordChange(2, e.target.value)}
//           onEditClick={() => handleEditClick(2)}
//           onSubmit={() => handleSubmit(2)}
//         />
//         <Card4
//           personalRecord={personalRecords[3]}
//           onRecordChange={(e) => handleRecordChange(3, e.target.value)}
//           onEditClick={() => handleEditClick(3)}
//           onSubmit={() => handleSubmit(3)}
//         />
//         <Card5
//           personalRecord={personalRecords[4]}
//           onRecordChange={(e) => handleRecordChange(4, e.target.value)}
//           onEditClick={() => handleEditClick(4)}
//           onSubmit={() => handleSubmit(4)}
//         />
//         <Card6
//           personalRecord={personalRecords[5]}
//           onRecordChange={(e) => handleRecordChange(5, e.target.value)}
//           onEditClick={() => handleEditClick(5)}
//           onSubmit={() => handleSubmit(5)}
//         />
//       </div>
//     </div>
//   );
// }

// export default ArmPage;


import React, { useState, useEffect } from 'react';
import curlImage from './images/curl.jpg';
import tricepDips from './images/tricepdips.jpg';
import hammerCurls from './images/hammercurls.jpg';
import tricepushdowns from './images/tricepushdowns.jpg';
import reversecurls from './images/reversecurls.jpg';
import cablecurls from './images/cablecurls.jpg';
import './ArmPage.css';

const headingStyle = {
  marginTop: '-100px',
  textAlign: 'center',
};

const cardStyle = {
  marginTop: '50px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  margin: '10px',
  textAlign: 'center',
  width: '410px',
  height: '350px',
  boxSizing: 'border-box',
};

function Card1({ personalRecord, onRecordChange, onEditClick, onSubmit }) {
  return (
    <div style={cardStyle}>
      <img src={curlImage} alt="curlimage" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Bicep Curl</h2>
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
      <img src={tricepDips} alt="tricepdips" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Tricep Dips</h2>
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
      <img src={hammerCurls} alt="hammercurl" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Hammer Curls</h2>
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
      <img src={tricepushdowns} alt="tricepushdowns" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Tricep Pushdowns</h2>
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
      <img src={reversecurls} alt="reversecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Reverse Curls</h2>
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
      <img src={cablecurls} alt="cablecurls" style={{ maxWidth: '80%', maxHeight: '40%' }} />
      <div className="card-content">
        <h2>Cable Curls</h2>
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

function ArmPage() {
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
          <li><a href='/myworkout'>My Workout</a></li>
        </ul>
      </nav>
      <h1 style={headingStyle}>Arm Page</h1>
      <div className="card-container">
        <Card1
          personalRecord={personalRecords[0]}
          onRecordChange={(e) => handleRecordChange(0, e.target.value)}
          onEditClick={() => handleEditClick(0)}
          onSubmit={() => handleSubmit(0)}
        />
        <Card2
          personalRecord={personalRecords[1]}
          onRecordChange={(e) => handleRecordChange(1, e.target.value)}
          onEditClick={() => handleEditClick(1)}
          onSubmit={() => handleSubmit(1)}
        />
        <Card3
          personalRecord={personalRecords[2]}
          onRecordChange={(e) => handleRecordChange(2, e.target.value)}
          onEditClick={() => handleEditClick(2)}
          onSubmit={() => handleSubmit(2)}
        />
        <Card4
          personalRecord={personalRecords[3]}
          onRecordChange={(e) => handleRecordChange(3, e.target.value)}
          onEditClick={() => handleEditClick(3)}
          onSubmit={() => handleSubmit(3)}
        />
        <Card5
          personalRecord={personalRecords[4]}
          onRecordChange={(e) => handleRecordChange(4, e.target.value)}
          onEditClick={() => handleEditClick(4)}
          onSubmit={() => handleSubmit(4)}
        />
        <Card6
          personalRecord={personalRecords[5]}
          onRecordChange={(e) => handleRecordChange(5, e.target.value)}
          onEditClick={() => handleEditClick(5)}
          onSubmit={() => handleSubmit(5)}
        />
        </div>
    </div>
  );
}

export default ArmPage;
