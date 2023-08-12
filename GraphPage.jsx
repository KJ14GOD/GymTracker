// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function GraphPage() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
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
//         </ul>
//       </nav>
//       <h1>Graph Page</h1>
//       <Calendar onChange={handleDateChange} value={selectedDate} />
//     </div>
//   );
// }

// export default GraphPage;



// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function GraphPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [workoutDates, setWorkoutDates] = useState([]);

//   useEffect(() => {
//     // Fetch workout dates from the server
//     fetch('/api/data')
//       .then(response => response.json())
//       .then(data => {
//         const workoutDates = data.map(workout => new Date(workout.date));
//         setWorkoutDates(workoutDates);
//       })
//       .catch(error => {
//         console.log('Error fetching workout dates:', error);
//       });
//   }, []);

//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <nav>
//       <ul>
//            <li><a href="/">Home</a></li>
//            <li><a href="/graph">Graph</a></li>
//            <li><a href="/arms">Arms</a></li>
//            <li><a href="/legs">Legs</a></li>
//            <li><a href="/chest">Chest</a></li>
//            <li><a href="/back">Back</a></li>
//            <li><a href="/workoutcard">Workout Card</a></li> 
//          </ul>
//       </nav>
//       <h1>Graph Page</h1>
//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDate}
//         tileClassName={({ date, view }) => {
//           const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
//           const isWorkoutDate = workoutDates.some(workoutDate => workoutDate.toDateString() === date.toDateString());

//           if (isSelected) {
//             return 'selected-date';
//           } else if (isWorkoutDate) {
//             return 'workout-date';
//           } else {
//             return 'non-workout-date';
//           }
//         }}
//       />
//     </div>
//   );
// }

// export default GraphPage;

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function GraphPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [workoutDates, setWorkoutDates] = useState([]);

//   useEffect(() => {
//     // Fetch workout dates from the server
//     fetch('/api/workout-dates')
//       .then(response => response.json())
//       .then(data => {
//         setWorkoutDates(data);
//       })
//       .catch(error => {
//         console.log('Error fetching workout dates:', error);
//       });
//   }, []);

//   const handleDateChange = date => {
//     setSelectedDate(date);
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
//         </ul>
//       </nav>
//       <h1>Graph Page</h1>
//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDate}
//         tileClassName={({ date, view }) => {
//           const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
//           const isWorkoutDate = workoutDates.some(workoutDate => workoutDate === date.toDateString());

//           if (isSelected) {
//             return 'selected-date';
//           } else if (isWorkoutDate) {
//             return 'workout-date';
//           } else {
//             return 'non-workout-date';
//           }
//         }}
//       />
//     </div>
//   );
// }

// export default GraphPage;

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function GraphPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [workoutDates, setWorkoutDates] = useState([]);

//   // useEffect(() => {
//   //   // Fetch workout dates from the server
//   //   fetch('/api/workout-dates')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setWorkoutDates(data.map(date => new Date(date).toDateString()));
//   //     })
//   //     .catch(error => {
//   //       console.log('Error fetching workout dates:', error);
//   //     });
//   // }, []);
//   // useEffect(() => {
//   //   // Fetch workout dates from the server
//   //   fetch('/api/workout-dates')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       console.log('Received workout dates:', data);
//   //       const formattedDates = data.map(date => new Date(date));
//   //       console.log('Formatted workout dates:', formattedDates);
//   //       setWorkoutDates(formattedDates);
//   //     })
//   //     .catch(error => {
//   //       console.log('Error fetching workout dates:', error);
//   //     });
//   // }, []);
//   useEffect(() => {
//     // Fetch workout dates from the server
//     fetch('/api/workout-dates')
//       .then(response => response.json())
//       .then(data => {
//         const formattedDates = data
//           .map(date => {
//             const parts = date.split('/'); // Assuming the date format is YYYY/MM/DD
//             const year = parseInt(parts[0], 10);
//             const month = parseInt(parts[1], 10) - 1; // Month is zero-based
//             const day = parseInt(parts[2], 10);
//             console.log('Received workout dates:', data);
//         const formattedDates = data.map(date => new Date(date));
//         console.log('Formatted workout dates:', formattedDates);
//         setWorkoutDates(formattedDates);
//             return new Date(year, month, day);
//           })
//           .filter(date => !isNaN(date.getTime())); // Filter out invalid dates
//         setWorkoutDates(formattedDates);
//       })
//       .catch(error => {
//         console.log('Error fetching workout dates:', error);
//       });
//   }, []);
  
  

//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   const isWorkoutDate = date =>
//     workoutDates.includes(date.toDateString());

//   const isValidDate = date =>
//     date instanceof Date && !isNaN(date);

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
//         </ul>
//       </nav>
//       <h1>Graph Page</h1>
//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDate}
//         // tileClassName={({ date }) => {
//         //   const selectedDateString = selectedDate?.toDateString();
//         //   const dateToCheck = isValidDate(date) ? date : new Date(date);
//         //   const dateToCheckString = dateToCheck.toDateString();

//         //   if (selectedDateString === dateToCheckString && isWorkoutDate(dateToCheckString)) {
//         //     return 'workout-date';
//         //   }

//         //   return '';
//         // }}
//         tileClassName={({ date, view }) => {
//           const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
//           const formattedDate = date.toLocaleDateString('en-CA').replace(/-/g, '/'); // Format date as YYYY/MM/DD
//           const isWorkoutDate = workoutDates.includes(formattedDate);
        
//           if (isSelected) {
//             return 'selected-date';
//           } else if (isWorkoutDate) {
//             return 'workout-date';
//           } else {
//             return 'non-workout-date';
//           }
//         }}
        
//       />
//       <style>{`
//         .workout-date {
//           background-color: green;
//           color: white;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default GraphPage;

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './GraphPage.css'; // Import the CSS file for styling

// function GraphPage() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [workoutDates, setWorkoutDates] = useState([]);

//   useEffect(() => {
//     // Fetch workout dates from the server
//     fetch('/api/workout-dates')
//       .then(response => response.json())
//       .then(data => {
//         setWorkoutDates(data);
//       })
//       .catch(error => {
//         console.log('Error fetching workout dates:', error);
//       });
//   }, []);

//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   const tileClassName = ({ date, view }) => {
//     const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
//     const formattedDate = date.toLocaleDateString('en-CA').replace(/-/g, '/'); // Format date as YYYY/MM/DD
//     const isWorkoutDate = workoutDates.includes(formattedDate);

//     if (isSelected) {
//       return 'selected-date';
//     } else if (isWorkoutDate) {
//       return 'workout-date'; // Apply green color to workout dates
//     } else {
//       return 'non-workout-date';
//     }
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//         <ul>
//            <li><a href="/">Home</a></li>
//            <li><a href="/graph">Graph</a></li>
//            <li><a href="/arms">Arms</a></li>
//            <li><a href="/legs">Legs</a></li>
//            <li><a href="/chest">Chest</a></li>
//            <li><a href="/back">Back</a></li>
//            <li><a href="/workoutcard">Workout Card</a></li>
//          </ul>
//         </ul>
//       </nav>
//       <h1>Graph Page</h1>
//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//     </div>
//   );
// }

// export default GraphPage;
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GraphPage.css'; // Import the CSS file for styling

function GraphPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workoutDates, setWorkoutDates] = useState([]);

  useEffect(() => {
    // Fetch workout dates from the server
    fetch('/api/workout-dates')
      .then(response => response.json())
      .then(data => {
        const formattedDates = data.map(date => new Date(date));
        setWorkoutDates(formattedDates);
      })
      .catch(error => {
        console.log('Error fetching workout dates:', error);
      });
  }, []);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date }) => {
    const workoutDate = workoutDates.find(d => d.toDateString() === date.toDateString());
    return workoutDate ? 'highlighted-date' : null;
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
      <h1>Graph Page</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default GraphPage;
