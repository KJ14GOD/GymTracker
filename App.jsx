import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import GraphPage from './GraphPage';
import ArmPage from './ArmPage';
import ChestPage from './ChestPage';
import BackPage from './BackPage';
import LegPage from './LegPage';
import WorkoutCard from './WorkoutCard';
import CreateWorkout from './CreateWorkout';
import MyWorkout from './MyWorkout';
import Notes from './Notes';
import CreateDiet from './CreateDiet';
import MyDiet from './MyDiet';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/arms" element={<ArmPage/>} />
          <Route path="/legs" element={<LegPage />} />
          <Route path="/chest" element={<ChestPage />} />
          <Route path="/back" element={<BackPage />} /> 
          <Route path="/workoutcard" element={<WorkoutCard />} /> 
          <Route path="/createworkout" element={<CreateWorkout />} /> 
          <Route path="/myworkout" element={<MyWorkout />} /> 
          <Route path="/notes" element={<Notes />} /> 
          {/* <Route path="/creatediet" element={<CreateDiet />} />  */}
          {/* <Route path="/mydiet" element={<MyDiet/>} />  */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;