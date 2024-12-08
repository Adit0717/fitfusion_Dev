import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AltNavbar from './components/LandingNavBar'; // Import the alternative Navbar
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Articles from './pages/Articles';
import DashBoardLanding from './pages/DashBoardLanding';
import AboutUs from './components/About';
import Exercises from './pages/Exercises';
import Trainers from './pages/Trainers';
import DetailedArticle from './pages/DetailedArticle';
import Contact from './components/Contact';
import FreeRecipeCollection from './pages/FreeRecipeCollection';
import MealPrepIdeas from './pages/MealPrepIdeas';
import MealPlanningTips from './pages/MealPlanningTips';
import SearchMealPrepIdeas from './pages/SearchMealPrepIdeas';
import SearchMealPrepByCalorie from './pages/SearchMealByCalories';
import SearchByCategory from './pages/SearchBycategory';
import SearchByExercise from './pages/SearchByExercise';
import TrainerList from './pages/TrainersList';
import NutritionalValues from './pages/NutritionalValues';

const App = () => {
  const location = useLocation(); // This should be inside the Router context
  
  const altNavbarRoutes = [
    '/TrainerList',
    '/MealPlanningTips',
    '/FreeRecipeCollection',
    '/MealPrepIdeas',
    '/SearchMealPrepIdeas',
    '/SearchMealPrepByCalorie',
    '/DashBoardLanding',
    '/Exercises',
    '/SearchByCategory',
    '/SearchByExercise',
    '/NutritionalValues',
  ];

  // Check if the current route should render the alternative navbar
  const showAltNavbar = altNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {showAltNavbar ? <AltNavbar /> : (location.pathname !== '/DashBoardLanding' && <Navbar />)}

      {/* Page Content */}
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/Exercises" element={<Exercises />} />
        <Route path="/SearchByCategory" element={<SearchByCategory />} />
        <Route path="/SearchByExercise" element={<SearchByExercise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<DetailedArticle />} />
        <Route path="/TrainerList" element={<TrainerList />} />
        <Route path="/MealPlanningTips" element={<MealPlanningTips />} />
        <Route path="/NutritionalValues" element={<NutritionalValues />} />
        <Route path="/FreeRecipeCollection" element={<FreeRecipeCollection />} />
        <Route path="/MealPrepIdeas" element={<MealPrepIdeas />} />
        <Route path="/SearchMealPrepIdeas" element={<SearchMealPrepIdeas />} />
        <Route path="/SearchMealPrepByCalorie" element={<SearchMealPrepByCalorie />} />
        <Route path="/articles" element={<DetailedArticle />} />
        <Route path="/DashBoardLanding" element={<DashBoardLanding />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
