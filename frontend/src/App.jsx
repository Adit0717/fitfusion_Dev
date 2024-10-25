import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar
import LandingPage from './pages/LandingPage';  // Import the LandingPage
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';
import MealDropdowns from './components/MealDropdown';
import './components/App.css';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Navigation Menu */}
        <Navigation onMenuClick={handleMenuClick} />

        {/* Page Content */}
        <div className={`content ${activeMenu ? 'content-visible' : 'content-hidden'}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {/* Dropdowns based on active menu */}
          {activeMenu === 'meals' && <MealDropdowns />}
          {activeMenu === 'exercises' && <h2>Exercise Section (Coming Soon)</h2>}
        </div>
      </div>
    </Router>
  );
};

export default App;
