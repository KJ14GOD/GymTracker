import React, { useState } from 'react';

const Notes = () => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
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
      <h2>Notes</h2>
      <textarea
        value={noteText}
        onChange={handleChange}
        placeholder="Write your notes here..."
        style={{ width: '100%', height: '200px' }}
      />
      <div>
        <h3>Your Notes:</h3>
        <p>{noteText}</p>
      </div>
    </div>
  );
};

export default Notes;
