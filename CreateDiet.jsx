import React, { useState } from 'react';
import './CreateDiet.css';

const CreateDiet = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);
  const [lunchMeals, setLunchMeals] = useState([]);
  const [dinnerMeals, setDinnerMeals] = useState([]);

  const handleAddMeal = (mealType) => {
    switch (mealType) {
      case 'breakfast':
        setBreakfastMeals([...breakfastMeals, { name: '', calories: '', quantity: '' }]);
        break;
      case 'lunch':
        setLunchMeals([...lunchMeals, { name: '', calories: '', quantity: '' }]);
        break;
      case 'dinner':
        setDinnerMeals([...dinnerMeals, { name: '', calories: '', quantity: '' }]);
        break;
      default:
        break;
    }
  };

  const handleDeleteMeal = (mealType) => {
    switch (mealType) {
      case 'breakfast':
        setBreakfastMeals(breakfastMeals.slice(0, -1));
        break;
      case 'lunch':
        setLunchMeals(lunchMeals.slice(0, -1));
        break;
      case 'dinner':
        setDinnerMeals(dinnerMeals.slice(0, -1));
        break;
      default:
        break;
    }
  };

  const handleChangeMeal = (mealType, index, field, value) => {
    switch (mealType) {
      case 'breakfast':
        const updatedBreakfastMeals = [...breakfastMeals];
        updatedBreakfastMeals[index][field] = value;
        setBreakfastMeals(updatedBreakfastMeals);
        break;
      case 'lunch':
        const updatedLunchMeals = [...lunchMeals];
        updatedLunchMeals[index][field] = value;
        setLunchMeals(updatedLunchMeals);
        break;
      case 'dinner':
        const updatedDinnerMeals = [...dinnerMeals];
        updatedDinnerMeals[index][field] = value;
        setDinnerMeals(updatedDinnerMeals);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const meals = [
      { mealType: 'breakfast', mealsData: breakfastMeals },
      { mealType: 'lunch', mealsData: lunchMeals },
      { mealType: 'dinner', mealsData: dinnerMeals },
    ];
  
    const formData = meals.reduce((acc, meal) => {
      acc[meal.mealType] = meal.mealsData.map((mealItem) => ({
        meal_name: mealItem.name,
        calories: parseInt(mealItem.calories),
        quantity: parseInt(mealItem.quantity),
      }));
      return acc;
    }, {});
  
    fetch('http://localhost:8000/api/creatediet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data successfully sent to the server:', data);
        // Add any additional logic or notifications for successful form submission
      })
      .catch((error) => {
        console.error('Error sending data to the server:', error);
        // Add any error handling or notifications for failed form submission
      });
  
    // Clear the form fields
    setBreakfastMeals([]);
    setLunchMeals([]);
    setDinnerMeals([]);
  };
  

  const renderMeals = (mealType, meals) => {
    return meals.map((meal, index) => (
      <div key={index} className="meal-question">
        <div className="question1">
          <label htmlFor={`${mealType}MealName${index}`}>Meal {index + 1}:</label>
          <input
            type="text"
            id={`${mealType}MealName${index}`}
            value={meal.name}
            onChange={(e) => handleChangeMeal(mealType, index, 'name', e.target.value)}
            placeholder="Enter meal name"
          />
        </div>
        <div className="question2">
          <label htmlFor={`${mealType}MealCalories${index}`}>Calories:</label>
          <input
            type="number"
            id={`${mealType}MealCalories${index}`}
            value={meal.calories}
            onChange={(e) => handleChangeMeal(mealType, index, 'calories', e.target.value)}
            placeholder="Enter calories"
          />
        </div>
        <div className="question3">
          <label htmlFor={`${mealType}MealQuantity${index}`}>Quantity:</label>
          <input
            type="text"
            id={`${mealType}MealQuantity${index}`}
            value={meal.quantity}
            onChange={(e) => handleChangeMeal(mealType, index, 'quantity', e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
        <div className="delete-button-container">
          <button type="button" onClick={() => handleDeleteMeal(mealType)}>
            Delete Meal
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
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
      <h1 className="form-heading">Create Your Diet</h1>
      <form onSubmit={handleSubmit}>
        <div className="meal-container">
          <div className="meal-section">
            <h2>Breakfast</h2>
            {renderMeals('breakfast', breakfastMeals)}
            <div className="add-button-container">
              <button type="button" onClick={() => handleAddMeal('breakfast')}>
                Add Meal
              </button>
            </div>
          </div>
          <div className="meal-section">
            <h2>Lunch</h2>
            {renderMeals('lunch', lunchMeals)}
            <div className="add-button-container">
              <button type="button" onClick={() => handleAddMeal('lunch')}>
                Add Meal
              </button>
            </div>
          </div>
          <div className="meal-section">
            <h2>Dinner</h2>
            {renderMeals('dinner', dinnerMeals)}
            <div className="add-button-container">
              <button type="button" onClick={() => handleAddMeal('dinner')}>
                Add Meal
              </button>
            </div>
          </div>
        </div>
        <div className="submit-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateDiet;
