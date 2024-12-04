import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Articles from './pages/Articles';
import AboutUs from './components/About';
import DashBoardLanding  from './pages/DashBoardLanding';
import ProMembershipBenefits from './pages/ProMembershipBenefits';
import FreeRecipeCollection from './pages/FreeRecipeCollection';
import MealPrepIdeas from './pages/MealPrepIdeas';
import MealPlanningTips from './pages/MealPlanningTips';
import ExercisePlans from './pages/Exercises';

const App = () => {
  useEffect(() => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
        window.location.replace('/home');
    }
}, []);
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DashBoardLanding" element={<DashBoardLanding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/ExercisePlans' element={<ExercisePlans/>} />
          <Route path='/MealPlanningTips' element={<MealPlanningTips/>} />
          <Route path='/MealPrepIdeas' element={<MealPrepIdeas/>} />
          <Route path='/ProMembershipBenefits' element={<ProMembershipBenefits/>} />
          <Route path='/FreeReceipeCollection' element={<FreeRecipeCollection/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;