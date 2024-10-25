// src/components/MealDropdowns.js
import React from 'react';

const MealDropdowns = () => {
  return (
    <div className="meal-dropdowns">
      <div className="dropdown">
        <label htmlFor="meal-type">Meal Type: </label>
        <select id="meal-type">
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="meal-plan">Common Meals: </label>
        <select id="meal-plan">
          <option value="weight-loss">Weight Loss Meal Plan (Calorie Deficit)</option>
          <option value="muscle-gain">Muscle Gain (Bulking) Meal Plan</option>
          <option value="maintenance">Maintenance (Balance) Meal Plan</option>
          <option value="low-carb">Low-Carb (Ketogenic) Meal Plan</option>
          <option value="plant-based">Plant-Based/Vegetarian Meal Plan</option>
        </select>
      </div>
    </div>
  );
};

export default MealDropdowns;