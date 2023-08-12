import React, { useState, useEffect } from 'react';
import './MyDiet.css';

const MyDiet = () => {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/diets')
      .then((response) => response.json())
      .then((data) => {
        setDiets(data);
      })
      .catch((error) => {
        console.error('Error fetching diet data:', error);
      });
  }, []);

  const renderDiets = () => {
    return diets.map((diet, index) => (
      
      <div key={index} className="diet-card">
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
          {/* <li><a href="/creatediet">Create Diet</a></li> */}
          <li><a href='/myworkout'>My Workout</a></li>
          {/* <li><a href='/mydiet'>My Diet</a></li> */}
        </ul>
      </nav>
        <h2>{diet.meal}</h2>
        <div className="meal-section">
          <h3>Breakfast</h3>
          {JSON.parse(diet.breakfast).map((meal, mealIndex) => (
            <div key={mealIndex} className="meal-box">
              <p>
                <strong>Meal Name:</strong> {meal.meal_name}
              </p>
              <p>
                <strong>Calories:</strong> {meal.calories}
              </p>
              <p>
                <strong>Quantity:</strong> {meal.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="meal-section">
          <h3>Lunch</h3>
          {JSON.parse(diet.lunch).map((meal, mealIndex) => (
            <div key={mealIndex} className="meal-box">
              <p>
                <strong>Meal Name:</strong> {meal.meal_name}
              </p>
              <p>
                <strong>Calories:</strong> {meal.calories}
              </p>
              <p>
                <strong>Quantity:</strong> {meal.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="meal-section">
          <h3>Dinner</h3>
          {JSON.parse(diet.dinner).map((meal, mealIndex) => (
            <div key={mealIndex} className="meal-box">
              <p>
                <strong>Meal Name:</strong> {meal.meal_name}
              </p>
              <p>
                <strong>Calories:</strong> {meal.calories}
              </p>
              <p>
                <strong>Quantity:</strong> {meal.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return <div className="diet-container">{renderDiets()}</div>;
};

export default MyDiet;

